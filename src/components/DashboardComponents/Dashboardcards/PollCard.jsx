import React from "react";
import { Heart, MessageCircle, Share2 } from "lucide-react";

export default function PollCard({
  initials,
  title,
  time,
  question,
  option,
  percentage,
  votes,
}) {
  return (
    <div className="bg-white p-3 shadow">

      <div className="flex gap-3">

        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center font-semibold text-green-700">
          {initials}
        </div>

        <div className="flex-1">

          {/* Title */}
          <div className="font-semibold text-sm">
            {title}
          </div>

          {/* Time */}
          <div className="text-xs text-gray-400 mt-1">
            {time}
          </div>

          {/* Question */}
          <div className="text-sm mt-3 text-gray-800">
            {question}
          </div>

          {/* Option */}
          <div className="text-sm text-gray-600 mt-2">
            {option}
          </div>

          {/* Progress Bar */}
          <div className="mt-2">
            <div className="bg-gray-200 h-2 rounded">
              <div
                className="bg-[#718Fc2] h-2 rounded"
                style={{ width: `${percentage}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>{percentage}%</span>
              <span>{votes} votes</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}