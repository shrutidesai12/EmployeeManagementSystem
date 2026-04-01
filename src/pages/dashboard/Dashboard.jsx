
// import React, { useState } from "react";
// import { Settings } from "lucide-react";
// import TimeCard from "../../components/DashboardComponents/cards/TimeCard";
// import { CalendarDays, Cake, Gift, UserPlus, ChevronDown } from "lucide-react";
// import FeedCard from "../../components/DashboardComponents/cards/FeedCard";
// import PollCard from "../../components/DashboardComponents/cards/PollCard";

// export default function KekaHome() {
//   const [activeTab, setActiveTab] = useState("Organization");
//   const [postTab, setPostTab] = useState("Post");
//   const [activeFeedTab, setActiveFeedTab] = useState("Today");
// const [showCards, setShowCards] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
      
//       <div className="flex gap-4">

//         {/* LEFT SECTION (WIDER) */}
//         <div className="w-[30%] space-y-4  mt-6">

//           {/* Header */}
//           <div className="flex gap-4 items-center text-gray-500 font-semibold">
//             Quick Access <Settings className="w-4 h-4 cursor-pointer" />
           
//           </div>

//           {/* Inbox */}
//           <div className="bg-gray-50 p-4  shadow-sm">
//             <div className="font-medium">Inbox</div>
//             <div className="text-sm text-gray-500 mt-1">
//               Good job! You have no pending actions
//             </div>
//           </div>

//         {/* Holidays */}
// <div className="bg-[rgb(247,164,138)] text-white p-4 ">

//   {/* Header */}
//   <div className="flex justify-between items-center">
//     <div className="font-semibold">Holidays</div>

//     <button className="text-xs px-2 py-1 rounded-md  text-red-700">
//       View All
//     </button>
//   </div>

//   {/* Holiday Name */}
//   <div className="text-center text-lg font-semibold mt-4">
//     CHRISTMAS DAY
//   </div>

//   {/* Date Navigation */}
//   <div className="flex items-center justify-between mt-3 text-sm">
//     <span className="cursor-pointer">{`<`}</span>

//     <span>Wed, 20 December 2024</span>

//     <span className="cursor-pointer">{`>`}</span>
//   </div>

// </div>
//        {/* On Leave Today */}
// <div
//   className="p-4  text-center"
//   style={{ backgroundColor: "#90edef" }}
// >
//   <div className="font-semibold text-gray-800">
//     On Leave Today
//   </div>

//   <div className="text-sm text-gray-700 mt-2">
//     Everyone is working today!
//   </div>

//   <div className="text-xs text-gray-600 mt-1">
//     No one is on leave today
//   </div>
// </div>{/* Working Remotely */}
// <div className="bg-gray-50 p-4  shadow-sm text-center">

//   {/* Heading */}
//   <div className="font-medium text-gray-800">
//     Working Remotely
//   </div>

//   {/* Line 1 */}
//   <div className="text-sm text-gray-600 mt-2">
//     Everyone is at office!
//   </div>

//   {/* Line 2 */}
//   <div className="text-xs text-gray-500 mt-1">
//     No one is working remotely
//   </div>

// </div>

//           <TimeCard />

// {/* Leave Balance */}
// <div className="bg-gray-50 p-4  shadow-sm">

//   <div className="font-medium mb-4">Leave Balances</div>

//   <div className="flex justify-between items-center">

//     {/* LEFT - BIGGER PROGRESS CIRCLES */}
//     <div className="flex gap-6">
//       {[
//         { value: 9.22, label: "Paid Leave" },
//         { value: 2, label: "Marriage Leave" },
//         { value: 1, label: "Sick Leave" },
//       ].map((item, i) => (
//         <div key={i} className="flex flex-col items-center">

//           <div className="relative w-16 h-16">
//             <svg className="w-16 h-16">
//               {/* Background circle */}
//               <circle
//                 cx="32"
//                 cy="32"
//                 r="26"
//                 stroke="#e5e7eb"
//                 strokeWidth="5"
//                 fill="none"
//               />

//               {/* Progress circle */}
//               <circle
//                 cx="32"
//                 cy="32"
//                 r="26"
//                 stroke="#06aafc"
//                 strokeWidth="5"
//                 fill="none"
//                 strokeDasharray="163"
//                 strokeDashoffset={163 - (item.value / 10) * 163}
//                 strokeLinecap="round"
//               />
//             </svg>

//             {/* Value */}
//             <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
//               {item.value}
//             </div>
//           </div>

//           <div className="text-xs text-gray-500 mt-2 text-center">
//             {item.label}
//           </div>
//         </div>
//       ))}
//     </div>

//     {/* RIGHT - BUTTONS */}
//     <div className="flex flex-col gap-3">

//       <button  >
//         Apply Leave
//       </button>

//       <button className="text-sm text-gray-600 underline">
//         View all leave balance
//       </button>

//     </div>

//   </div>
// </div>

//         </div>

//         {/* RIGHT SECTION (SMALLER) */}
//         <div className="w-[50%]">

//          {/* Tabs */}
// <div className="mb-4">
//   <div className="flex bg-gray-100 p-1 rounded-lg w-fit">

//     <button
//       onClick={() => setActiveTab("Organization")}
//       className={`px-4 py-2 text-sm rounded-md transition ${
//         activeTab === "Organization"
//           ? "bg-gray-300 border border-gray-400"
//           : "text-gray-600"
//       }`}
//     >
//       Organization
//     </button>

//     <button
//       onClick={() => setActiveTab("Marketing")}
//       className={`px-4 py-2 text-sm rounded-md transition ${
//         activeTab === "Marketing"
//           ? "bg-gray-300 border border-gray-400"
//           : "text-gray-600"
//       }`}
//     >
//       Marketing
//     </button>

//   </div>
// </div>
// <div className="bg-white p-4  shadow mb-4">

//   {/* Tabs */}
//   <div className="flex space-x-6 border-b pb-2 mb-3 text-sm border-gray-200">

//     {["Post", "Announcement", "Poll", "Praise"].map((tab) => (
//       <button
//         key={tab}
//         onClick={() => setPostTab(tab)}
//         className={`pb-2 transition ${
//           postTab === tab
//             ? " border-black text-black font-semibold"
//             : "text-gray-500"
//         }`}
//       >
//         {tab}
//       </button>
//     ))}

//   </div>

//   {/* Content based on tab */}
//   {postTab === "Post" && (
//     <input
//       className="w-full  rounded p-2"
//       placeholder="Write your post here"
//     />
//   )}

//   {postTab === "Announcement" && (
//     <input
//       className="w-full  rounded p-2"
//       placeholder="Write an announcement..."
//     />
//   )}

//   {postTab === "Poll" && (
//     <input
//       className="w-full  rounded p-2"
//       placeholder="Ask a question..."
//     />
//   )}

//   {postTab === "Praise" && (
//     <input
//       className="w-full  rounded p-2"
//       placeholder="Appreciate someone..."
//     />
//   )}

// </div>
// {/* Activity Section */}
// <div className="bg-white p-4  shadow mb-4">

//   {/* Top Row */}
//   <div className="flex justify-between items-center border-b pb-2 mb-3 border-gray-200">

//     {/* Tabs */}
//     <div className="flex gap-6 text-sm">

//       {[
//         { name: "Today", icon: <CalendarDays size={16} /> },
//         { name: "Birthdays", icon: <Cake size={16} />, count: 0 },
//         { name: "Work Anniversaries", icon: <Gift size={16} />, count: 0 },
//         { name: "New Joinees", icon: <UserPlus size={16} />, count: 0 },
//       ].map((tab) => (
//         <button
//           key={tab.name}
//           onClick={() => setActiveFeedTab(tab.name)}
//           className={`flex items-center gap-1 ${
//             activeFeedTab === tab.name
//               ? "text-black font-semibold border-black pb-1"
//               : "text-gray-500"
//           }`}
//         >
//           {tab.icon}

//           {tab.count !== undefined && (
//             <span className="ml-1">{tab.count}</span>
//           )}

//           <span>{tab.name}</span>
//         </button>
//       ))}

//     </div>

//     {/* Rotate Icon */}
//     <button onClick={() => setShowCards(!showCards)}>
//       <ChevronDown
//         size={18}
//         className={`transition-transform ${
//           showCards ? "rotate-180" : "rotate-0"
//         }`}
//       />
//     </button>

//   </div>

//   {/* Cards Section */}
//   {showCards && (
//     <div className="space-y-3 text-sm text-gray-500">

//       {activeFeedTab === "Today" && (
//         <div>No updates for today</div>
//       )}

//       {activeFeedTab === "Birthdays" && (
//         <div>No birthdays today 🎂</div>
//       )}

//       {activeFeedTab === "Work Anniversaries" && (
//         <div>No work anniversaries today 🎉</div>
//       )}

//       {activeFeedTab === "New Joinees" && (
//         <div>No new joinees today 👋</div>
//       )}

//     </div>
//   )}

// </div>
//           {/* Feed */}
//           <div className="space-y-4">


//   <FeedCard
//     initials="BS"
//     title="Bandi Saideva praised Udit Thakur"
//     time="2 months ago"
//     message="Thank you, Udit, for your great help in Topic Identification."
//   />

//   <FeedCard
//     initials="BA"
//     title="Bhavya Arora praised Praveen Sherman"
//     time="1 month ago"
//     message="Thank you for always looking out for the employees."
//   />

//             <PollCard
//     initials="BA"
//     title="Bhavya Arora created a poll"
//     time="1 month ago"
//     question="Did you like the recent session on Unleashing Your Best Self?"
//     option="Art therapy"
//     percentage={100}
//     votes={10}
//   />

//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }





// import React, { useState } from "react";
// import LeftSection from "../../components/DashboardComponents/LeftSection";
// import RightSection from "../../components/DashboardComponents/RightSection";

// export default function KekaHome() {

//   const [activeTab, setActiveTab] = useState("Organization");
//   const [postTab, setPostTab] = useState("Post");
//   const [activeFeedTab, setActiveFeedTab] = useState("Today");
//   const [showCards, setShowCards] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-100 p-4">

//       <div className="flex gap-4">

//         {/* LEFT */}
//         <LeftSection />

//         {/* RIGHT */}
//   <RightSection
//   activeTab={activeTab}
//   setActiveTab={setActiveTab}
//   postTab={postTab}
//   setPostTab={setPostTab}
//   activeFeedTab={activeFeedTab}
//   setActiveFeedTab={setActiveFeedTab}
//   showCards={showCards}
//   setShowCards={setShowCards}
// />

//       </div>

//     </div>
//   );
// }




import React, { useState } from "react";
import LeftSection from "../../components/DashboardComponents/LeftSection";
import RightSection from "../../components/DashboardComponents/RightSection";
import WelcomeTab from "../dashboard/Wellcome";


export default function KekaHome() {
  const [mainTab, setMainTab] = useState("Dashboard");

  // Right section states
  const [activeTab, setActiveTab] = useState("Organization");
  const [postTab, setPostTab] = useState("Post");
  const [activeFeedTab, setActiveFeedTab] = useState("Today");
  const [showCards, setShowCards] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

     <div className="bg-white shadow flex gap-2 p-2 sticky top-0 z-30">
  {/* Dashboard Tab */}
  <div className="relative flex flex-col items-center">
    <button
      onClick={() => setMainTab("Dashboard")}
      className={`px-4 py-2 text-sm transition ${
        mainTab === "Dashboard"
          ? "text-indigo-700 font-semibold"
          : "text-gray-600 hover:text-gray-800"
      }`}
    >
      Dashboard
    </button>
    {/* Active triangle */}
    {mainTab === "Dashboard" && (
      <div className="w-0 h-0 border-l-5 border-l-transparent border-r-5 border-r-transparent border-t-5 border-t-indigo-700 absolute -bottom-1"></div>
    )}
  </div>

  {/* Welcome Tab */}
  <div className="relative flex flex-col items-center">
    <button
      onClick={() => setMainTab("Welcome")}
      className={`px-4 py-2 text-sm transition ${
        mainTab === "Welcome"
          ? "text-indigo-700 font-semibold"
          : "text-gray-600 hover:text-gray-800"
      }`}
    >
      Welcome
    </button>
    {/* Active triangle */}
    {mainTab === "Welcome" && (
      <div className="w-0 h-0 border-l-5 border-l-transparent border-r-5 border-r-transparent border-t-5 border-t-indigo-700 absolute -bottom-1"></div>
    )}
  </div>
</div>
      {/* 🔥 MAIN CONTENT */}
      <div className="p-4">
        {mainTab === "Dashboard" && (
          <div className="flex gap-4">
            <LeftSection />
            <RightSection
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              postTab={postTab}
              setPostTab={setPostTab}
              activeFeedTab={activeFeedTab}
              setActiveFeedTab={setActiveFeedTab}
              showCards={showCards}
              setShowCards={setShowCards}
            />
          </div>
        )}

   
        {mainTab === "Welcome" && (
          // Render the full WelcomeTab here
          <WelcomeTab />
        )}
      </div>
    </div>
  );
}