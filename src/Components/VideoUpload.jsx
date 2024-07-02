import Header from './Header'; 
import Upload from './Upload';

function VideoUpload() {
  return (
    <div className="bg-[#0F121A] min-h-screen">
      <Header />
      <div className='px-10'>
        <Upload/>
      </div>
    </div>
  );
}

export default VideoUpload;
