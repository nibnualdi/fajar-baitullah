"use client";

import { InputState, formInputs } from "@/components/Form/Form";
import dynamic from "next/dynamic";
import React from "react";

const Form = dynamic(() => import("@/components/Form/Form"), { ssr: false });
const Breadcrumb = dynamic(() => import("@/components/Breadcrumb/Breadcrumb"), { ssr: false });

const Page = ({ params }: { params: { slug: string; id: string } }) => {
  const inputs: formInputs = [
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
    },
  ];

  const handleSubmit = async (inputState: InputState, e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inputState :", inputState);
  };
  return (
    <div className="bg-white text-dark-green mx-auto max-w-screen min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <Breadcrumb click={false} customPath={["form", params.slug, params.id]} />

      <Form inputs={inputs} handleSubmit={handleSubmit} cancelButton />
    </div>
  );
};

export default Page;
