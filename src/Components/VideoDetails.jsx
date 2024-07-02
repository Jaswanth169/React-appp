import { useContext } from 'react';
import { VideoContext } from './DataContext';

function VideoDetails() {
  const { video, audio } = useContext(VideoContext);

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const file = video || audio;
  const isVideo = Boolean(video);

  return (
    <div className="bg-[#191C24] border-2 border-[#2D2D2D] p-4 rounded-lg shadow-md ml-8 mt-4">
      {file && (
        <div className="flex items-start space-x-4">
          {isVideo ? (
            <video
              src={URL.createObjectURL(file)}
              className="w-[500px] h-[260px] rounded-lg"
              controls
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <audio
              src={URL.createObjectURL(file)}
              className="w-[500px] h-[50px] rounded-lg"
              controls
            >
              Your browser does not support the audio element.
            </audio>
          )}
          <div className="text-white flex flex-col">
            <p className="mb-4 bg-[#272932] text-sm text-white px-6 w-[400px] rounded-lg py-2">
              Name: {file.name}
            </p>
            <p className="mb-4 bg-[#272932] text-sm text-white px-6 w-[400px] rounded-lg py-2">
              Type: {file.type}
            </p>
            <p className="mb-4 bg-[#272932] text-sm text-white px-6 w-[400px] rounded-lg py-2">
              Size: {formatFileSize(file.size)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoDetails;
