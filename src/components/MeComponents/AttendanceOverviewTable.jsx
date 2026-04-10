import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClock } from "react-icons/hi";

export default function AttendanceOverviewTable() {
    const [selectedMonth, setSelectedMonth] = useState("30 DAYS");

    const months = ["30 DAYS", "MAR", "FEB", "JAN", "DEC", "NOV", "OCT"];

    const attendanceRows = [
        {
            date: "Thu, 09 Apr",
            hasVisual: false,
            effectiveHours: "",
            grossHours: "",
            arrival: "",
            logText: "No Time Entries Logged",
            status: "",
        },
        {
            date: "Wed, 08 Apr",
            hasVisual: true,
            effectiveHours: "8h 16m",
            grossHours: "8h 16m",
            arrival: "On Time",
            logText: "",
            status: "success",
        },
        {
            date: "Tue, 07 Apr",
            hasVisual: true,
            effectiveHours: "9h 02m",
            grossHours: "9h 02m",
            arrival: "On Time",
            logText: "",
            status: "success",
        },
        {
            date: "Mon, 06 Apr",
            hasVisual: true,
            effectiveHours: "8h 45m",
            grossHours: "8h 45m",
            arrival: "Late",
            logText: "",
            status: "late",
        },
    ];
    const calculatePercentage = (hoursString) => {
        if (!hoursString) return 0;

        const match = hoursString.match(/(\d+)h\s*(\d+)?m?/);
        if (!match) return 0;

        const hours = parseInt(match[1] || 0, 10);
        const minutes = parseInt(match[2] || 0, 10);

        // Total worked minutes
        const totalMinutes = hours * 60 + minutes;

        // Assuming standard workday = 9 hours = 540 minutes
        const percentage = (totalMinutes / 540) * 100;

        return Math.min(percentage, 100); // max 100%
    };

    return (
        <div className="bg-[#f6f6f7]  w-full mt-4">
            {/* Top Filter Row */}
            <div className="bg-white border border-gray-200 rounded-sm flex items-center justify-between px-5 py-3 mb-0 w-full">
                <h3 className="text-[15px] font-normal text-[#1f1f1f]">
                    Last 30 Days
                </h3>

                <div className="flex border border-gray-200 rounded-sm overflow-hidden bg-white">
                    {months.map((month) => (
                        <button
                            key={month}
                            onClick={() => setSelectedMonth(month)}
                            className={`px-5 py-2 text-[13px] font-medium border-r border-gray-200 last:border-r-0 transition-all ${selectedMonth === month
                                ? "bg-[#6b4fd3] text-white"
                                : "bg-white text-[#6b4fd3] hover:bg-[#f6f1ff]"
                                }`}
                        >
                            {month}
                        </button>
                    ))}
                </div>
            </div>

            {/* Table Wrapper */}
            <div className="w-full overflow-x-auto">
                {/* Table Header */}
                <div className="min-w-[1400px] grid grid-cols-[1.6fr_2.2fr_1.2fr_1.2fr_1fr_0.6fr] bg-[#e8e8ea] border-x border-b border-gray-200 text-[11px] uppercase text-[#6b7280] tracking-wide px-4 py-3">
                    <div>DATE</div>
                    <div>ATTENDANCE VISUAL</div>
                    <div>EFFECTIVE HOURS</div>
                    <div>GROSS HOURS</div>
                    <div>ARRIVAL</div>
                    <div>LOG</div>
                </div>

                {/* Table Rows */}
                <div className="min-w-[1400px] bg-white border-x border-b border-gray-200">
                    {attendanceRows.map((row, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-[1.6fr_2.2fr_1.2fr_1.2fr_1fr_0.6fr] items-center px-4 py-5 border-b border-gray-100 last:border-b-0 text-[14px] text-[#1f1f1f]"
                        >
                            {/* DATE */}
                            <div className="text-[14px] text-[#2d3748]">{row.date}</div>
                            {/* ATTENDANCE VISUAL */}
                            <div className="flex items-center gap-4">
                                {row.hasVisual ? (
                                    <>
                                        {/* Progress bar */}
                                        <div
                                            className="relative w-[260px] h-[10px] bg-[#f1f1f1] rounded-full overflow-hidden"
                                            title={`Effective Hours: ${row.effectiveHours}`} // shows on hover
                                        >
                                            {/* Filled bar */}
                                            <div
                                                className="absolute left-0 top-0 h-full bg-[#67c6d7] rounded-full transition-all"
                                                style={{
                                                    width: `${calculatePercentage(row.effectiveHours)}%`,
                                                }}
                                            ></div>

                                            {/* Percentage text */}
                                            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[10px] font-medium text-gray-500">
                                                {Math.round(calculatePercentage(row.effectiveHours))}%
                                            </div>
                                        </div>

                                        <HiOutlineLocationMarker className="text-[#8b8f97] text-[18px]" />
                                    </>
                                ) : (
                                    <span className="text-[14px] text-[#6b4f70]">{row.logText}</span>
                                )}
                            </div>
                            {/* GROSS HOURS */}
                            <div className="flex items-center gap-2">
                                {row.hasVisual && (
                                    <div
                                        className={`w-3 h-3 rounded-full ${row.arrival === "On Time"
                                            ? "bg-[#67c6d7]"
                                            : row.arrival === "Late"
                                                ? "bg-[#f59e0b]"
                                                : "bg-gray-400"
                                            }`}
                                    ></div>
                                )}
                                <span>{row.grossHours}</span>
                            </div>
                            <div>{row.grossHours}</div>

                            <div className="flex items-center gap-2 text-[14px]">
                                {row.arrival === "On Time" && (
                                    <>
                                        <span className="text-[#8cc152] text-[16px]">✓</span>
                                        <span className="text-[#2d3748]">{row.arrival}</span>
                                    </>
                                )}

                                {row.arrival === "Late" && (
                                    <>
                                        <span className="text-[#f59e0b] text-[16px]">!</span>
                                        <span className="text-[#2d3748]">{row.arrival}</span>
                                    </>
                                )}
                            </div>
                            <div className="flex justify-center">
                                {row.hasVisual ? (
                                    <button className="text-gray-500 hover:text-black">
                                        <HiOutlineClock className="text-[18px]" />

                                    </button>
                                ) : (
                                    <button className="text-gray-500 hover:text-black">
                                        <BsThreeDots />
                                    </button>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}