import { FetchAPI } from ".";

export type articleType = {
  id: string;
  title: string;
  content: string;
  image: string;
  category_id: string;
  user_id: string;
  created_at: string;
  updated_at: string;
};

export type responseArticleType<TData> = {
  status: "success" | "error";
  massage: string;
  data: TData;
};

const getArticle = async (): Promise<responseArticleType<articleType[]>> => {
  const articles = await FetchAPI({
    endpoint: "/api/article/list",
    next: { tags: ["list_article"] },
  });
  return await articles;
};

const getArticleByID = async (id: string): Promise<responseArticleType<articleType>> => {
  const articles = await FetchAPI({ endpoint: `/api/article/get/${id}` });
  return await articles;
};

const addArticle = async (data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: "/api/article/add", body: data, method: "POST", headers });
};

export { getArticle, getArticleByID, addArticle };
