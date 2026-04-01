// import React from "react";

// export default function InboxCard() {
//   return (
//     <div className="bg-gray-50 p-4 shadow-sm">
//       <div className="font-medium">Inbox</div>
//       <div className="text-sm text-gray-500 mt-1">
//         Good job! You have no pending actions
//       </div>
//     </div>
//   );
// }



import React from "react";

export default function InboxCard({ count = 0 }) {
  return (
    <div className="bg-gray-50 p-4 shadow-sm">

      {/* Header with Badge */}
      <div className="flex justify-between items-center">
        
        <div className="font-medium">Inbox</div>

        {/* Badge */}
        {count > 0 && (
          <div className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
            {count}
          </div>
        )}

      </div>

      {/* Message */}
      <div className="text-sm text-gray-500 mt-1">
        {count > 0
          ? `You have ${count} pending actions`
          : "Good job! You have no pending actions"}
      </div>

    </div>
  );
}