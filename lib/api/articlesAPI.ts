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

const getArticle = async (): Promise<articleType[]> => {
  const articles = await FetchAPI({
    endpoint: "/api/article/list",
    next: { tags: ["list_article"] },
  });
  return articles;
};

const getArticleByID = async (id: string): Promise<articleType> => {
  const articles = await FetchAPI({ endpoint: `/api/article/get/${id}` });
  return articles;
};

const addArticle = async (data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: "/api/article/add", body: data, method: "POST", headers });
};

export { getArticle, getArticleByID, addArticle };
