import { FetchAPI } from "..";

export type recurringScheduleType = {
  id: string;
  event_name: string;
  frequency_type: "weekly" | "monthly";
  day_of_week: number | undefined;
  day_of_month: number | undefined;
  start_time: string;
  end_time: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
};

export type responseRecurringScheduleType<TData> = {
  status: "success" | "error";
  massage: string;
  data: TData;
};

const getRecurringSchedule = async (): Promise<
  responseRecurringScheduleType<recurringScheduleType[]>
> => {
  const recurringSchedules = await FetchAPI({
    endpoint: "/api/recurring-schedule/list",
    next: { tags: ["list_recurring_schedule"] },
  });
  return await recurringSchedules;
};

// const getRecurringScheduleByID = async (
//   id: string
// ): Promise<responseRecurringScheduleType<recurringScheduleType>> => {
//   const RecurringSchedules = await FetchAPI({ endpoint: `/api/RecurringSchedule/get/${id}` });
//   return await RecurringSchedules;
// };

// const addRecurringSchedule = async (data: BodyInit, headers?: HeadersInit) => {
//   await FetchAPI({ endpoint: "/api/RecurringSchedule/add", body: data, method: "POST", headers });
// };

// const updateRecurringSchedule = async (id: string, data: BodyInit, headers?: HeadersInit) => {
//   await FetchAPI({ endpoint: `/api/RecurringSchedule/update/${id}`, body: data, method: "PUT", headers });
// };

// export { getRecurringSchedule, getRecurringScheduleByID, addRecurringSchedule, updateRecurringSchedule };
export { getRecurringSchedule };
