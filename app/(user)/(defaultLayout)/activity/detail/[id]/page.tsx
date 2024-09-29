import { Metadata } from "next";
import DetailPage from "../DetailPage";
import { getArticleByID } from "@/lib/api/articlesAPI";

type DetailPageProps = {
  params: { id: string };
};

// example for generating metadata data from api
// for now, it's still using static data, so we're not using it yet
// export const generateMetadata = async ({ params: { id } }: DetailPageProps): Promise<Metadata> => {
//   // example api
//   const res = await fetch(`api/${id}`);
//   const activity = await res.json();
//   return {
//     title: activity.title,
//     description: activity.desc,
//     openGraph: {
//       images: "http://example.content.image.com"
//     }
//   };
// };

export const generateMetadata = async ({ params: { id } }: DetailPageProps): Promise<Metadata> => {
  const article = await getArticleByID(id);

  return {
    title: article.data.title,
    description: article.data.content,
    openGraph: {
      images: article.data.image,
    },
  };
};

const Page = async ({ params: { id } }: DetailPageProps) => {
  const article = await getArticleByID(id);
  return <DetailPage article={article.data} />;
};

export default Page;
