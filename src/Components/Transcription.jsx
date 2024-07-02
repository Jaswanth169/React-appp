import React, { useState, useEffect } from 'react';
import { BiSolidCopy } from "react-icons/bi";
import { PiExport } from "react-icons/pi";
import axios from 'axios';

function Transcription() {
  const [selectedTab, setSelectedTab] = useState('transcribed');
  const [showPopup, setShowPopup] = useState(false);
  const [transcribedText, setTranscribedText] = useState('');
  const [translatedText, setTranslatedText] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://speechdia.azurewebsites.net/read_texts');  // Ensure this URL is correct
      const { transcribed_text, translated_text } = response.data;
      setTranscribedText(transcribed_text);
      setTranslatedText(translated_text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        console.log('Text copied to clipboard');
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false);
        }, 2000);
      })
      .catch((error) => {
        console.error('Error copying text: ', error);
      });
  };

  const handleExportText = (text, type) => {
    const fileName = `${type}.txt`;
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex justify-between rounded-lg shadow-md ml-8 mt-8">
      <div className="w-1/4 bg-[#191C24] border-2 border-[#2D2D2D] py-4 px-4 mr-4 h-[120px] rounded-lg text-white">
        <button
          onClick={() => setSelectedTab('transcribed')}
          className={`block w-full text-left px-4 py-2 ${selectedTab === 'transcribed' ? 'border-l-2 border-[#0052CC]' : ''}`}
        >
          Transcribed Text
        </button>
        <button
          onClick={() => setSelectedTab('translated')}
          className={`block w-full text-left px-4 py-2 ${selectedTab === 'translated' ? 'border-l-2 border-[#0052CC]' : ''}`}
        >
          Translated Text
        </button>
      </div>

      <div className="w-3/4">
        <div className="bg-[#191C24] border-2 border-[#2D2D2D] p-4 rounded-lg text-white relative">
          {showPopup && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-2 bg-gradient-to-r from-[#4A4E54] to-[#272932] text-white px-4 py-2 rounded-md">
              Text copied to clipboard
            </div>
          )}
          <div className='bg-[#272932] py-4 px-4 rounded-lg'>
            {selectedTab === 'transcribed' && (
              <>
                <button
                  onClick={() => handleExportText(transcribedText, 'transcribed')}
                  className="absolute top-0 right-0 mt-8 mr-32 flex items-center bg-[#0052CC] text-white px-3 py-1 rounded-md"
                >
                  <PiExport className="mr-2" />
                  <span>Export</span>
                </button>
                <button
                  onClick={() => handleCopyText(transcribedText)}
                  className="absolute top-0 right-0 mt-8 mr-8 flex items-center bg-[#0052CC] text-white px-3 py-1 rounded-md"
                >
                  <BiSolidCopy className="mr-2" />
                  <span>Copy</span>
                </button>
                <div className="mt-10">{transcribedText}</div>
              </>
            )}
            {selectedTab === 'translated' && (
              <>
                <button
                  onClick={() => handleExportText(translatedText, 'translated')}
                  className="absolute top-0 right-0 mt-8 mr-32 flex items-center bg-[#0052CC] text-white px-3 py-1 rounded-md"
                >
                  <PiExport className="mr-2" />
                  <span>Export</span>
                </button>
                <button
                  onClick={() => handleCopyText(translatedText)}
                  className="absolute top-0 right-0 mt-8 mr-8 flex items-center bg-[#0052CC] text-white px-3 py-1 rounded-md"
                >
                  <BiSolidCopy className="mr-2" />
                  <span>Copy</span>
                </button>
                <div className="mt-10">{translatedText}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transcription;
