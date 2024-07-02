
import Header from './Components/Header';
import VideoDetails from './Components/VideoDetails';
import Transcription from './Components/Transcription';
import ChatBot from './Components/ChatBot';

function App() {
  return (
    <div className="bg-[#0F121A] min-h-screen">
      <Header />
      <div className="mt-6 grid grid-cols-12 gap-6">
        <div className="col-span-8">
          <VideoDetails />
          <Transcription />
        </div>
        <div className="col-span-4">
          <ChatBot />
        </div>
      </div>
    </div>
  );
}

export default App;
