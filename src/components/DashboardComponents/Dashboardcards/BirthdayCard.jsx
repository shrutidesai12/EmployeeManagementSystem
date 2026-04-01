import React from "react";
import { CalendarDays, Cake, Gift, UserPlus, ChevronDown } from "lucide-react";

export default function BirthdayCard({
  activeFeedTab,
  setActiveFeedTab,
  showCards,
  setShowCards,
}) {
  return (
    <div className="bg-white p-4 shadow mb-4">

      {/* Top Row */}
      <div className="flex justify-between items-center border-b pb-2 mb-3 border-gray-200">

        {/* Tabs */}
        <div className="flex gap-6 text-sm">
          {[
            { name: "Today", icon: <CalendarDays size={16} /> },
            { name: "Birthdays", icon: <Cake size={16} />, count: 0 },
            { name: "Work Anniversaries", icon: <Gift size={16} />, count: 0 },
            { name: "New Joinees", icon: <UserPlus size={16} />, count: 0 },
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveFeedTab(tab.name)}
              className={`flex items-center gap-1 ${
                activeFeedTab === tab.name
                  ? "text-black font-semibold  "
                  : "text-gray-500"
              }`}
            >
              {tab.icon}

              {tab.count !== undefined && (
                <span className="ml-1">{tab.count}</span>
              )}

              <span>{tab.name}</span>
            </button>
          ))}
        </div>

        {/* Dropdown Icon */}
        <button onClick={() => setShowCards(!showCards)}>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              showCards ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

      </div>

      {/* Content */}
      {showCards && (
        <div className="space-y-3 text-sm text-gray-500">

          {activeFeedTab === "Today" && (
            <div>No updates for today</div>
          )}

          {activeFeedTab === "Birthdays" && (
            <div>No birthdays today 🎂</div>
          )}

          {activeFeedTab === "Work Anniversaries" && (
            <div>No work anniversaries today 🎉</div>
          )}

          {activeFeedTab === "New Joinees" && (
            <div>No new joinees today 👋</div>
          )}

        </div>
      )}
    </div>
  );
}