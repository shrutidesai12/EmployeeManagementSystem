import React, { useState } from "react";
import { Hand, Star, Send } from "lucide-react";
import Timeline from "./TimeLine";
import WallActivity from "./WallActivity";

export default function AboutSection() {
    const [activeSubTab, setActiveSubTab] = useState("Summary");

    const subTabs = ["Summary", "Timeline", "Wall Activity"];

    /* 🔹 COMMON STYLES */
    const labelText = "text-xs text-gray-500";
    const valueText = "text-sm font-medium text-[var(--text-color)]";
    const cardStyle = "bg-[var(--bg-color)] border border-[var(--border-color)]  p-4";
    const iconWrapper = "w-12 h-12 rounded-full flex items-center justify-center";
    const iconText = "mt-2 text-xs text-gray-500 text-center";

    return (
        <div className="w-full max-w-7xl mx-auto space-y-3 pt-4">

            {/* 🔹 Tabs */}
            <div className="flex gap-6 border border-[var(--border-color)] px-4 py-3 bg-white -mt-10">
                {subTabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveSubTab(tab)}
                        className={`text-sm font-medium pb-1 relative ${activeSubTab === tab
                            ? "text-[var(--primary-color)]"
                            : "text-gray-500"
                            }`}
                    >
                        {tab}
                        {activeSubTab === tab && (
                            <span className="absolute left-0 bottom-0 w-full h-[2px] "></span>
                        )}
                    </button>
                ))}
            </div>

            {/* 🔹 SUMMARY */}
            {activeSubTab === "Summary" && (
                <div className="flex gap-4">


                    <div className={`${cardStyle} flex-1`}>
                        <h3 className="font-semibold mb-4 text-[var(--text-color)]">
                            Employee Information
                        </h3>

                        <div className="grid grid-cols-2 gap-5">

                            <div>
                                <p className={labelText}>Employee ID</p>
                                <p className={valueText}>EMP001</p>
                            </div>

                            <div>
                                <p className={labelText}>Date of Joining</p>
                                <p className={valueText}>01 Jan 2024</p>
                            </div>

                            <div>
                                <p className={labelText}>Department</p>
                                <p className={valueText}>Development</p>
                            </div>

                            <div>
                                <p className={labelText}>Designation</p>
                                <p className={valueText}>Frontend Developer</p>
                            </div>

                            <div>
                                <p className={labelText}>Email</p>
                                <p className={valueText}>employee@company.com</p>
                            </div>

                            <div>
                                <p className={labelText}>Phone</p>
                                <p className={valueText}>+91 9876543210</p>
                            </div>

                            <div>
                                <p className={labelText}>Manager</p>
                                <p className={valueText}>Rahul Sharma</p>
                            </div>

                            <div>
                                <p className={labelText}>Location</p>
                                <p className={valueText}>Pune, India</p>
                            </div>

                            <div>
                                <p className={labelText}>Employment Type</p>
                                <p className={valueText}>Full Time</p>
                            </div>

                            <div>
                                <p className={labelText}>Status</p>
                                <p className="text-green-600 font-medium">Active</p>
                            </div>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="w-[320px] flex flex-col gap-4">

                        {/* Skills */}
                        <div className={`${cardStyle} text-center`}>
                            <p className="text-sm text-gray-500">No skill Added Yet :(</p>
                            <p className="text-xs text-gray-400 mb-3">
                                Showcase your skills
                            </p>

                            <button className="bg-[var(--secondary-color)] text-white px-3 py-1 text-sm rounded">
                                Add Skill
                            </button>
                        </div>

                        {/* Praise */}
                        <div className={cardStyle}>
                            <h3 className="font-semibold mb-4 text-[var(--text-color)]">
                                Praise
                            </h3>

                            <div className="flex justify-between">

                                {/* Item */}
                                <div className="flex flex-col items-center">
                                    <div className={`${iconWrapper} bg-[rgba(16,185,129,0.1)]`}>
                                        <Send className="text-[var(--secondary-color)]" size={18} />
                                    </div>
                                    <p className={iconText}>Above & Beyond</p>
                                </div>
                                <div className="flex flex-col items-center">
                                    {/* 🔹 Purple */}
                                    <div className={`${iconWrapper} bg-purple-100`}>
                                        <Hand size={16} className="text-purple-600" />
                                    </div>
                                    <p className={iconText}>High Five</p>
                                </div>

                                <div className="flex flex-col items-center">
                                    {/* 🔹 Yellow */}
                                    <div className={`${iconWrapper} bg-yellow-100`}>
                                        <Star size={16} className="text-yellow-600" />
                                    </div>
                                    <p className={iconText}>Being Keka</p>
                                </div>

                            </div>

                            <button className="mt-4 text-sm font-medium text-[var(--primary-color)]">
                                View All
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {activeSubTab === "Timeline" && <Timeline />}
            {activeSubTab === "Wall Activity" && <WallActivity />}
        </div>
    );
}