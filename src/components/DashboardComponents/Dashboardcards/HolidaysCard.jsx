import React, { useState } from "react";

export default function HolidaysCard() {
  const [openModal, setOpenModal] = useState(false);

const monthColors = {
  JAN: "bg-sky-500 text-white border-sky-600",        // Deep Sky Blue
  FEB: "bg-rose-400 text-white border-rose-500",      // Soft Red/Pink
  MAR: "bg-stone-400 text-white border-stone-500",     // Warm Grey/Taupe
  APR: "bg-blue-400 text-white border-blue-500",      // Light Blue
  MAY: "bg-amber-400 text-white border-amber-500",    // Golden Yellow
  JUN: "bg-orange-400 text-white border-orange-500",  // Soft Orange
  JUL: "bg-teal-500 text-white border-teal-600",      // Teal
  AUG: "bg-fuchsia-500 text-white border-fuchsia-600", // Purple/Magenta
  SEPT: "bg-cyan-500 text-white border-cyan-600",     // Cyan
  OCT: "bg-red-500 text-white border-red-600",        // Deep Pink/Red
  NOV: "bg-stone-400 text-white border-stone-500",     // Warm Grey/Taupe
  DEC: "bg-emerald-500 text-white border-emerald-600", // Emerald Green
};


  const holidays = [
    { month: "JAN", day: "02", name: "New Year Holiday", weekday: "Monday" },
    { month: "JAN", day: "26", name: "Republic Day", weekday: "Thursday" },
    { month: "FEB", day: "18", name: "Maha Shivaratri", weekday: "Saturday" },
    { month: "MAR", day: "22", name: "Ugadi", weekday: "Wednesday", floater: true },
    { month: "APR", day: "07", name: "Good Friday", weekday: "Friday", floater: true },
    { month: "APR", day: "14", name: "Dr Ambedkar Jayanti", weekday: "Friday" },
    { month: "MAY", day: "01", name: "Labour Day", weekday: "Monday" },
    { month: "AUG", day: "15", name: "Independence Day", weekday: "Tuesday" },
    { month: "OCT", day: "02", name: "Gandhi Jayanti", weekday: "Monday" },
    { month: "OCT", day: "24", name: "Vijaya Dashami", weekday: "Tuesday" },
    { month: "NOV", day: "14", name: "Deepavali", weekday: "Tuesday" },
    { month: "DEC", day: "25", name: "Christmas Day", weekday: "Monday" },
  ];

  return (
    <>
      {/* CARD */}
      <div className="bg-[rgb(247,164,138)] text-white p-4 rounded">
        <div className="flex justify-between">
          <span>Holidays</span>
          <button
            onClick={() => setOpenModal(true)}
            className="text-xs underline"
          >
            View All
          </button>
        </div>

        <div className="text-center mt-3 font-semibold">
          CHRISTMAS DAY
        </div>

        <div className="flex justify-between mt-2 text-sm">
          <span>{"<"}</span>
          <span>Wed, 20 December 2024</span>
          <span>{">"}</span>
        </div>
      </div>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0  flex items-center justify-center z-50">
          <div className="bg-white w-[650px] rounded-lg shadow-lg p-6 relative">

            {/* HEADER */}
            <div className="flex items-center mb-5">
              <h2 className="text-lg font-semibold">Holidays</h2>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <span className="cursor-pointer">{"<"}</span>
                <span>2023</span>
                <span className="cursor-pointer">{">"}</span>
              </div>
            </div>

            {/* GRID */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 text-sm">
              {holidays.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 items-start p-1 rounded hover:bg-blue-50 transition"
                >

                  {/* DATE BOX */}
                  <div
                    className={`w-16 text-center border-[1.5px] rounded-md overflow-hidden ${monthColors[item.month]}`}
                  >
                    {/* MONTH */}
                    <div className="text-[10px] font-semibold py-1">
                      {item.month}
                    </div>

                    {/* DAY */}
                    <div className="text-lg font-bold py-2 text-gray-400 bg-white">
                      {item.day}
                    </div>
                  </div>

                  {/* DETAILS */}
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p className="font-medium">{item.name}</p>

                      {item.floater && (
                        <span className="text-[10px] bg-gray-100 text-gray-600 px-2 py-[3px] rounded-full border border-gray-200">
                          FLOATER LEAVE
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-gray-500 mt-[2px]">
                      {item.weekday}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* FOOTER */}
            <div className="mt-6 bg-gray-100 text-gray-600 text-xs p-3 rounded">
              Note: Holiday list may vary based on your location and company policy.
            </div>

            {/* CLOSE BUTTON */}
            <button
              onClick={() => setOpenModal(false)}
              className="absolute top-3 right-3 text-gray-500 text-lg"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}