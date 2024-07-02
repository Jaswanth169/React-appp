import { createContext, useState } from 'react';

export const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [video, setVideo] = useState(null);
  const [audio, setAudio] = useState(null);

  return (
    <VideoContext.Provider value={{ video, setVideo, audio, setAudio }}>
      {children}
    </VideoContext.Provider>
  );
};
