import { pages } from "@/constans/othersPage";
import Image from "next/image";
import tape2 from "@/assets/tape-green-2.png";
import tape3 from "@/assets/tape-green-3.png";
import { roboto400, roboto700 } from "@/assets/fonts";
import { Metadata } from "next";

type OthersPageProps = {
  params: { name: string };
};

export async function generateMetadata({ params }: OthersPageProps): Promise<Metadata> {
  const name = params.name;

  return {
    title: "Others",
    description: decodeURIComponent(name),
  };
}

const Page = async ({ params: { name } }: OthersPageProps) => {
  const selectedPage = pages.find((value) => {
    return value.name.toLocaleLowerCase() === decodeURIComponent(name).toLocaleLowerCase();
  });

  return (
    <div className="min-h-[calc(100%+800px)] p-0 lg:p-56 bg-white text-black">
      <div className="relative p-10 pt-40 md:p-32 rounded-3xl shadow-coverage">
        <Image
          alt="tape2"
          src={tape2}
          className="absolute -left-10 -top-28 drop-shadow-sm rotate-45"
        />
        <Image alt="tape3" src={tape3} className="absolute -bottom-24 -right-24 drop-shadow-sm hidden lg:block" />
        <h1 className={`mb-9 text-5xl capitalize ${roboto700.className}`}>
          {decodeURIComponent(name)}
        </h1>
        <p className={`whitespace-pre-wrap h-auto ${roboto400.className}`}>{selectedPage?.desc}</p>
      </div>
    </div>
  );
};

export default Page;
