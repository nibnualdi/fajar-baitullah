import { FetchAPI } from ".";

export type categoryType = {
  id: string;
  name: string;
};

const getCategory = async (): Promise<categoryType[]> => {
  const categories = await FetchAPI({
    endpoint: "/api/category/list",
    next: { tags: ["list_category"] },
  });
  return categories;
};

const getCategoryByID = async (id: string): Promise<categoryType> => {
  const category = await FetchAPI({ endpoint: `/api/category/get/${id}` });
  return category;
};

const addCategory = async (data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: "/api/category/add", body: data, method: "POST", headers });
};

const updateCategory = async (id: string, data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: `/api/category/update/${id}`, body: data, method: "PUT", headers });
};

export { getCategory, getCategoryByID, addCategory, updateCategory };
