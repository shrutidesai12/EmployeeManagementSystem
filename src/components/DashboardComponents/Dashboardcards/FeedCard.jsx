// import React from "react";
// import { Heart, MessageCircle, Share2, Send } from "lucide-react";

// export default function FeedCard() {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow">

//       {/* Top Section */}
//       <div className="flex justify-between items-start">

//         {/* Left */}
//         <div className="flex gap-3">

//           {/* Avatar */}
//           <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center font-semibold text-green-700">
//             BS
//           </div>

//           {/* Text */}
//           <div>
//             <div className="font-semibold text-sm">
//               Bandi Saideva praised Udit Thakur
//             </div>

//             {/* Tag */}
//             <div className="flex items-center gap-2 mt-1">
//               <div className="flex items-center gap-1 bg-teal-600 text-white px-2 py-0.5 rounded-full text-xs">
//                 <Send size={12} />
//                 Above & Beyond
//               </div>
//             </div>
//           </div>

//         </div>

//         {/* Right Time */}
//         <div className="text-xs text-gray-400">
//           2 months ago
//         </div>

//       </div>

//       {/* Message */}
//       <div className="text-sm mt-3 text-gray-700">
//         Thank you, Udit, for your great help in Topic Identification.
//       </div>

//       {/* Bottom Actions */}
//       <div className="flex justify-between items-center mt-4 text-sm text-gray-500">

//         {/* Left Actions */}
//         <div className="flex gap-4">

//           <div className="flex items-center gap-1 cursor-pointer">
//             <Heart size={16} />
//             <span>Like</span>
//           </div>

//           <div className="flex items-center gap-1 cursor-pointer">
//             <MessageCircle size={16} />
//             <span>Comment</span>
//           </div>

//           <div className="flex items-center gap-1 cursor-pointer">
//             <Share2 size={16} />
//             <span>Share</span>
//           </div>

//         </div>

//         {/* Right Info */}
//         <div className="flex items-center gap-2 text-xs">
//           <Heart size={14} className="text-red-500 fill-red-500" />
//           <span>You and 6 others · 0 comments</span>
//         </div>

//       </div>

//     </div>
//   );
// }


// import React from "react";
// import { Heart, MessageCircle, Share2, Send } from "lucide-react";

// export default function FeedCard() {
//   return (
//     <div className="bg-white p-4 rounded-lg shadow">

//       {/* Top Section */}
//       <div className="flex gap-3">

//         {/* Avatar */}
//         <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center font-semibold text-green-700">
//           BS
//         </div>

//         {/* Content */}
//         <div className="flex-1">

//           {/* Name */}
//           <div className="font-semibold text-sm">
//             Bandi Saideva praised Udit Thakur
//           </div>

//           {/* Time BELOW name */}
//           <div className="text-xs text-gray-400 mt-1">
//             2 months ago
//           </div>

//           {/* Icon only (Above & Beyond) */}
// <div className="mt-2 pr-1 flex items-center gap-2">
  
//   {/* Icon */}
//   <div className="w-7 h-7 flex items-center justify-center rounded-full bg-teal-700">
//     <Send size={14} className="text-white" />
//   </div>

//   {/* Text */}
//   <span className="text-sm text-gray-700 font-medium -ml-0.5">
//     Above & Beyond
//   </span>

// </div>
//           {/* Message */}
//           <div className="text-sm mt-3 text-gray-700">
//             Thank you, Udit, for your great help in Topic Identification.
//           </div>

//         </div>

//       </div>

//       {/* Bottom Actions */}
//       <div className="flex justify-between items-center mt-4 text-sm text-gray-500">

//         {/* Left */}
//         <div className="flex gap-4">

//           <div className="flex items-center gap-1 cursor-pointer">
//             <Heart size={16} />
//             <span>Like</span>
//           </div>

//           <div className="flex items-center gap-1 cursor-pointer">
//             <MessageCircle size={16} />
//             <span>Comment</span>
//           </div>

//           <div className="flex items-center gap-1 cursor-pointer">
//             <Share2 size={16} />
//             <span>Share</span>
//           </div>

//         </div>

//         {/* Right */}
//         <div className="flex items-center gap-2 text-xs">
//           <Heart size={14} className="text-red-500 fill-red-500" />
//           <span>You and 6 others · 0 comments</span>
//         </div>

//       </div>

//     </div>
//   );
// }




import React from "react";
import { Heart, MessageCircle, Share2, Send } from "lucide-react";

export default function FeedCard({
  initials,
  title,
  time,
  message,
}) {
  return (
    <div className="bg-white p-4  shadow">

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

          {/* Icon + Text */}
          <div className="mt-2 flex items-center gap-2">
            <div className="w-7 h-7 flex items-center justify-center rounded-full bg-teal-700">
              <Send size={14} className="text-white" />
            </div>

            <span className="text-sm text-gray-700 font-medium -ml-0.5">
              Above & Beyond
            </span>
          </div>

          {/* Message */}
          <div className="text-sm mt-3 text-gray-700">
            {message}
          </div>

        </div>

      </div>

      {/* Actions */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">

        <div className="flex gap-4">
          <div className="flex items-center gap-1 cursor-pointer">
            <Heart size={16} />
            <span>Like</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <MessageCircle size={16} />
            <span>Comment</span>
          </div>

          <div className="flex items-center gap-1 cursor-pointer">
            <Share2 size={16} />
            <span>Share</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <Heart size={14} className="text-red-500 fill-red-500" />
          <span>You and 6 others · 0 comments</span>
        </div>

      </div>

    </div>
  );
}