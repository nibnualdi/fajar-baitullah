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
  return await categories;
};

const getCategoryByID = async (id: string): Promise<categoryType | any> => {
  try {
    const category = await FetchAPI({ endpoint: `/api/category/get/${id}` });
    if (category.error) {
      throw new Error(`Request failed with status ${category.error}`);
    }
    return category;
  } catch (err) {
    console.log("Error in getCategoryByID:", err);
    return { error: true, message: err || 'Unknown error' };
  }
};

const addCategory = async (data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: "/api/category/add", body: data, method: "POST", headers });
};

const updateCategory = async (id: string, data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: `/api/category/update/${id}`, body: data, method: "PUT", headers });
};

const deleteCategory = async (id: string, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: `/api/category/delete/${id}`, method: "DELETE", headers });
};

export { getCategory, getCategoryByID, addCategory, updateCategory, deleteCategory };
