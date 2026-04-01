import React from "react";
import { Settings } from "lucide-react";

import InboxCard from "./Dashboardcards/InboxCard";
import HolidaysCard from "./Dashboardcards/HolidaysCard";
import LeaveCard from "./Dashboardcards/LeaveCard";
import RemoteCard from "./Dashboardcards/RemoteCard";
import LeaveBalanceCard from "./Dashboardcards/LeaveBalanceCard";
import TimeCard from "./Dashboardcards/TimeCard";

export default function LeftSection() {
  return (
    <div className="w-[30%] space-y-4 mt-6">

      <div className="flex gap-4 items-center text-gray-500 font-semibold">
        Quick Access <Settings className="w-4 h-4" />
      </div>

      <InboxCard />
      <HolidaysCard />
      <RemoteCard />
      <LeaveCard />
      <TimeCard />
      <LeaveBalanceCard />

    </div>
  );
}