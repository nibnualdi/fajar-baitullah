"use client";

import { InputState, formInputs, radioInput } from "@/components/Form/Form";
import { addArticle, getArticleByID } from "@/lib/api/articlesAPI";
import { useAppSelector } from "@/lib/hooks";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Form = dynamic(() => import("@/components/Form/Form"), { ssr: false });
const Breadcrumb = dynamic(() => import("@/components/Breadcrumb/Breadcrumb"), { ssr: false });

const Page = ({ params }: { params: { slug: string; id: string } }) => {
  const [defaultForm, setDefaultForm] = useState<any>()
  const { email, id } = useAppSelector((state) => state.rootReducer.userData)
  console.log(email, id, "email, id")

  const inputs: formInputs | radioInput = [
    {
      name: "title",
      placeholder: "title",
      require: true,
      pattern: ".{1,}",
    },
    {
      name: "content",
      placeholder: "description",
      type: "textarea",
    },
    {
      name: "image",
      placeholder: "image",
      type: "file",
    },
    {
      name: "category",
      placeholder: "category",
      type: "radio",
      values: [
        { id: "1", value: "option1" },
        { id: "2", value: "option2" },
        { id: "3", value: "option3" },
        { id: "4", value: "option4" },
        { id: "5", value: "option5" },
      ],
    },
  ];

  useEffect(()=>{
    if(params.id === "create") return
    const getArticle = async () => {
      const article = await getArticleByID(params.id)
      setDefaultForm(article)
    }
    getArticle()
  }, [])

  const handleSubmit = async (inputState: InputState, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inputState :", inputState);
    if (params.slug === "article") {
      // Add article
      if (params.id === "create") {
        const formData = new FormData();
        formData.append("title", inputState.title);
        formData.append("content", inputState.content);
        formData.append("image", inputState.image);
        formData.append("user_id", id as string);
        formData.append("category_id", inputState.category);
        await addArticle(formData);
        return;
      }
      
      // Edit article
      const formData = new FormData();
      formData.append("title", inputState.title);
      formData.append("content", inputState.content);
      formData.append("image", inputState.image);
      formData.append("user_id", id as string);
      formData.append("category_id", inputState.category);
      await addArticle(formData);
    }
  };
  return (
    <div className="bg-white text-dark-green mx-auto max-w-screen min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <Breadcrumb click={false} customPath={["form", params.slug, params.id]} />

      <Form defaultForm={defaultForm} inputs={inputs} handleSubmit={handleSubmit} cancelButton />
    </div>
  );
};

export default Page;
