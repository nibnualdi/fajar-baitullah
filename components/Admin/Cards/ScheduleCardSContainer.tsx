"use client";

import {
  getRecurringSchedule,
  recurringScheduleType,
} from "@/lib/api/schedules/recurringScheduleAPI";
import React, { useEffect, useState } from "react";
import ScheduleCard from "./ScheduleCard";
import { getSpecialEvent, specialEventScheduleType } from "@/lib/api/schedules/specialEventAPI";
import { days, months } from "@/constans/time";

const ScheduleCardSContainer = () => {
  const [recurringSchedules, setRecurringSchedules] = useState<recurringScheduleType[]>();
  const [specialEvent, setSpecialEvent] = useState<specialEventScheduleType[]>();

  useEffect(() => {
    const fetchRecurringSchedules = async () => {
      const schedules = await getRecurringSchedule();
      setRecurringSchedules(schedules.data);
    };
    const fetchSpecialEvent = async () => {
      const schedules = await getSpecialEvent();
      setSpecialEvent(schedules.data);
    };
    fetchRecurringSchedules();
    fetchSpecialEvent();
  }, []);

  return (
    <div className="text-sm font-medium p-4 flex flex-col">
      <div className="w-full grid grid-cols-5 items-center px-2 py-5 bg-dark-green/5">
        <div>event name</div>
        <div>type (weekly/monthly/special event)</div>
        <div>time</div>
        <div className="text-center">is active</div>
      </div>
      {recurringSchedules?.map((schedule) => (
        <ScheduleCard
          eventName={schedule.event_name}
          type={schedule.frequency_type}
          time={
            schedule.frequency_type.toLocaleLowerCase() === "weekly"
              ? `${
                  schedule.day_of_week &&
                  `setiap ${days.in[schedule.day_of_week]}, ${schedule.start_time}-${
                    schedule.end_time
                  }`
                }`
              : `${`setiap bulan, tanggal ${schedule.day_of_month}, ${schedule.start_time}-${schedule.end_time}`}`
          }
          isActive={schedule.is_active}
          key={schedule.id}
        />
      ))}
      {specialEvent?.map((schedule) => {
        const date = new Date(schedule.event_date);
        return (
          <ScheduleCard
            eventName={schedule.event_name}
            type="special event"
            time={`${days.in[date.getDay()]}, ${date.getDate()} ${
              months.in[date.getMonth()]
            } ${date.getFullYear()}, ${schedule.start_time}-${schedule.end_time}`}
            isActive={true}
            key={schedule.id}
          />
        );
      })}
    </div>
  );
};

export default ScheduleCardSContainer;
