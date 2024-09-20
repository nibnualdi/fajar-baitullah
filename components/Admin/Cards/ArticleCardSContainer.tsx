"use client";

import { articleType, getArticle } from "@/lib/api/articlesAPI";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const ArticleCard = dynamic(() => import("@/components/Admin/Cards/ArticleCard"), {
  ssr: false,
});

type PropsArticleCardSContainer = {
  limit?: number;
};

const ArticleCardSContainer = ({ limit }: PropsArticleCardSContainer) => {
  const [articles, setArticles] = useState<articleType[] | null>(null);
  useEffect(() => {
    const fetchArticles = async () => {
      const articles = await getArticle();
      setArticles(articles);
    };
    fetchArticles();
  }, []);

  if (!limit) {
    return articles?.map(({ id, title, content, image, category_id }) => (
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
      {articles?.map(({ id, title, content, image, category_id }, index) => {
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
