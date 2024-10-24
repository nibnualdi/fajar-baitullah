import { EditIcon } from "@/assets/icons/admin";
import React from "react";

type ScheduleCardProps = {
  eventName: string;
  type: string;
  time: string;
  isActive?: boolean;
};

const ScheduleCard = ({ eventName, type, time, isActive = false }: ScheduleCardProps) => {
  return (
    <div className="w-full grid grid-cols-5 items-center px-2 py-5 border border-white border-t-0 border-l-0 border-r-0">
      <p className="font-bold">{eventName}</p>
      <p>{type}</p>
      <p>{time}</p>
      {isActive ? (
        <p className="w-fit bg-green-600 text-white rounded-full py-1 px-4 mx-auto">active</p>
      ) : (
        <p className="w-fit bg-gray-400 text-white rounded-full py-1 px-4 mx-auto">not active</p>
      )}

      <p className="text-black/50 mx-auto">
        <EditIcon />
      </p>
    </div>
  );
};

export default ScheduleCard;
