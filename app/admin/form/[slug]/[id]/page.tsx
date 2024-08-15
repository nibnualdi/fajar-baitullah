"use client";

import { addArticle, articleType, getArticleByID } from "@/lib/api/articlesAPI";
import { categoryType, getCategory } from "@/lib/api/categoriesAPI";
import { useAppSelector } from "@/lib/hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { InputState } from "@/components/Form/Input";

const Button = dynamic(() => import("@/components/Form/Button"), {
  ssr: false,
});
const Input = dynamic(() => import("@/components/Form/Input"), {
  ssr: false,
});
const Textarea = dynamic(() => import("@/components/Form/Textarea"), {
  ssr: false,
});
const RadioGroup = dynamic(() => import("@/components/Form/RadioGroup"), {
  ssr: false,
});
const Radio = dynamic(() => import("@/components/Form/Radio"), {
  ssr: false,
});
const File = dynamic(() => import("@/components/Form/File"), {
  ssr: false,
});

const Breadcrumb = dynamic(() => import("@/components/Breadcrumb/Breadcrumb"), { ssr: false });

const Page = ({ params }: { params: { slug: string; id: string } }) => {
  const token = Cookies.get("session_token") as string;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState<categoryType[]>();
  const [inputState, setInputState] = useState<InputState>({
    title: "",
    content: "",
    image: "",
    category: "",
  });
  const [defaultForm, setDefaultForm] = useState<articleType>();
  const { id } = useAppSelector((state) => state.rootReducer.userData);

  useEffect(() => {
    const getCategories = async () => {
      const category = await getCategory();
      setCategories(category);
    };
    getCategories();

    if (params.id === "create") return;

    const getArticle = async () => {
      const article = await getArticleByID(params.id);
      setDefaultForm(article);
    };
    getArticle();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();

    if (e.target.type === "radio")
      return setInputState((input) => ({ ...input, [e.target.name]: e.target.id }));
    // set value by name
    setInputState((input) => ({ ...input, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const targetInput = e.target as HTMLInputElement;
    const file = (targetInput.files as FileList)[0];

    setInputState((input) => ({ ...input, [e.target.name]: file }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("inputState :", inputState);
    setIsLoading(true);
    if (params.slug === "article") {
      // Add article
      if (params.id === "create") {
        const formData = new FormData();
        formData.append("title", inputState.title);
        formData.append("content", inputState.content);
        formData.append("image", inputState.image);
        formData.append("user_id", id as string);
        formData.append("category_id", inputState.category);
        await addArticle(formData, { authorization: `Bearer ${token}` });
        setIsLoading(false);
        return;
      }

      // Edit article
      const formData = new FormData();
      formData.append("title", inputState.title);
      formData.append("content", inputState.content);
      formData.append("image", inputState.image);
      formData.append("user_id", id as string);
      formData.append("category_id", inputState.category);
      await addArticle(formData, { authorization: `Bearer ${token}` });
      setIsLoading(false);
    }
  };
  return (
    <div className="bg-white text-dark-green mx-auto max-w-screen min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <Breadcrumb click={false} customPath={["form", params.slug, params.id]} />

      <div>
        <div className="mb-8 space-y-3">
          <p className="text-xl font-semibold">Form</p>
        </div>

        <form className="w-full group" onSubmit={handleSubmit} noValidate>
          <div className="mb-10 space-y-3">
            <div className="space-y-1">
              <div className="space-y-2">
                <Input
                  name="title"
                  label="title"
                  placeholder="title"
                  pattern=".{1,}"
                  require={true}
                  onChange={handleChange}
                  defaultValue={defaultForm?.Title}
                />
              </div>
              <div className="space-y-2">
                <Textarea
                  name="content"
                  label="content"
                  placeholder="description"
                  onChange={handleChange}
                  defaultValue={defaultForm?.Content}
                />
              </div>
              <div className="space-y-2">
                <RadioGroup
                  name="category"
                  className="flex flex-col gap-3"
                  containerRadioClassName="flex gap-3 flex-wrap w-full"
                  onChange={handleChange}
                  defaultValue={defaultForm?.CategoryID}
                >
                  {categories?.map((e) => <Radio label={e.name} id={String(e.id)} />)}
                </RadioGroup>
              </div>
              <div className="space-y-2">
                <File
                  name="image"
                  label="image"
                  defaultValue={defaultForm?.Image}
                  onChange={handleFileChange}
                />
              </div>
            </div>
            <div className="flex justify-between gap-2">
              <Button name="Cancel" type="reset" variant="outline" onClick={() => router.back()} />
              <Button name="Submit" type="submit" isLoading={isLoading} />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Page;
