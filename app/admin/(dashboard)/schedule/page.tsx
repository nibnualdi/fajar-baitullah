import { ReminderIcon } from "@/assets/icons/admin";
import { ScheduleCard } from "@/components";
import React from "react";

const page = () => {
  return (
    <div className="mb-4">
      <div className="w-full rounded-2xl p-4 border border-white">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center">
            <span className="relative rounded-xl p-2">
              <ReminderIcon />
            </span>
            <div className="flex flex-col">
              <span className="ml-2 font-bold text-black">Schedules</span>
              <span className="ml-2 text-sm text-gray-500">Manage Schedules</span>
            </div>
          </div>
        </div>

        <ScheduleCard />
      </div>
    </div>
  );
};

export default page;
