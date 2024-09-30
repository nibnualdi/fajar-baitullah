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

export type imageArticleType = {
  signedURL: string;
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

const addImageArticle = async (
  data: BodyInit,
  headers?: HeadersInit
): Promise<responseArticleType<imageArticleType>> => {
  const image = await FetchAPI({
    endpoint: "/api/article/image/add",
    body: data,
    method: "POST",
    headers,
  });
  return image;
};

const updateArticle = async (id: string, data: BodyInit, headers?: HeadersInit) => {
  await FetchAPI({ endpoint: `/api/article/update/${id}`, body: data, method: "PUT", headers });
};

export { getArticle, getArticleByID, addArticle, addImageArticle, updateArticle };
