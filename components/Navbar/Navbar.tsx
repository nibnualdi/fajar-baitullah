import dynamic from "next/dynamic";

import home from "@/assets/icons/home.json";
import article from "@/assets/icons/article.json";
import cellPhone from "@/assets/icons/call-phone.json";

const AnimatedIcon = dynamic(() => import("@/components/AnimatedIcon/AnimatedIcon"), {
  ssr: false,
});

type navType = {
  name: string;
  icon?: any;
  to: string;
};

const nav: navType[] = [
  { name: "home", icon: home, to: "/home" },
  { name: "articles", icon: article, to: "/articles" },
  { name: "contact", icon: cellPhone, to: "/contact" },
];

const Navbar = () => {
  return (
    <header className="w-full absolute bg-transparent flex justify-between pl-[69px] pr-[93px] pt-[34px] z-50">
      <div className="w-[68px] h-[68px] bg-white rounded-full" />
      <div className="text-black flex gap-10">
        {nav.map((item) => (
          <AnimatedIcon
            icon={item.icon}
            className="flex items-center gap-1 font-semibold capitalize cursor-pointer"
            key={item.name}
          >
            <p>{item.name}</p>
          </AnimatedIcon>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
