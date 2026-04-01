import React, { useState } from "react";
import FeedCard from "./Dashboardcards/FeedCard";
import PollCard from "./Dashboardcards/PollCard";
import PostCard from "./Dashboardcards/PostCard";
import BirthdayCard from "./Dashboardcards/BirthdayCard";



export default function RightSection() {
    const [postTab, setPostTab] = useState("Post");
     const [activeFeedTab, setActiveFeedTab] = useState("Today");
  const [showCards, setShowCards] = useState(false);
  const [activeTab, setActiveTab] = useState("Organization");

  return (
    <div className="w-[50%] space-y-4">
        {/* Top Tabs */}
<div className="mb-4">
  <div className="flex bg-gray-100 p-1 rounded-lg w-fit">

    <button
      onClick={() => setActiveTab("Organization")}
      className={`px-4 py-2 text-sm rounded-md transition ${
        activeTab === "Organization"
          ? "bg-gray-300 border border-gray-400"
          : "text-gray-600"
      }`}
    >
      Organization
    </button>

    <button
      onClick={() => setActiveTab("Marketing")}
      className={`px-4 py-2 text-sm rounded-md transition ${
        activeTab === "Marketing"
          ? "bg-gray-300 border border-gray-400"
          : "text-gray-600"
      }`}
    >
      Marketing
    </button>

  </div>
</div>
        <PostCard 
  postTab={postTab} 
  setPostTab={setPostTab} 
/>
       <BirthdayCard
        activeFeedTab={activeFeedTab}
        setActiveFeedTab={setActiveFeedTab}
        showCards={showCards}
        setShowCards={setShowCards}
      />
      <FeedCard
        initials="BS"
        title="Bandi Saideva praised Udit Thakur"
        time="2 months ago"
        message="Thank you, Udit..."
      />

      <FeedCard
        initials="BA"
        title="Bhavya Arora praised Praveen Sherman"
        time="1 month ago"
        message="Thank you for always..."
      />

      <PollCard
        initials="BA"
        title="Bhavya Arora created a poll"
        time="1 month ago"
        question="Did you like the session?"
        option="Art therapy"
        percentage={100}
        votes={10}
      />

    </div>
  );
}