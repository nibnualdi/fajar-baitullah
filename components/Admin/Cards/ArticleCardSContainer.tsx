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
    return articles.map(({ image, category, desc, title, id }) => (
      <ArticleCard image={image} category={category} desc={desc} title={title} id={id} key={id} />
    ));
  }
  return (
    <div>
      {articles.map(({ image, category, desc, title, id }, index) => {
        return (
          index < limit && (
            <ArticleCard
              image={image}
              category={category}
              desc={desc}
              title={title}
              id={id}
              key={id}
            />
          )
        );
      })}
    </div>
  );
};

export default ArticleCardSContainer;
