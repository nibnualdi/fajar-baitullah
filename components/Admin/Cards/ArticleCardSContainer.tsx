import dynamic from 'next/dynamic';
import React from 'react'
const ArticleCard = dynamic(() => import("@/components/Admin/Cards/ArticleCard"), {
  ssr: false,
});

const ArticleCardSContainer = () => {
  return (
    <div>
      <ArticleCard />
    </div>
  )
}

export default ArticleCardSContainer