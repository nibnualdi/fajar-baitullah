"use client";

import { useAppSelector } from "@/lib/hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Cookies from "js-cookie";
import { SelectInput, SelectInputGroup } from "@/components";
import CalendarIcon from "@/assets/icons/customIcons/CalendarIcon";
import { days } from "@/constans/time";
import { formattedDate } from "@/lib/utils/formattedDate";

const Button = dynamic(() => import("@/components/Form/Button"), {
  ssr: false,
});
const Input = dynamic(() => import("@/components/Form/Input"), {
  ssr: false,
});
const RadioGroup = dynamic(() => import("@/components/Form/RadioGroup"), {
  ssr: false,
});
const Radio = dynamic(() => import("@/components/Form/Radio"), {
  ssr: false,
});
const Switch = dynamic(() => import("@/components/Form/Switch"), {
  ssr: false,
});
const TimeCalendar = dynamic(() => import("@/components/Form/TimeCalendar/TimeCalendar"), {
  ssr: false,
});

const Breadcrumb = dynamic(() => import("@/components/Breadcrumb/Breadcrumb"), { ssr: false });

type InputState = { [x: string]: string | boolean | number | Date };

const Page = ({ params }: { params: { id: string } }) => {
  const today = new Date();
  /** dates constan contains an array of all available dates in current month */
  const dates = Array.from(
    { length: new Date(today.getFullYear(), today.getMonth(), 0).getDate() },
    (_, v) => v
  );
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [inputState, setInputState] = useState<InputState>({
    event_name: "",
    frequency_type: "weekly",
    day_of_week: 0,
    is_active: true,
  });
  const [date, setDate] = useState(today);
  const [startTime, setStartTime] = useState(today);
  const [endTime, setEndTime] = useState(today);
  const [defaultForm, setDefaultForm] = useState<InputState>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    // set value by name
    const name = e.target.name;

    if (name.includes(" ")) {
      const joinedName = name.split(" ").join("_");
      setDefaultForm((input) => ({ ...input, [joinedName]: e.target.value }));
      setInputState((input) => ({ ...input, [joinedName]: e.target.value }));
      return;
    }

    setDefaultForm((input) => ({ ...input, [name]: e.target.value }));
    setInputState((input) => ({ ...input, [name]: e.target.value }));
  };

  const handleChangeInputSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();

    const id = e.target.id;

    if (id.includes(" ")) {
      const joinedId = id.split(" ").join("_");
      setDefaultForm((input) => ({ ...input, [joinedId]: e.target.selectedOptions[0].index }));
      setInputState((input) => ({ ...input, [joinedId]: e.target.selectedOptions[0].index }));
      return;
    }

    setDefaultForm((input) => ({ ...input, [e.target.id]: e.target.selectedOptions[0].index }));
    setInputState((input) => ({ ...input, [e.target.id]: e.target.selectedOptions[0].index }));
    return;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const event_date = formattedDate(date as Date);
    const start_time = String(startTime.toLocaleTimeString("en-US", { hour12: false }));
    const end_time = String(endTime.toLocaleTimeString("en-US", { hour12: false }));

    const data = { ...inputState, event_date, start_time, end_time };
  };

  return (
    <div className="bg-white text-dark-green mx-auto max-w-screen min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <Breadcrumb click={false} customPath={["form", "schedule", params.id]} />

      <div>
        <div className="mb-8 space-y-3">
          <p className="text-xl font-semibold">Form</p>
        </div>

        <form className="w-full group" onSubmit={handleSubmit} noValidate>
          <div className="mb-10 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="space-y-1">
                <div className="space-y-2">
                  <Input
                    name="event name"
                    label="event name"
                    placeholder="event name"
                    pattern=".{1,}"
                    require={true}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <RadioGroup
                    name="frequency type"
                    className="flex flex-col gap-3"
                    containerRadioClassName="flex gap-3 flex-wrap w-full"
                    onChange={handleChange}
                    defaultValue={inputState?.frequency_type as string}
                  >
                    <Radio label="weekly" id="weekly" key="weekly" />
                    <Radio label="monthly" id="monthly" key="monthly" />
                    <Radio label="special event" id="special event" key="special event" />
                  </RadioGroup>
                </div>
                <div className="space-y-2">
                  <Switch
                    name="is active"
                    value={inputState.is_active as boolean}
                    onClick={() =>
                      setInputState((state) => {
                        return { ...state, is_active: !state.is_active };
                      })
                    }
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Time
                </label>
                <div className="grid grid-rows-2 gap-4 w-full">
                  {defaultForm?.frequency_type === "special event" ? (
                    <TimeCalendar
                      type="calendar"
                      name="Select a day"
                      value={date}
                      onChange={(date: Date | null) => setDate(date as Date)}
                    />
                  ) : defaultForm?.frequency_type === "monthly" ? (
                    <>
                      <SelectInputGroup
                        name="date"
                        noLabel={true}
                        icon={<CalendarIcon />}
                        onChange={handleChangeInputSelect}
                      >
                        {dates.map((date) => (
                          <SelectInput
                            label={String(date + 1)}
                            id={String(date + 1)}
                            key={String(date + 1)}
                          />
                        ))}
                      </SelectInputGroup>
                    </>
                  ) : (
                    <SelectInputGroup
                      name="day of week"
                      noLabel={true}
                      icon={<CalendarIcon />}
                      onChange={handleChangeInputSelect}
                    >
                      {days.en.map((day) => (
                        <SelectInput label={day} id={day} key={day} />
                      ))}
                    </SelectInputGroup>
                  )}
                  <div className="flex justify-center gap-4 w-full">
                    <TimeCalendar
                      name="Start with"
                      value={startTime}
                      onChange={(time: Date | null) => setStartTime(time as Date)}
                    />
                    <TimeCalendar
                      name="End with"
                      value={endTime}
                      onChange={(time: Date | null) => setEndTime(time as Date)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button name="Cancel" type="reset" variant="outline" onClick={() => router.back()} />
              <Button name="Submit" type="submit" isLoading={isLoading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
