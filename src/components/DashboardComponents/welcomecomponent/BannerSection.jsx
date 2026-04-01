import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate } from "react-router-dom"; // <-- import


export default function BannerSection() {
      const navigate = useNavigate(); // <-- initialize navigate

  return (
    <div
      className="relative flex justify-between items-center rounded-sm p-9 text-white w-full max-w-7xl mx-auto"
      style={{
        background: "linear-gradient(90deg, rgb(155,143,200), rgb(35,173,216))"
      }}
    >
      {/* Left side: Profile info */}
      <div className="flex items-center gap-4">
        <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
          <img
            src="https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.jpg?s=612x612&w=0&k=20&c=uhMwAWEPSVDzWUDkqDimY5AaznfCXy7j30KyJnUuIMQ="
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-xl font-semibold">Shruti Desai!</h2>
          <p className="text-xs opacity-80">Frontend Developer .Pune</p>
        </div>
      </div>

      {/* Right side: Progress container */}
      <div className="bg-black/30 p-3 rounded-sm flex items-center w-52 gap-3">
        {/* Progress circle */}
        <div className="w-14 h-14 flex-shrink-0">
          <CircularProgressbar
            value={100}
            text={`100%`}
            styles={buildStyles({
              pathColor: '#10B981',
              textColor: '#fff',
              trailColor: 'rgba(255,255,255,0.2)',
              textSize: '12px'
            })}
          />
        </div>

        {/* Text & Button */}
        <div className="flex flex-col justify-center">
          <p className="text-xs text-white font-semibold">
            Your profile completed!
          </p>
          <button className="mt-1 text-gray-700 px-3 py-1  text-xs font-semibold"
          onClick={() => navigate("/employees/1/profile")} // <-- navigate to profile page

          >
            View Profile &gt;
          </button>
        </div>
      </div>
    </div>
  );
}