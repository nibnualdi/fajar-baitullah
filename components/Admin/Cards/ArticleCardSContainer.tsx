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
  console.log(articles, "lalalala")

  if (!limit) {
    return articles.map(({ id, title, content, image, category_id }) => (
      <ArticleCard
        image={image}
        category_id={category_id}
        desc={content}
        title={title}
        id={id}
        key={id}
      />
    ));
  }

  return (
    <div>
      {articles.map(({ id, title, content, image, category_id }, index) => {
        return (
          index < limit && (
            <ArticleCard
              image={image}
              category_id={category_id}
              desc={content}
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
