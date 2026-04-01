import React from "react";

export default function IDDrawer({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-[65px] right-0 bottom-0 left-0 z-50 flex justify-end ">
      
      {/* Drawer */}
      <div className="w-[400px] h-[calc(100vh-70px)] bg-white shadow-lg p-5 relative overflow-y-auto">

        {/* Header */}
        <h2 className="text-lg font-semibold mb-4">Employee ID Details</h2>

        {/* ID CARD */}
        <div className="border border-gray-200 rounded-lg p-4 shadow-sm text-center">

          {/* Profile Image */}
          <div className="w-20 h-20 mx-auto mb-3 rounded-full overflow-hidden border">
            <img
              src="https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.jpg?s=612x612&w=0&k=20&c=uhMwAWEPSVDzWUDkqDimY5AaznfCXy7j30KyJnUuIMQ="
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name & ID */}
          <h3 className="text-md font-semibold">Shruti Desai</h3>
          <p className="text-sm text-gray-500 mb-3">EMP00123</p>

          {/* Details */}
          <div className="text-sm text-left space-y-2 mt-3">
            <p><span className="font-medium">Department:</span> IT</p>
            <p><span className="font-medium">Location:</span> Nashik</p>
            <p><span className="font-medium">Blood Group:</span> B+</p>
            <p><span className="font-medium">Joining Date:</span> 01 Aug 2023</p>
          </div>

        </div>

        {/* Download Button */}
     <div className="mt-5 flex justify-left">
  <button className="w-48 bg-[#718FC2] text-white py-2 rounded text-sm hover:bg-blue-700">
    Download ID Card
  </button>
</div>

     

        {/* Close Icon */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500"
        >
          ✕
        </button>
      </div>
    </div>
  );
}