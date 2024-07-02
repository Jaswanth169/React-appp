import React, { useContext, useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUploadCloud } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { VideoContext } from './DataContext';
import { TailSpin } from 'react-loader-spinner';

function Upload() {
  const { setVideo, setAudio } = useContext(VideoContext);
  const [fileError, setFileError] = useState('');
  const [fileType, setFileType] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const showAlert = (message) => {
    const alertBox = document.createElement('div');
    alertBox.setAttribute('class', 'custom-alert');
    alertBox.textContent = message;
    document.body.appendChild(alertBox);
    setTimeout(() => {
      document.body.removeChild(alertBox);
    }, 3000); // Remove alert after 3 seconds
  };

  const onDrop = useCallback((acceptedFiles) => {
    if (!fileType) {
      showAlert('Please select a file type.');
      return;
    }

    const file = acceptedFiles[0];

    if (!file) {
      setFileError(`Please select a ${fileType} file only.`);
      showAlert(`Please select a ${fileType} file only.`);
      return;
    }

    if (fileType === 'video' && file.type.split('/')[0] !== 'video') {
      setFileError('Please select a video file only.');
      showAlert('Please select a video file only.');
      return;
    }

    if (fileType === 'audio' && file.type.split('/')[0] !== 'audio') {
      setFileError('Please select an audio file only.');
      showAlert('Please select an audio file only.');
      return;
    }

    setFileError(''); // Clear any previous error messages
    setLoading(true); // Show loader

    // Upload file
    const formData = new FormData();
    formData.append(fileType === 'video' ? 'video_file' : 'audio_file', file);
    formData.append('choice', fileType === 'video' ? '3' : '2');

    axios.post('https://speechdia.azurewebsites.net/process_audio', formData)
      .then(response => {
        // Handle success response
        if (fileType === 'video') {
          setVideo(file);
        } else {
          setAudio(file);
        }
        setLoading(false); // Hide loader
        navigate('/chat');
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        showAlert('Error uploading file. Please check console for details.');
        setLoading(false); // Hide loader
      });
  }, [fileType, setVideo, setAudio, navigate]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    noClick: true, // Disable automatic click handling
    accept: fileType === 'video' ? 'video/*' : 'audio/*'
  });

  const handleClick = (type) => {
    setFileType(type);
    document.querySelector('input[type="file"]').click();
  };

  return (
    <div className="bg-[#191C24] border-2 border-[#2D2D2D] p-6 rounded-lg h-auto shadow-md w-full mt-4">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">
        Automated Transcription and Translation Model!
      </h2>

      <div
        {...getRootProps()}
        className="border-2 border-dashed border-[#0052CC] pt-10 pb-10 rounded-lg bg-[#162A46] flex flex-col items-center justify-center text-white cursor-pointer mb-6"
        style={{ maxWidth: '800px', margin: '0 auto' }}
      >
        <input {...getInputProps()} />
        <FiUploadCloud className="text-2xl mb-4" />
        <p className="text-xl">Choose a file or drag & drop a file</p>
        <p className="text-md text-gray-400 mt-1">
          mp4, avi, mov, wmv, mkv, and flv
        </p>
        <div className="flex mt-4">
          <button
            onClick={() => handleClick('video')}
            className="px-4 py-2 mr-4 rounded-lg bg-[#0052CC] text-white flex items-center"
          >
            <FiUploadCloud className="mr-2" /> Upload Video
          </button>
          <button
            onClick={() => handleClick('audio')}
            className="px-4 py-2 rounded-lg bg-[#0052CC] text-white flex items-center"
          >
            <FiUploadCloud className="mr-2" /> Upload Audio
          </button>
        </div>
        {fileError && <p className="text-red-500 mt-2">{fileError}</p>}
      </div>

      {loading && (
        <div className="flex justify-center items-center mt-4">
          <TailSpin
            visible={true}
            height="80"
            width="80"
            color="#0052cc"
            ariaLabel="tail-spin-loading"
          />
        </div>
      )}

      {/* Custom Alert Styles */}
      <style>
        {`
          .custom-alert {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: black;
            color: white;
            padding: 10px 20px;
            border-radius: 8px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
            z-index: 1000;
          }
        `}
      </style>
    </div>
  );
}

export default Upload;
