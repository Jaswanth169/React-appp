// import { BsLightningCharge } from "react-icons/bs";
// import { FaSoundcloud } from "react-icons/fa";
// import { PiExport } from "react-icons/pi";

function Header() {
  return (
    <div className="flex items-center justify-between bg-[#191C24] border-b-2 border-[#2D2D2D] p-4 text-white">
      {/* Left side: Text and Media Icons */}
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold flex items-center space-x-2">
          <span>Add Video</span>
          <span>&</span>
          <span>Audio</span>
        </h1>
      </div>

      {/* Right side: Buttons */}
      <div className="flex items-center space-x-4">
        {/* <button className="flex items-center bg-[#FFA31A] text-white px-4 py-2 rounded-lg ">
          <BsLightningCharge className="mr-2" />
          <span>Update</span>
        </button>
        <button className="flex items-center bg-[#191c24] text-white px-4 py-2 rounded-lg border-white border-2">
          <FaSoundcloud className="mr-2" />
          <span>Auto Save</span>
        </button> */}
        {/* <button className="flex items-center bg-[#0052CC] text-white px-4 py-2 rounded-lg">
          <PiExport className="mr-2" />
          <span>Export</span>
        </button> */}
      </div>
    </div>
  );
}

export default Header;
