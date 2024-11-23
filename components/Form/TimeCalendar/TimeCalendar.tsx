"use client";

import React, { forwardRef } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import styles from "@/components/Form/TimeCalendar/TimeCalendar.module.css";
import CalendarIcon from "@/assets/icons/customIcons/CalendarIcon";
import { ArrowIcon } from "@/assets/icons/admin";
import TimeIcon from "@/assets/icons/customIcons/TimeIcon";

type PropsTypeTimeCalendar = {
  name: string;
  value: Date;
  // setValue: React.Dispatch<React.SetStateAction<Date>>;
  type?: "calendar" | "time";
  onChange?: (date: Date | null) => void;
};

const TimeCalendar = ({ 
  name,
  value,
  // setValue,
  type = "time",
  onChange,
}: PropsTypeTimeCalendar) => {
  const CustomInput = forwardRef(
    (
      {
        value,
        onClick,
        className,
      }: {
        value: string;
        onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
        className: string;
      },
      ref: React.ForwardedRef<HTMLDivElement>
    ) => (
      <div
        className={`${className} flex gap-2 justify-between items-center px-4 py-1 w-full bg-white rounded-lg border-2 border-dark-green/60 cursor-pointer`}
        onClick={onClick}
        ref={ref}
      >
        <div className="flex gap-3 items-center">
          <div className="scale-125 text-black/50">
            {type === "time" ? <TimeIcon /> : <CalendarIcon />}
          </div>
          <div className="text-xs text-left">
            <p className="text-[9px]">{name}</p>
            <p className="font-semibold text-black">{value}</p>
          </div>
        </div>
        <p className="text-black/50 rotate-90">
          <ArrowIcon />
        </p>
      </div>
    )
  );

  CustomInput.displayName = 'CustomInput';

  const handleOnClick = (date: Date | null) => {
    onChange && onChange(date);
  };

  return (
    <div className="flex items-center w-full">
      {type === "calendar" ? (
        <DatePicker
          toggleCalendarOnIconClick
          selected={value}
          onChange={handleOnClick}
          dateFormat="d/MM/yyyy"
          className={styles.input}
          wrapperClassName="w-full"
          calendarClassName={styles.calendar}
          customInput={React.createElement(CustomInput)}
        />
      ) : (
        <DatePicker
          selected={value}
          onChange={handleOnClick}
          // onChange={(date) => setValue(date as Date)}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={10}
          dateFormat="h:mm aa"
          showTimeCaption={false}
          className={styles.input}
          wrapperClassName="w-full"
          customInput={React.createElement(CustomInput)}
        />
      )}
    </div>
  );
};

export default TimeCalendar;
