import { getCategory } from "@/lib/api/categoriesAPI";
import dynamic from "next/dynamic";
import React from "react";

const CategoryCard = dynamic(() => import("@/components/Admin/Cards/CategoryCard"), {
  ssr: false,
});

const CategoryCardsContainer = async () => {
  const categories = await getCategory();

  return (
    <div>
      {categories.map((category, index) => (
        <CategoryCard category={category} index={index} />
      ))}
    </div>
  );
};

export default CategoryCardsContainer;
