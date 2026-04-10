import React, { useEffect, useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";
import { BsCupHot } from "react-icons/bs";
import { MdPeopleOutline } from "react-icons/md";
import { RiHomeOfficeLine } from "react-icons/ri";
import { IoIosGlobe } from "react-icons/io";
import { PiNote } from "react-icons/pi";
import AttendanceBottomTabs from "../../components/MeComponents/AttendanceBottomTabs";
import Timesheet from "../../components/MeComponents/Timesheet";


export default function Me() {
    const [activeTab, setActiveTab] = useState("Attendance");
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const tabs = [
        "Attendance",
        "Timesheet",
        "Leave",
        "Performance",
        "Expenses & Travel",
        "Apps",
    ];

    // =========================
    // Dummy Data
    // =========================
    const attendanceStats = {
        period: "Last Week",
        me: {
            label: "Me",
            avgHours: "9h 18m",
            onTime: "100%",
        },
        team: {
            label: "My Team",
            avgHours: "8h 6m",
            onTime: "100%",
        },
    };

    const timingsData = {
        days: ["M", "T", "W", "T", "F", "S", "S"],
        activeDayIndex: 3,
        title: "Today (Flexible Timings)",
        duration: "23h 59m",
        breakTime: "60 min",
        progress: {
            first: "44%",
            middle: "10%",
            last: "46%",
        },
    };

    const actionsData = {
        actions: [
            "Web Clock-In",
            "Work From Home",
            "Attendance Policy",
        ],
    };

    const bottomTabsData = {
        overview: "This is overview dummy data",
        calendar: "This is calendar dummy data",
        requests: "This is requests dummy data",
        history: "This is history dummy data",
    };

    const formattedTime = currentTime.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
    });

    const timeParts = formattedTime.split(" ");
    const liveTime = timeParts[0];
    const meridian = timeParts[1];

    const formattedDate = currentTime.toLocaleDateString("en-IN", {
        weekday: "short",
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
    const timesheetData = {
        title: "Timesheet",
        content: "Dummy timesheet data will be shown here.",
    };

    const leaveData = {
        title: "Leave",
        content: "Dummy leave details will be shown here.",
    };

    const performanceData = {
        title: "Performance",
        content: "Dummy performance details will be shown here.",
    };

    const expensesData = {
        title: "Expenses & Travel",
        content: "Dummy expenses and travel data will be shown here.",
    };

    const appsData = {
        title: "Apps",
        content: "Dummy apps data will be shown here.",
    };

    return (
        <div
            className="min-h-screen bg-[#f5f7fb]"
            style={{ fontFamily: '"Segoe UI", Arial, sans-serif' }}
        >
            {/* Top Tabs */}
            <div className="bg-white border-b border-gray-200 px-4 flex flex-wrap gap-8 h-11 items-center mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`relative text-[13px] font-medium uppercase transition-all duration-200 ${activeTab === tab
                            ? "text-[#1f1f1f]"
                            : "text-gray-500 hover:text-gray-800"
                            }`}
                    >
                        {tab}

                        {activeTab === tab && (
                            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[7px] border-r-[7px] border-t-0 border-b-[7px] border-l-transparent border-r-transparent border-b-[#7b61d1]"></div>
                        )}
                    </button>
                ))}
            </div>

            <div className="px-0 py-0">
                {activeTab === "Attendance" && (
                    <div className="px-2 mt-2">
                        <div className="grid grid-cols-1 md:grid-cols-[1.15fr_1.15fr_1fr] gap-6 items-start">

                            {/* Attendance Stats */}
                            <div>
                                <h2 className="text-[17px] font-normal text-[#1f1f1f] mb-3">
                                    Attendance Stats
                                </h2>

                                <div className="bg-white border border-gray-200 rounded-sm p-4 min-h-[210px]">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="flex items-center gap-1 cursor-pointer">
                                            <span className="text-sm text-gray-700">
                                                {attendanceStats.period}
                                            </span>
                                            <span className="text-gray-500 text-sm "><MdKeyboardArrowDown /></span>
                                        </div>

                                        <span className="text-gray-400 text-lg cursor-pointer">ⓘ</span>
                                    </div>

                                    {/* Me Row */}
                                    <div className="flex items-center justify-between border-b border-gray-200 pb-5 mb-5">
                                        <div className="flex items-center gap-3 min-w-[110px]">
                                            <div className="w-9 h-9 rounded-full bg-[#f2b632] flex items-center justify-center text-white text-lg">
                                                <IoPersonOutline />
                                            </div>
                                            <span className="text-[15px] text-gray-800">
                                                {attendanceStats.me.label}
                                            </span>
                                        </div>

                                        <div className="text-left min-w-[90px]">
                                            <p className="text-[11px] text-gray-400 uppercase">
                                                Avg Hrs / Day
                                            </p>
                                            <p className="text-[18px] font-normal text-gray-900">
                                                {attendanceStats.me.avgHours}
                                            </p>
                                        </div>

                                        <div className="text-left min-w-[90px]">
                                            <p className="text-[11px] text-gray-400 uppercase">
                                                On Time Arrival
                                            </p>
                                            <p className="text-[18px] font-normal text-gray-900">
                                                {attendanceStats.me.onTime}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Team Row */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 min-w-[110px]">
                                            <div className="w-9 h-9 rounded-full bg-[#5a9bd5] flex items-center justify-center text-white text-lg">
                                                <MdPeopleOutline />
                                            </div>
                                            <span className="text-[15px] text-gray-800">
                                                {attendanceStats.team.label}
                                            </span>
                                        </div>

                                        <div className="text-left min-w-[90px]">

                                            <p className="text-[18px] font-normal text-gray-900">
                                                {attendanceStats.team.avgHours}
                                            </p>
                                        </div>

                                        <div className="text-left min-w-[90px]">

                                            <p className="text-[18px] font-normal text-gray-900">
                                                {attendanceStats.team.onTime}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Timings */}
                            <div>
                                <h2 className="text-[17px] font-normal text-[#1f1f1f] mb-3">
                                    Timings
                                </h2>

                                <div className="bg-white border border-gray-200 rounded-sm p-4 min-h-[210px] flex flex-col justify-between">
                                    {/* Week Days */}
                                    <div className="flex gap-3 mb-8">
                                        {timingsData.days.map((day, index) => (
                                            <div
                                                key={index}
                                                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border ${index === timingsData.activeDayIndex
                                                    ? "bg-[#66c4d6] text-white border-[#66c4d6]"
                                                    : "border-gray-200 text-gray-400"
                                                    }`}
                                            >
                                                {day}
                                            </div>
                                        ))}
                                    </div>

                                    <div>
                                        <p className="text-[14px] text-gray-800 mb-2">
                                            {timingsData.title}
                                        </p>

                                        {/* Progress Bar */}
                                        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden mb-2">
                                            <div className="h-full flex">
                                                <div
                                                    className="bg-[#67c6d7]"
                                                    style={{ width: timingsData.progress.first }}
                                                ></div>
                                                <div
                                                    className="bg-[#d9d9d9]"
                                                    style={{ width: timingsData.progress.middle }}
                                                ></div>
                                                <div
                                                    className="bg-[#67c6d7]"
                                                    style={{ width: timingsData.progress.last }}
                                                ></div>
                                            </div>
                                        </div>

                                        <div className="flex justify-between items-center text-sm text-gray-500">
                                            <span>Duration: {timingsData.duration}</span>

                                            <div className="flex items-center gap-1">
                                                <BsCupHot className="text-[15px]" />
                                                <span>{timingsData.breakTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Actions */}
                            <div>
                                <h2 className="text-[17px] font-normal text-[#1f1f1f] mb-3">
                                    Actions
                                </h2>

                                <div className="bg-white border border-gray-200 rounded-sm p-4 min-h-[210px]">
                                    <div className="flex items-start justify-between">

                                        {/* Left Side */}
                                        <div>
                                            <div className="border border-gray-200 rounded-md px-4 py-3 inline-block mb-3 bg-white">
                                                <div className="text-[18px] font-normal text-gray-900 leading-none">
                                                    {liveTime} <span className="text-[14px]">{meridian}</span>
                                                </div>
                                            </div>

                                            <p className="text-[14px] text-gray-700">
                                                {formattedDate}
                                            </p>
                                        </div>

                                        {/* Right Side */}
                                        <div className="space-y-3 text-[15px] text-[#6b4fd3] mt-1 min-w-[180px]">
                                            <div className="cursor-pointer hover:underline flex items-center gap-2">
                                                <span><IoIosGlobe /></span>
                                                <span>Web Clock-In</span>
                                            </div>

                                            <div className="cursor-pointer hover:underline flex items-center gap-2">
                                                <span><RiHomeOfficeLine /></span>
                                                <span>Work From Home</span>
                                            </div>

                                            <div className="cursor-pointer hover:underline flex items-center gap-2">
                                                <span><PiNote /></span>
                                                <span>Attendance Policy</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <AttendanceBottomTabs bottomTabsData={bottomTabsData} />

                    </div>
                )}

                {activeTab === "Timesheet" && <Timesheet />}

                {activeTab === "Leave" && (
                    <div className="bg-white rounded-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            {leaveData.title}
                        </h2>
                        <p className="text-sm text-gray-600">{leaveData.content}</p>
                    </div>
                )}

                {activeTab === "Performance" && (
                    <div className="bg-white rounded-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            {performanceData.title}
                        </h2>
                        <p className="text-sm text-gray-600">{performanceData.content}</p>
                    </div>
                )}

                {activeTab === "Expenses & Travel" && (
                    <div className="bg-white rounded-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            {expensesData.title}
                        </h2>
                        <p className="text-sm text-gray-600">{expensesData.content}</p>
                    </div>
                )}

                {activeTab === "Apps" && (
                    <div className="bg-white rounded-sm border border-gray-200 p-6">
                        <h2 className="text-lg font-semibold text-gray-800 mb-3">
                            {appsData.title}
                        </h2>
                        <p className="text-sm text-gray-600">{appsData.content}</p>
                    </div>
                )}
            </div>
        </div>
    );
}