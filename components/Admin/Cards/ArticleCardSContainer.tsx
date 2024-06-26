// import { articles } from "@/constans/dummyData";
import { getArticle } from "@/lib/api/articlesAPI";
import dynamic from "next/dynamic";
import React from "react";

const ArticleCard = dynamic(() => import("@/components/Admin/Cards/ArticleCard"), {
  ssr: false,
});

type PropsArticleCardSContainer = {
  limit?: number;
};

const ArticleCardSContainer = async ({ limit }: PropsArticleCardSContainer) => {
  const articles = await getArticle();
  // console.log(articles, "lalalala")

  if (!limit) {
    return articles.map(({ ID, Title, Content, Image, CategoryID }) => (
      <ArticleCard image={Image} category={CategoryID} desc={Content} title={Title} id={ID} key={ID} />
    ));
  }

  return (
    <div>
      {articles.map(({ ID, Title, Content, Image, CategoryID }, index) => {
        return (
          index < limit && (
            <ArticleCard
              image={Image}
              category={CategoryID}
              desc={Content}
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
