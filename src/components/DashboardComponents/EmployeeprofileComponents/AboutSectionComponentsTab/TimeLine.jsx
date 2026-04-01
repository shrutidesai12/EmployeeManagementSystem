import React from "react";
import {
  Briefcase,
  Gift,
  Users,
  CheckCircle,
  DollarSign,
} from "lucide-react";

export default function Timeline() {
  const timelineData = [
    {
      year: "2023",
      items: [
        {
          icon: <Briefcase />,
          color: "bg-red-100 text-red-500",
          title: "Added To Project",
          date: "13 Oct, 2023",
          content: "Game Development - AltFuture",
        },
        {
          icon: <Gift />,
          color: "bg-yellow-100 text-yellow-600",
          title: "Work Anniversary",
          date: "13 Oct, 2023",
          content: "1st Work Anniversary",
        },
        {
          icon: <Users />,
          color: "bg-yellow-100 text-yellow-600",
          title: "Reporting Manager Changed",
          date: "01 Oct, 2023",
          content: "Nishanth MV → Mad Max",
        },
        {
          icon: <CheckCircle />,
          color: "bg-purple-100 text-purple-600",
          title: "Probation Completed",
          date: "01 Sep, 2023",
        },
        {
          icon: <DollarSign />,
          color: "bg-blue-100 text-blue-600",
          title: "Salary Revised",
          date: "01 Jul, 2023",
        },
      ],
    },
    {
      year: "2022",
      items: [
        {
          icon: <Briefcase />,
          color: "bg-teal-100 text-teal-600",
          title: "Joined Keka Docs",
          date: "13 Oct, 2022",
        },
      ],
    },
  ];

  return (
    <div className="bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl p-6 max-w-xl ">
      <h3 className="text-sm font-semibold text-[var(--text-color)] mb-6">
        Timeline
      </h3>

      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gray-200"></div>

        {timelineData.map((yearBlock, index) => (
          <div key={index} className="mb-8">
            {/* Year */}
            <div className="text-xs bg-gray-200 text-gray-600 px-3 py-1 rounded-md inline-block mb-5 ml-1">
              {yearBlock.year}
            </div>

            {/* Items */}
            {yearBlock.items.map((item, i) => (
              <div key={i} className="flex items-start gap-4 mb-6 relative">
                
                {/* Icon */}
                <div className="relative z-10">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}
                  >
                    {React.cloneElement(item.icon, { size: 18 })}
                  </div>
                </div>

                {/* Content */}
                <div>
                  <p className="text-sm font-medium text-[var(--text-color)]">
                    {item.title}
                  </p>

                  <p className="text-xs text-gray-400 mb-2">
                    {item.date}
                  </p>

                  {item.content && (
                    <div className="bg-gray-100 text-xs text-gray-600 px-3 py-2 rounded-md inline-block">
                      {item.content}
                    </div>
                  )}
                </div>

              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}