import React, { useEffect, useState } from "react";

export default function TimeCard() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      setTime(formattedTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return (
   <div
  className="text-white p-4 "
  style={{
    background: "linear-gradient(135deg, rgb(155,143,200), rgb(35,173,216), rgb(150,173,216))"
  }}
>

  {/* Header */}
  <div className="flex justify-between items-center text-sm">
    <span>Time Today - {today}</span>
    <button className="underline text-xs">View All</button>
  </div>

  {/* Current Time Heading */}
  <div className="text-sm mt-3 text-center text-white/80">
    Current Time
  </div>

  {/* Time */}
  <div className="text-2xl font-bold mt-1 text-center">
    {time}
  </div>

</div>
  );
}