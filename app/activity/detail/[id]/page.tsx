import { Metadata } from "next";
import { articles } from "@/constans/dummyData";
import DetailPage from "../DetailPage";

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
  const selectedActivity = articles.filter((item) => item.id === id);

  return {
    title: selectedActivity[0].title,
    description: selectedActivity[0].desc,
    openGraph: {
      images: selectedActivity[0].image,
    },
  };
};

const Page = ({ params }: { params: { id: string } }) => {
  return <DetailPage params={params} />;
};

export default Page;
