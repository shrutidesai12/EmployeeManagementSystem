import React, { useState } from "react";
import { Calendar } from "lucide-react";
import DatePicker from "react-datepicker";
import { Undo2 } from "lucide-react";
import { PiAirplaneTakeoffThin } from "react-icons/pi";
import "react-datepicker/dist/react-datepicker.css";



export default function Timesheet() {
    const [showPicker, setShowPicker] = useState(false);
    const [showTaskPopup, setShowTaskPopup] = useState(false);
    const [activeTab, setActiveTab] = useState("All Timesheets");
    const [date, setDate] = useState(new Date());
    const getWeekRange = (currentDate) => {
        const start = new Date(currentDate);
        const day = start.getDay() || 7;
        start.setDate(start.getDate() - day + 1); // Monday start

        const end = new Date(start);
        end.setDate(start.getDate() + 6);

        return { start, end };
    };

    const formatDate = (d) =>
        d.toLocaleDateString("en-US", {
            month: "short",
            day: "2-digit",
            year: "numeric",
        });

    const handlePrev = () => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() - 7);
        setDate(newDate);
    };

    const handleNext = () => {
        const newDate = new Date(date);
        newDate.setDate(newDate.getDate() + 7);
        setDate(newDate);
    };
    const { start, end } = getWeekRange(date);
    const [counts, setCounts] = useState({
        pastDue: 16,
        rejected: 2,
    });


    return (
        <div className="bg-[#f5f7fb]  ">

            <div className="bg-white border-b border-[#e6e6e6] w-full px-4 pt-2 mr-18 -mt-6">
                <div className="flex items-center gap-6 text-[13px]">

                    {/* ALL TIMESHEETS */}
                    <div
                        onClick={() => setActiveTab("All Timesheets")}
                        className={`cursor-pointer pb-2 ${activeTab === "All Timesheets"
                            ? "border-b-2 border-[#3b82f6] text-[#1f1f1f]"
                            : "text-gray-500"
                            }`}
                    >
                        All Timesheets
                    </div>

                    {/* PAST DUE */}
                    <div
                        onClick={() => setActiveTab("Past Due")}
                        className={`cursor-pointer flex items-center gap-1 pb-2 ${activeTab === "Past Due"
                            ? "border-b-2 border-[#3b82f6] text-[#1f1f1f]"
                            : "text-gray-500"
                            }`}
                    >
                        Past Due
                        {counts.pastDue > 0 && (
                            <span className="bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                                {counts.pastDue}
                            </span>
                        )}
                    </div>

                    {/* REJECTED */}
                    <div
                        onClick={() => setActiveTab("Rejected Timesheets")}
                        className={`cursor-pointer flex items-center gap-1 pb-2 ${activeTab === "Rejected Timesheets"
                            ? "border-b-2 border-[#3b82f6] text-[#1f1f1f]"
                            : "text-gray-500"
                            }`}
                    >
                        Rejected Timesheets
                        {counts.rejected > 0 && (
                            <span className="bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                                {counts.rejected}
                            </span>
                        )}
                    </div>

                    {/* OTHER TABS */}
                    {["Project Time", "Time Summary", "My Tasks", "Projects Allocated"].map((tab) => (
                        <div
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`cursor-pointer pb-2 ${activeTab === tab
                                ? "border-b-2 border-[#3b82f6] text-[#1f1f1f]"
                                : "text-gray-500"
                                }`}
                        >
                            {tab}
                        </div>
                    ))}

                </div>
            </div>

            {/* 🔥 MAIN CONTENT (NOW HAS SPACING) */}
            <div className="p-4">

                {/* Title */}
                <div className="text-[15px] text-[#0a0f0d] mb-3">
                    All Timesheets
                </div>

                {activeTab === "All Timesheets" && (
                    <div className="bg-white border border-[#e6e6e6]">

                        <div className="p-4">


                            <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">

                                <div className="flex items-center gap-2 text-[13px] text-gray-600">

                                    {/* ◀️ PREV */}
                                    <div
                                        onClick={handlePrev}
                                        className="w-7 h-7 border flex items-center justify-center border-gray-200 cursor-pointer"
                                    >
                                        ‹
                                    </div>

                                    {/* 📅 DATE RANGE */}
                                    <div className="px-2 py-[3px] bg-white">
                                        {formatDate(start)} - {formatDate(end)}
                                    </div>

                                    {/* ▶️ NEXT */}
                                    <div
                                        onClick={handleNext}
                                        className="w-7 h-7 border flex items-center justify-center border-gray-200 cursor-pointer"
                                    >
                                        ›
                                    </div>

                                    {/* 📅 CALENDAR */}
                                    <div className="relative">
                                        <Calendar
                                            size={16}
                                            className="text-gray-500 cursor-pointer"
                                            onClick={() => setShowPicker(!showPicker)}
                                        />

                                        {showPicker && (
                                            <div className="absolute top-full mt-2 right-0 z-50 bg-white shadow-lg  rounded">
                                                <DatePicker
                                                    selected={date}
                                                    onChange={(d) => {
                                                        setDate(d);
                                                        setShowPicker(false);
                                                    }}
                                                    inline
                                                />
                                            </div>
                                        )}
                                    </div>

                                </div>

                                <div className="text-[#f59e0b] text-[13px] flex items-center gap-1">
                                    <span className="w-2 h-2 bg-[#f59e0b] rounded-full"></span>
                                    Waiting For Approval
                                </div>

                            </div>

                            <div className="mb-4">

                                {/* 🔹 ROW 1 */}
                                <div className="flex items-center justify-between text-[12px] text-gray-600 mb-2">

                                    <div className="text-gray-500">
                                        Total 0:00 / 60:00
                                    </div>

                                    <div className="flex items-center gap-5">

                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            Billable 0:00
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                                            Non-Billable 0:00
                                        </span>

                                        <span className="flex items-center gap-1">
                                            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                            Time Off 10:00
                                        </span>

                                    </div>

                                </div>

                                {/* 🔹 ROW 2 (Progress Bar) */}
                                <div className="w-[40%] h-[8px] bg-[#e5e7eb] rounded-full">
                                    <div className="h-full bg-[#3b82f6] w-[20%]"></div>
                                </div>

                            </div>

                            {/* Table */}
                            <div className="border border-[#e5e7eb] border-gray-200">

                                <table className="w-full border-collapse text-[12px]">

                                    <thead className="bg-[#f3f4f6] text-gray-600">
                                        <tr>
                                            <th className="text-left px-3 py-2 border-r w-[220px] border-gray-200">
                                                PROJECTS
                                            </th>

                                            {[
                                                ["NOV 11", "MON"],
                                                ["NOV 12", "TUE"],
                                                ["NOV 13", "WED"],
                                                ["NOV 14", "THU"],
                                                ["NOV 15", "FRI"],
                                                ["NOV 16", "SAT"],
                                                ["NOV 17", "SUN"],
                                            ].map((d, i) => (
                                                <th key={i} className="border-r px-2 py-2 text-center border-gray-200">
                                                    <div>{d[0]}</div>
                                                    <div className="text-[10px]">{d[1]}</div>
                                                </th>
                                            ))}

                                            <th className="px-2 py-2 text-center w-[120px]">
                                                TASK TOTAL HRS/WEEK
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="border-t border-gray-200">
                                            <td className="px-3 py-3 border-r font-medium border-gray-200">
                                                ATTENDANCE HOURS
                                            </td>

                                            {[...Array(7)].map((_, i) => (
                                                <td key={i} className="border-r text-center border-gray-200">
                                                    0:00
                                                </td>
                                            ))}

                                            <td className="text-center">0:00</td>
                                        </tr>

                                        <tr className="border-t border-gray-200">
                                            <td className="px-3 py-2 border-r text-[11px] border-gray-200 relative">

                                                {/* BUTTON */}
                                                <button
                                                    onClick={() => setShowTaskPopup(!showTaskPopup)}
                                                    className="text-blue-500 hover:underline font-medium"
                                                >
                                                    + Add Task
                                                </button>

                                                {/* POPUP */}
                                                {showTaskPopup && (
                                                    <div className="absolute top-full left-0 mt-2 w-[260px] bg-white border border-gray-200 rounded-lg shadow-xl p-3 z-50">

                                                        {/* HEADER */}
                                                        <div className="flex justify-between items-center mb-3">
                                                            <span className="text-[13px] font-semibold text-gray-700">
                                                                Add Task
                                                            </span>
                                                            <button
                                                                onClick={() => setShowTaskPopup(false)}
                                                                className="text-gray-400 hover:text-gray-600 text-[12px]"
                                                            >
                                                                ✕
                                                            </button>
                                                        </div>

                                                        {/* PROJECT */}
                                                        <div className="mb-2">
                                                            <label className="text-[11px] text-gray-500">Project</label>
                                                            <select className="w-full mt-1 border border-gray-200 rounded px-2 py-1 text-[12px]">
                                                                <option>Select Project</option>
                                                            </select>
                                                        </div>

                                                        {/* TASK */}
                                                        <div className="mb-2">
                                                            <label className="text-[11px] text-gray-500">Task</label>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter task"
                                                                className="w-full mt-1 border border-gray-200 rounded px-2 py-1 text-[12px]"
                                                            />
                                                        </div>

                                                        {/* TIME */}
                                                        <div className="mb-3">
                                                            <label className="text-[11px] text-gray-500">Time</label>
                                                            <input
                                                                type="time"
                                                                className="w-full mt-1 border border-gray-200 rounded px-2 py-1 text-[12px]"
                                                            />
                                                        </div>

                                                        {/* FOOTER */}
                                                        <div className="flex justify-end gap-2">
                                                            <button
                                                                onClick={() => setShowTaskPopup(false)}
                                                                className="text-[11px] text-gray-500"
                                                            >
                                                                Cancel
                                                            </button>

                                                            <button className="text-[11px] bg-blue-500 text-white px-3 py-1 rounded">
                                                                Add
                                                            </button>
                                                        </div>

                                                    </div>
                                                )}

                                            </td>

                                            {[...Array(7)].map((_, i) => (
                                                <td key={i} className="border-r border-gray-200"></td>
                                            ))}

                                            <td></td>
                                        </tr>

                                        <tr className="border-t bg-[#f9fafb] border-gray-200">
                                            <td className="px-3 py-2 border-r font-medium border-gray-200">
                                                Total hours/day
                                            </td>

                                            {[...Array(7)].map((_, i) => (
                                                <td key={i} className="border-r text-center border-gray-200">
                                                    0:00
                                                </td>
                                            ))}

                                            <td className="text-center">0:00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* ✅ ACTION BUTTONS (ADDED HERE) */}
                            <div className="flex items-center gap-3 mt-3">

                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] bg-white hover:bg-gray-50 text-blue-500">
                                    <PiAirplaneTakeoffThin size={14} />
                                    Request Leave
                                </button>

                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] bg-white hover:bg-red-50 text-blue-500">
                                    <Undo2 size={14} />
                                    Unsubmit Timesheet
                                </button>

                            </div>
                        </div>
                    </div>
                )}

                {activeTab === "Past Due" && (
                    <div className="bg-white border border-[#e6e6e6]">

                        <div className="p-4">

                            {/* 🔴 SAME HEADER */}
                            <div className="flex items-center justify-between mb-4 border-b border-gray-200 pb-3">

                                <div className="flex items-center gap-2 text-[13px] text-gray-600">

                                    <div className="w-7 h-7 border flex items-center justify-center border-gray-200 cursor-pointer">
                                        ‹
                                    </div>

                                    <div className="px-2 py-[3px] bg-white">
                                        Sept 25 - Oct 01, 2023
                                    </div>

                                    <div className="w-7 h-7 border flex items-center justify-center border-gray-200 cursor-pointer">
                                        ›
                                    </div>

                                </div>

                                {/* 🔴 DIFFERENCE ONLY STATUS */}
                                <div className="text-red-500 text-[13px] flex items-center gap-1">
                                    <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                                    Not Submitted
                                </div>

                            </div>

                            {/* 🔴 SAME PROGRESS */}
                            <div className="mb-4">

                                <div className="text-gray-500 text-[12px] mb-2">
                                    Total 7:00 / 60:00
                                </div>

                                <div className="w-[40%] h-[8px] bg-[#e5e7eb] rounded-full">
                                    <div className="h-full bg-red-500 w-[20%]"></div>
                                </div>

                            </div>

                            {/* 🔴 SAME TABLE (COPY YOUR TABLE HERE EXACTLY) */}
                            <div className="border border-[#e5e7eb] border-gray-200">
                                <table className="w-full border-collapse text-[12px]">

                                    <thead className="bg-[#f3f4f6] text-gray-600">
                                        <tr>
                                            <th className="text-left px-3 py-2 border-r w-[220px] border-gray-200">
                                                PROJECTS
                                            </th>

                                            {[
                                                ["NOV 11", "MON"],
                                                ["NOV 12", "TUE"],
                                                ["NOV 13", "WED"],
                                                ["NOV 14", "THU"],
                                                ["NOV 15", "FRI"],
                                                ["NOV 16", "SAT"],
                                                ["NOV 17", "SUN"],
                                            ].map((d, i) => (
                                                <th key={i} className="border-r px-2 py-2 text-center border-gray-200">
                                                    <div>{d[0]}</div>
                                                    <div className="text-[10px]">{d[1]}</div>
                                                </th>
                                            ))}

                                            <th className="px-2 py-2 text-center w-[120px]">
                                                TASK TOTAL HRS/WEEK
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr className="border-t border-gray-200">
                                            <td className="px-3 py-3 border-r font-medium border-gray-200">
                                                ATTENDANCE HOURS
                                            </td>

                                            {[...Array(7)].map((_, i) => (
                                                <td key={i} className="border-r text-center border-gray-200">
                                                    0:00
                                                </td>
                                            ))}

                                            <td className="text-center">0:00</td>
                                        </tr>

                                        <tr className="border-t border-gray-200">
                                            <td className="px-3 py-2 border-r text-[11px] border-gray-200 relative">

                                                {/* BUTTON */}
                                                <button
                                                    onClick={() => setShowTaskPopup(!showTaskPopup)}
                                                    className="text-blue-500 hover:underline font-medium"
                                                >
                                                    + Add Task
                                                </button>

                                                {/* POPUP */}
                                                {showTaskPopup && (
                                                    <div className="absolute top-full left-0 mt-2 w-[260px] bg-white border border-gray-200 rounded-lg shadow-xl p-3 z-50">

                                                        {/* HEADER */}
                                                        <div className="flex justify-between items-center mb-3">
                                                            <span className="text-[13px] font-semibold text-gray-700">
                                                                Add Task
                                                            </span>
                                                            <button
                                                                onClick={() => setShowTaskPopup(false)}
                                                                className="text-gray-400 hover:text-gray-600 text-[12px]"
                                                            >
                                                                ✕
                                                            </button>
                                                        </div>

                                                        {/* PROJECT */}
                                                        <div className="mb-2">
                                                            <label className="text-[11px] text-gray-500">Project</label>
                                                            <select className="w-full mt-1 border border-gray-200 rounded px-2 py-1 text-[12px]">
                                                                <option>Select Project</option>
                                                            </select>
                                                        </div>

                                                        {/* TASK */}
                                                        <div className="mb-2">
                                                            <label className="text-[11px] text-gray-500">Task</label>
                                                            <input
                                                                type="text"
                                                                placeholder="Enter task"
                                                                className="w-full mt-1 border border-gray-200 rounded px-2 py-1 text-[12px]"
                                                            />
                                                        </div>

                                                        {/* TIME */}
                                                        <div className="mb-3">
                                                            <label className="text-[11px] text-gray-500">Time</label>
                                                            <input
                                                                type="time"
                                                                className="w-full mt-1 border border-gray-200 rounded px-2 py-1 text-[12px]"
                                                            />
                                                        </div>

                                                        {/* FOOTER */}
                                                        <div className="flex justify-end gap-2">
                                                            <button
                                                                onClick={() => setShowTaskPopup(false)}
                                                                className="text-[11px] text-gray-500"
                                                            >
                                                                Cancel
                                                            </button>

                                                            <button className="text-[11px] bg-blue-500 text-white px-3 py-1 rounded">
                                                                Add
                                                            </button>
                                                        </div>

                                                    </div>
                                                )}

                                            </td>

                                            {[...Array(7)].map((_, i) => (
                                                <td key={i} className="border-r border-gray-200"></td>
                                            ))}

                                            <td></td>
                                        </tr>

                                        <tr className="border-t bg-[#f9fafb] border-gray-200">
                                            <td className="px-3 py-2 border-r font-medium border-gray-200">
                                                Total hours/day
                                            </td>

                                            {[...Array(7)].map((_, i) => (
                                                <td key={i} className="border-r text-center border-gray-200">
                                                    0:00
                                                </td>
                                            ))}

                                            <td className="text-center">0:00</td>
                                        </tr>
                                    </tbody>
                                </table>      </div>

                            {/* 🔴 SAME BUTTONS */}
                            <div className="flex items-center gap-3 mt-3">

                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] bg-white text-blue-500">
                                    Request Leave
                                </button>

                                <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] bg-white text-blue-500">
                                    Unsubmit Timesheet
                                </button>

                            </div>

                        </div>
                    </div>
                )}
                {/* Bottom Sections */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="border border-gray-200 bg-white">

                        {/* HEADER */}
                        <div className="px-3 py-2 border-b border-gray-200 text-[13px] font-medium text-gray-700">
                            Comment Summary
                        </div>

                        {/* TABLE HEADER */}
                        <div className="grid grid-cols-2 text-[11px] text-gray-500 bg-[#f3f4f6] border-b border-gray-200">
                            <div className="px-3 py-2 border-r border-gray-200">
                                PROJECT - TASK
                            </div>
                            <div className="px-3 py-2">
                                COMMENT
                            </div>
                        </div>

                        {/* ROW */}
                        <div className="grid grid-cols-2 text-[12px] text-gray-700">

                            {/* LEFT */}
                            <div className="px-3 py-2 border-r border-gray-200">
                                <div className="font-medium">Technovert</div>
                                <div className="text-gray-500 text-[11px]">
                                    Charges (CH) • Check
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="px-3 py-2">
                                <div className="text-gray-500 text-[11px] mb-1">
                                    Nov 19 Tue • 0:00 hrs
                                </div>
                                <div>Done</div>
                            </div>

                        </div>

                    </div>
                    <div className="border border-gray-200 bg-white">

                        {/* HEADER */}
                        <div className="px-3 py-2 border-b border-gray-200 text-[13px] font-medium text-gray-700">
                            Timesheet Activity
                            <span className="text-gray-400 text-[11px] ml-1">
                                (Nov 18 - Nov 24, 2024)
                            </span>
                        </div>

                        {/* LIST */}
                        <div className="p-3 space-y-4">

                            {/* ITEM 1 */}
                            <div className="flex items-start justify-between">

                                <div className="flex items-start gap-2">

                                    {/* AVATAR */}
                                    <img
                                        src="https://i.pravatar.cc/24"
                                        alt="user"
                                        className="w-6 h-6 rounded-full"
                                    />

                                    {/* TEXT */}
                                    <div className="text-[12px] text-gray-700">
                                        <div>
                                            <span className="font-medium">Anshul Jai</span>{" "}
                                            unsubmitted weekly timesheet
                                        </div>
                                    </div>

                                </div>

                                {/* TIME */}
                                <div className="text-[11px] text-gray-400 whitespace-nowrap">
                                    a few seconds ago
                                </div>

                            </div>

                            {/* ITEM 2 */}
                            <div className="flex items-start justify-between">

                                <div className="flex items-start gap-2">

                                    {/* AVATAR */}
                                    <img
                                        src="https://i.pravatar.cc/24"
                                        alt="user"
                                        className="w-6 h-6 rounded-full"
                                    />

                                    {/* TEXT */}
                                    <div className="text-[12px] text-gray-700">
                                        <div>
                                            <span className="font-medium">Anshul Jai</span>{" "}
                                            submitted empty timesheet
                                        </div>
                                        <div className="text-gray-500 text-[11px]">
                                            Completed
                                        </div>
                                    </div>

                                </div>

                                {/* TIME */}
                                <div className="text-[11px] text-gray-400 whitespace-nowrap">
                                    3 days ago
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}