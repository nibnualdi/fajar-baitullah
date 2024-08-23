import { FetchAPI } from ".";

export type categoryType = {
  id: number;
  name: string;
};

const getCategory = async (): Promise<categoryType[]> => {
  const articles = await FetchAPI({ endpoint: "/api/category/list" });
  return articles;
};

const addCategory = async (data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: "/api/category/add", body: data, method: "POST", headers });
};

export { getCategory, addCategory };
