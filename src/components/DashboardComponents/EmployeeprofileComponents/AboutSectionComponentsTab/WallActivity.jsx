import React from "react";
import { ThumbsUp, MessageSquare, MoreVertical } from "lucide-react";

export default function WallActivity() {
  const posts = [
    {
      name: "Marie Curie",
      action: "created a post",
      time: "7 days ago",
      message: "Hi Jackson, Robert",
      comments: 0,
      avatar:
        "https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.jpg?s=612x612&w=0&k=20&c=uhMwAWEPSVDzWUDkqDimY5AaznfCXy7j30KyJnUuIMQ=",
    },
  ];

  return (
  <div className=" max-w-xl mx-auto -ml-0">
    {posts.map((post, index) => (
      <div
        key={index}
        className="bg-white border border-[var(--border-color)]  p-4 shadow-sm"
      >
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <img
                src={post.avatar}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover"
              />

              {/* Name + Action */}
              <div>
                <p className="text-sm text-[var(--text-color)]">
                  <span className="font-semibold">{post.name}</span>{" "}
                  <span className="text-gray-500">{post.action}</span>
                </p>
                <p className="text-xs text-gray-400">{post.time}</p>
              </div>
            </div>

            {/* Menu */}
            <MoreVertical size={16} className="text-gray-400 cursor-pointer" />
          </div>

          {/* Message */}
          <div className="mt-4">
            <p className="text-sm text-[var(--text-color)]">
              Hi{" "}
              <span className="text-blue-500 font-medium">
                Jackson, Robert
              </span>
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div className="flex items-center gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                <ThumbsUp size={16} />
                Like
              </div>

              <div className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                <MessageSquare size={16} />
                Comment
              </div>
            </div>

            <p className="text-xs text-gray-400">
              {post.comments} Comments
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}