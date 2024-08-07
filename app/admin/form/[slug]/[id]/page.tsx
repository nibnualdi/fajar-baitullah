"use client";

import { InputState, formInputs, radioInput } from "@/components/Form/Form";
import dynamic from "next/dynamic";
import React from "react";

const Form = dynamic(() => import("@/components/Form/Form"), { ssr: false });
const Breadcrumb = dynamic(() => import("@/components/Breadcrumb/Breadcrumb"), { ssr: false });

const Page = ({ params }: { params: { slug: string; id: string } }) => {
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

  const handleSubmit = async (inputState: InputState, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inputState :", inputState);
    if (params.slug === "article") {
      if (params.id === "create") {
        const formData = new FormData();
        formData.append("title", inputState.title);
        formData.append("content", inputState.content);
        formData.append("image", inputState.image);
        formData.append("user_id", "21"); // don't forget to change it when api's ready
        formData.append("category_id", inputState.category);
        return;
      }

      // code edit article here
    }
  };
  return (
    <div className="bg-white text-dark-green mx-auto max-w-screen min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <Breadcrumb click={false} customPath={["form", params.slug, params.id]} />

      <Form inputs={inputs} handleSubmit={handleSubmit} cancelButton />
    </div>
  );
};

export default Page;
