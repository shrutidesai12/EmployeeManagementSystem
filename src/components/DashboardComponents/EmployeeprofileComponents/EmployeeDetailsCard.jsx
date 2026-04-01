


import React, { useState, useEffect, useRef } from "react";
import { CgMail } from "react-icons/cg";
import { FiPhone } from "react-icons/fi";
import { TiLocationOutline } from "react-icons/ti";
import { TiEdit } from "react-icons/ti";
import { IoBuildOutline } from "react-icons/io5";
import AboutSection from "./AboutSectionComponentsTab/AboutSection";
import ProfileScreen from "./ProfileComponentsTab/ProfileScreen";
import JobScreen from "./JobTab/Jobscreen";
import EmployeeDocuments from "./DocumentTab/EmployeeDocuments";
import AddDocumentDetailsPage from "./AssetTab/AssignAsset";
import { IoChevronDownOutline } from "react-icons/io5";
import ResignDrawer from "./ResignTab/ResignDrawer";
import { IoIdCard } from "react-icons/io5";
import IDDrawer from "./IDDrawer";



export default function EmployeeDetailsCard() {
  const [activeTab, setActiveTab] = useState("About");
  const [showTabMenu, setShowTabMenu] = useState(false);
  const [isResignDrawerOpen, setIsResignDrawerOpen] = useState(false);
  const [isIdDrawerOpen, setIsIdDrawerOpen] = useState(false);
  const menuRef = useRef(null);


  const tabs = [
    "About",
    "Profile",
    "Job",
    "Documents",
    "Assets",

  ];

  const labelStyle = "text-xs font-semibold text-gray-500";
  const valueStyle = "text-sm text-gray-800 mt-1";

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!menuRef.current) return;

      if (!menuRef.current.contains(event.target)) {
        setShowTabMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto space-y-4">
      {/* Main Employee Card */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-visible">
        <div
          className="text-white p-6 flex items-center gap-6"
          style={{
            background:
              "linear-gradient(90deg, rgb(155,143,200), rgb(35,173,216))",
          }}
        >
          {/* Profile photo */}
          <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden bg-white">
            <img
              src="https://media.istockphoto.com/id/1477871401/photo/portrait-of-happy-young-businesswoman-arms-crossed-with-looking-at-camera-on-white-background.jpg?s=612x612&w=0&k=20&c=uhMwAWEPSVDzWUDkqDimY5AaznfCXy7j30KyJnUuIMQ="
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name, role, and status */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 flex-wrap">
              <h2 className="text-2xl font-semibold">Shruti Desai</h2>
              <span className="bg-green-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
                In
              </span>
            </div>
            <p className="text-sm opacity-80">Software Developer</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-6 py-3 border-b flex items-center justify-between border-gray-200 bg-white">
          <div className="grid grid-cols-1 sm:grid-cols-4 text-sm text-gray-700 w-full gap-0">
            <div className="flex items-center gap-1"><CgMail />shruti@example.com</div>
            <div className="flex items-center gap-1"><FiPhone /> +91 9876543210</div>
            <div className="flex items-center gap-1"><TiLocationOutline /> Nashik, India</div>
            <div
              onClick={() => setIsIdDrawerOpen(true)}
              className="flex items-center gap-1 text-blue-800 cursor-pointer"
            >
              <IoIdCard />
              <span className="text-blue-800">ID</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3 ml-4 text-lg">
            <button className="text-gray-500 hover:text-indigo-600"><TiEdit /></button>
            <button className="text-gray-500 hover:text-indigo-600">⋮</button>
          </div>
        </div>

        {/* All Details */}
        <div className="px-6 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-x-8 gap-y-6 bg-white">
            <div>
              <p className={labelStyle}>Department</p>
              <p className={valueStyle}>Customer Success</p>
            </div>
            <div>
              <p className={labelStyle}>Sub-Department</p>
              <p className={valueStyle}>Customer Success 2</p>
            </div>
            <div>
              <p className={labelStyle}>Business Unit</p>
              <p className={valueStyle}>Keka Technologies</p>
            </div>
            <div>
              <p className={labelStyle}>Cost Center</p>
              <p className={valueStyle}>Random Division</p>
            </div>
            <div>
              <p className={labelStyle}>Reporting Manager</p>
              <p className={valueStyle}>Liliana Martinez</p>
            </div>
            <div>
              <p className={labelStyle}>Dotted Line Manager</p>
              <p className={valueStyle}>Joseph Maguire</p>
            </div>
          </div>
        </div>

        {/* Tabs + Global Action + Content */}
        {/* Tabs */}
        <div className="flex items-center justify-between border-t border-gray-200">

          {/* Tabs */}
          <div className="flex overflow-x-auto">
            {tabs.map((tab) => (
              <div key={tab} className="relative">
                <button
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-3 text-sm whitespace-nowrap transition-all ${activeTab === tab
                      ? "text-indigo-600 font-semibold"
                      : "text-gray-600 hover:text-indigo-500"
                    }`}
                >
                  {tab}
                </button>

                {activeTab === tab && (
                  <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-indigo-600" />
                )}
              </div>
            ))}
          </div>

          {/* RIGHT ACTION BUTTON */}
          <div className="relative mr-4" ref={menuRef}>
            <button
              onClick={(e) => {
                e.stopPropagation(); // ✅ IMPORTANT
                setShowTabMenu((prev) => !prev);
              }}
              className="px-3 py-1.5 border border-gray-300 rounded text-sm flex items-center gap-1 bg-[#718FC2] text-white"
            >
              Actions <IoChevronDownOutline />

            </button>

            {/* DROPDOWN */}
            {showTabMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded shadow-md z-50">

                <button
                  onMouseDown={(e) => e.stopPropagation()}   // ✅ IMPORTANT FIX
                  onClick={() => {
                    setShowTabMenu(false);
                    setIsResignDrawerOpen(true);
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                >
                  Job Resign
                </button>

              </div>
            )}
          </div>

        </div>
      </div>



      {/* Global Action Section */}
      <div className="bg-white border border-gray-200 rounded-md px-4 py-3 flex items-center justify-between min-h-[64px]">
        <div className="flex items-center gap-1">
          <div className="w-8 h-8 rounded-md  flex items-center justify-center text-base">
            <IoBuildOutline />    </div>

          {/* Text in one row */}
          <div className="flex items-center gap-1">
            <p className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-3 py-1 rounded-md">
              Global Action
            </p>
            <span className="text-xs text-gray-500">
              we're moving around
            </span>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* Tab Content */}
      <div className="pt-4" >

        {activeTab === "About" && <AboutSection />}

        {activeTab === "Profile" && <ProfileScreen />}

        {activeTab === "Job" && <JobScreen />}

        {activeTab === "Documents" && <EmployeeDocuments />}

        {activeTab === "Assets" && <AddDocumentDetailsPage />}



      </div>
      <ResignDrawer
        isOpen={isResignDrawerOpen}
        onClose={() => setIsResignDrawerOpen(false)}
      />
      <IDDrawer
        isOpen={isIdDrawerOpen}
        onClose={() => setIsIdDrawerOpen(false)}
      />
    </div>
  );
}