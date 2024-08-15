import { FetchAPI } from ".";

export type articleType = {
  ID: number;
  Title: string;
  Content: string;
  Image: string;
  CategoryID: number;
  UserID: number;
  CreatedAt: string;
  UpdatedAt: string;
};

const getArticle = async (): Promise<articleType[]> => {
  const articles = await FetchAPI({ endpoint: "/api/article/list" });
  return articles;
};

const getArticleByID = async (id: string): Promise<articleType[]> => {
  const articles = await FetchAPI({ endpoint: `/api/article/get/${id}` });
  return articles;
};

const addArticle = async (data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: "/api/article/add", body: data, method: "POST", headers });
};

export { getArticle, getArticleByID, addArticle };
