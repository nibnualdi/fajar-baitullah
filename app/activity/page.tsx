import { openSans700, openSans400 } from "@/assets/fonts";
import { Swiper } from "@/components";

export default function Activity() {
  return (
    <main className="bg-white h-[1000px]">
      <div className="w-[1278px] h-[712px] pt-[141px] m-auto">
        <Swiper
          containerClassName="max-w-[1278px] w-full h-[712px] rounded-[32px]"
          overlayClassName="backdrop-blur-[32.2px] bg-white/10 max-w-[1245px] w-full h-[300px] rounded-[26px] absolute bottom-[15px] m-auto left-0 right-0 py-[50px] px-[76px] flex flex-col gap-[28px]"
          h1ClassName={`${openSans700.className} text-[48px] max-w-[1106px]`}
          pClassName={`${openSans400.className} text-[20px] max-w-[1106px]`}
        />
      </div>
    </main>
  );
}
