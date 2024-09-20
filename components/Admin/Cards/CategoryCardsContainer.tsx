"use client";

import { categoryType, getCategory } from "@/lib/api/categoriesAPI";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const CategoryCard = dynamic(() => import("@/components/Admin/Cards/CategoryCard"), {
  ssr: false,
});

const CategoryCardsContainer = () => {
  const [categories, setCategories] = useState<categoryType[] | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      const categories = await getCategory();
      setCategories(categories);
    };
    fetchArticles();
  }, []);

  return (
    <div>
      {categories?.map((category, index) => (
        <CategoryCard category={category} index={index} key={category.name} />
      ))}
    </div>
  );
};

export default CategoryCardsContainer;
