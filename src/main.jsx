
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import VideoUpload from './Components/VideoUpload';
import { VideoProvider } from './Components/DataContext';

const routing = (
  <VideoProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/chat" element={<App />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="upload" element={<VideoUpload />} />
      </Routes>
    </Router>
  </VideoProvider>
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {routing}
  </React.StrictMode>
);
