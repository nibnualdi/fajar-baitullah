import { articles } from "@/constans/dummyData";
import dynamic from "next/dynamic";
import React from "react";

const ArticleCard = dynamic(() => import("@/components/Admin/Cards/ArticleCard"), {
  ssr: false,
});

type PropsArticleCardSContainer = {
  limit?: number;
};

const ArticleCardSContainer = ({ limit }: PropsArticleCardSContainer) => {
  if (!limit) {
    return articles.map(({ Image, CategoryID, Desc, Title, ID }) => (
      <ArticleCard image={Image} category={CategoryID} desc={Desc} title={Title} id={ID} key={ID} />
    ));
  }
  return (
    <div>
      {articles.map(({ Image, CategoryID, Desc, Title, ID }, index) => {
        return (
          index < limit && (
            <ArticleCard
              image={Image}
              category={CategoryID}
              desc={Desc}
              title={Title}
              id={ID}
              key={ID}
            />
          )
        );
      })}
    </div>
  );
};

export default ArticleCardSContainer;
