import { FetchAPI } from ".";

export type categoryType = {
  id: number;
  name: string;
};

const getCategory = async (): Promise<categoryType[]> => {
  const articles = await FetchAPI({ endpoint: "/api/category/list" });
  return articles;
};

export { getCategory };
