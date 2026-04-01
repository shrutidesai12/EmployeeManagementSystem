import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { MoreVertical } from "lucide-react";


export default function OnboardingTasks() {
  return (
    <div className="bg-white shadow  p-6 flex items-center justify-between w-full max-w-7xl mx-auto">
      
      {/* Left: Text */}
      <div>
        <h3 className="font-semibold text-gray-700 text-lg">
          Complete your onboarding tasks
        </h3>
        <p className="text-sm text-gray-500 mt-1">
          Finish your tasks in order to have a smooth onboarding experience
        </p>
      </div>

      {/* Center: Circular Progress */}
      <div className="w-10 ml-150">
        <CircularProgressbar
          value={3}
          maxValue={3}
          text={`3/3`}
          styles={buildStyles({
            pathColor: '#10B981',
            textColor: '#10B981',
            trailColor: '#E5E7EB',
            textSize: '16px'
          })}
        />
      </div>

<div className="ml-2">
  <MoreVertical size={16} color="#9CA3AF" /> {/* gray-400 color */}
</div>

    </div>
  );
}