import { FetchAPI } from ".";

export type categoryType = {
  id: number;
  name: string;
};

const getCategory = async (): Promise<categoryType[]> => {
  const categories = await FetchAPI({ endpoint: "/api/category/list" });
  return categories;
};

const getCategoryByID = async (id: string): Promise<categoryType> => {
  const category = await FetchAPI({ endpoint: `/api/category/get/${id}` });
  return category;
};

const addCategory = async (data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: "/api/category/add", body: data, method: "POST", headers });
};

export { getCategory, getCategoryByID, addCategory };
