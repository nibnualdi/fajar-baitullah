import { FetchAPI } from "..";

export type specialEventScheduleType = {
  id: string;
  event_name: string;
  event_date: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
};

export type responseSpecialEventScheduleType<TData> = {
  status: "success" | "error";
  massage: string;
  data: TData;
};

const getSpecialEvent = async (): Promise<
  responseSpecialEventScheduleType<specialEventScheduleType[]>
> => {
  const specialEventSchedules = await FetchAPI({
    endpoint: "/api/special-event/list",
    next: { tags: ["list_special_event_schedule"] },
  });
  return await specialEventSchedules;
};

// const getspecialEventByID = async (
//   id: string
// ): Promise<responseSpecialEventType<specialEventType>> => {
//   const specialEvents = await FetchAPI({ endpoint: `/api/specialEvent/get/${id}` });
//   return await specialEvents;
// };

// const addspecialEvent = async (data: BodyInit, headers?: HeadersInit) => {
//   await FetchAPI({ endpoint: "/api/specialEvent/add", body: data, method: "POST", headers });
// };

// const updatespecialEvent = async (id: string, data: BodyInit, headers?: HeadersInit) => {
//   await FetchAPI({ endpoint: `/api/specialEvent/update/${id}`, body: data, method: "PUT", headers });
// };

// export { getspecialEvent, getspecialEventByID, addspecialEvent, updatespecialEvent };
export { getSpecialEvent };
