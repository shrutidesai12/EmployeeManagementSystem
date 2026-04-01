import React from "react";

export default function PostCard({ postTab, setPostTab }) {
  return (
    <div className="bg-white p-4 shadow mb-4">

      {/* Tabs */}
      <div className="flex space-x-6 border-b pb-2 mb-3 text-sm border-gray-200">

        {["Post", "Announcement", "Poll", "Praise"].map((tab) => (
          <button
            key={tab}
            onClick={() => setPostTab(tab)}
            className={` transition ${
              postTab === tab
                ? "  text-black font-semibold"
                : "text-gray-500"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* Input based on tab */}
      {postTab === "Post" && (
        <input
          className="w-full rounded p-2"
          placeholder="Write your post here"
        />
      )}

      {postTab === "Announcement" && (
        <input
          className="w-full rounded p-2 "
          placeholder="Write an announcement..."
        />
      )}

      {postTab === "Poll" && (
        <input
          className="w-full rounded p-2 "
          placeholder="Ask a question..."
        />
      )}

      {postTab === "Praise" && (
        <input
          className="w-full rounded p-2 "
          placeholder="Appreciate someone..."
        />
      )}

    </div>
  );
}