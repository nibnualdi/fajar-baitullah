import { EditIcon } from "@/assets/icons/admin";
import React from "react";

const ScheduleCard = () => {
  return (
    <div className="text-sm font-medium p-4 flex flex-col">
      <div className="w-full grid grid-cols-5 items-center px-2 py-5 bg-dark-green/5">
        <div>event name</div>
        <div>type (weekly/monthly)</div>
        <div>time</div>
        <div className="text-center">is active</div>
      </div>
      <div className="w-full grid grid-cols-5 items-center px-2 py-5 border border-white border-t-0 border-l-0 border-r-0">
        <p className="font-bold">Subuh Gabungan</p>
        <p>weekly</p>
        <p>Setiap Sabtu, 04:00:00-06:00:00</p>
        <p className="w-fit bg-green-600 text-white rounded-full py-1 px-4 mx-auto">active</p>
        <p className="text-black/50 mx-auto">
          <EditIcon />
        </p>
      </div>
    </div>
  );
};

export default ScheduleCard;
