"use client";

import { openSans400, permanentMarker400 } from "@/assets/fonts";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const articles = [
  {
    id: "1",
    title: "Lorem Ipsum Color Sit Amet.",
    image:
      "https://static.republika.co.id/uploads/images/inpicture_slide/aktivitas-warga-saat-shalat-subuh-_150302073711-146.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci quis impedit perspiciatis suscipit beatae dolores vero, provident voluptatibus! Doloremque laboriosam pariatur itaque praesentium expedita provident. Vitae at odit, architecto dolore nulla quis, commodi eaque temporibus obcaecati expedita harum saepe non laudantium modi fuga, ducimus cum voluptate sint facilis. Dolores praesentium repellendus molestias incidunt nemo, amet reprehenderit odit reiciendis laborum, veritatis vero quae exercitationem unde ab eos magnam ipsam omnis aliquid, ratione hic fuga minus. Nostrum aperiam possimus reprehenderit? Ad aperiam enim ab perferendis quo consequuntur velit? Omnis fugiat esse ipsam nam quasi mollitia vel enim possimus praesentium, in pariatur quia, aliquam delectus distinctio nisi culpa doloribus nihil magnam maxime laudantium alias ex molestiae! Minus quam asperiores in, temporibus laudantium nostrum a, incidunt animi eveniet quas quis velit aperiam similique dolorem delectus obcaecati ducimus eos voluptatem adipisci dolores, quae molestias! Voluptatibus consectetur perspiciatis error eligendi dicta dolorem similique totam expedita voluptate optio ut obcaecati ipsam itaque ullam illum blanditiis facere corporis harum quidem, atque sunt necessitatibus iste eum unde? Et, quam. Ad magni eius mollitia nostrum dicta animi laudantium rem cumque vero odit maiores possimus officia numquam itaque porro sunt, magnam recusandae quidem ipsum. Veniam placeat praesentium modi quas odio.",
  },
  {
    id: "2",
    title: "Lorem Ipsum Color Sit Amet.",
    image:
      "https://static.republika.co.id/uploads/images/inpicture_slide/aktivitas-warga-saat-shalat-subuh-_150302073711-146.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci quis impedit perspiciatis suscipit beatae dolores vero, provident voluptatibus! Doloremque laboriosam pariatur itaque praesentium expedita provident. Vitae at odit, architecto dolore nulla quis, commodi eaque temporibus obcaecati expedita harum saepe non laudantium modi fuga, ducimus cum voluptate sint facilis. Dolores praesentium repellendus molestias incidunt nemo, amet reprehenderit odit reiciendis laborum, veritatis vero quae exercitationem unde ab eos magnam ipsam omnis aliquid, ratione hic fuga minus. Nostrum aperiam possimus reprehenderit? Ad aperiam enim ab perferendis quo consequuntur velit? Omnis fugiat esse ipsam nam quasi mollitia vel enim possimus praesentium, in pariatur quia, aliquam delectus distinctio nisi culpa doloribus nihil magnam maxime laudantium alias ex molestiae! Minus quam asperiores in, temporibus laudantium nostrum a, incidunt animi eveniet quas quis velit aperiam similique dolorem delectus obcaecati ducimus eos voluptatem adipisci dolores, quae molestias! Voluptatibus consectetur perspiciatis error eligendi dicta dolorem similique totam expedita voluptate optio ut obcaecati ipsam itaque ullam illum blanditiis facere corporis harum quidem, atque sunt necessitatibus iste eum unde? Et, quam. Ad magni eius mollitia nostrum dicta animi laudantium rem cumque vero odit maiores possimus officia numquam itaque porro sunt, magnam recusandae quidem ipsum. Veniam placeat praesentium modi quas odio.",
  },
  {
    id: "3",
    title: "Lorem Ipsum Color Sit Amet.",
    image:
      "https://static.republika.co.id/uploads/images/inpicture_slide/aktivitas-warga-saat-shalat-subuh-_150302073711-146.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci quis impedit perspiciatis suscipit beatae dolores vero, provident voluptatibus! Doloremque laboriosam pariatur itaque praesentium expedita provident. Vitae at odit, architecto dolore nulla quis, commodi eaque temporibus obcaecati expedita harum saepe non laudantium modi fuga, ducimus cum voluptate sint facilis. Dolores praesentium repellendus molestias incidunt nemo, amet reprehenderit odit reiciendis laborum, veritatis vero quae exercitationem unde ab eos magnam ipsam omnis aliquid, ratione hic fuga minus. Nostrum aperiam possimus reprehenderit? Ad aperiam enim ab perferendis quo consequuntur velit? Omnis fugiat esse ipsam nam quasi mollitia vel enim possimus praesentium, in pariatur quia, aliquam delectus distinctio nisi culpa doloribus nihil magnam maxime laudantium alias ex molestiae! Minus quam asperiores in, temporibus laudantium nostrum a, incidunt animi eveniet quas quis velit aperiam similique dolorem delectus obcaecati ducimus eos voluptatem adipisci dolores, quae molestias! Voluptatibus consectetur perspiciatis error eligendi dicta dolorem similique totam expedita voluptate optio ut obcaecati ipsam itaque ullam illum blanditiis facere corporis harum quidem, atque sunt necessitatibus iste eum unde? Et, quam. Ad magni eius mollitia nostrum dicta animi laudantium rem cumque vero odit maiores possimus officia numquam itaque porro sunt, magnam recusandae quidem ipsum. Veniam placeat praesentium modi quas odio.",
  },
  {
    id: "4",
    title: "Lorem Ipsum Color Sit Amet.",
    image:
      "https://static.republika.co.id/uploads/images/inpicture_slide/aktivitas-warga-saat-shalat-subuh-_150302073711-146.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci quis impedit perspiciatis suscipit beatae dolores vero, provident voluptatibus! Doloremque laboriosam pariatur itaque praesentium expedita provident. Vitae at odit, architecto dolore nulla quis, commodi eaque temporibus obcaecati expedita harum saepe non laudantium modi fuga, ducimus cum voluptate sint facilis. Dolores praesentium repellendus molestias incidunt nemo, amet reprehenderit odit reiciendis laborum, veritatis vero quae exercitationem unde ab eos magnam ipsam omnis aliquid, ratione hic fuga minus. Nostrum aperiam possimus reprehenderit? Ad aperiam enim ab perferendis quo consequuntur velit? Omnis fugiat esse ipsam nam quasi mollitia vel enim possimus praesentium, in pariatur quia, aliquam delectus distinctio nisi culpa doloribus nihil magnam maxime laudantium alias ex molestiae! Minus quam asperiores in, temporibus laudantium nostrum a, incidunt animi eveniet quas quis velit aperiam similique dolorem delectus obcaecati ducimus eos voluptatem adipisci dolores, quae molestias! Voluptatibus consectetur perspiciatis error eligendi dicta dolorem similique totam expedita voluptate optio ut obcaecati ipsam itaque ullam illum blanditiis facere corporis harum quidem, atque sunt necessitatibus iste eum unde? Et, quam. Ad magni eius mollitia nostrum dicta animi laudantium rem cumque vero odit maiores possimus officia numquam itaque porro sunt, magnam recusandae quidem ipsum. Veniam placeat praesentium modi quas odio.",
  },
  {
    id: "5",
    title: "Lorem Ipsum Color Sit Amet.",
    image:
      "https://static.republika.co.id/uploads/images/inpicture_slide/aktivitas-warga-saat-shalat-subuh-_150302073711-146.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci quis impedit perspiciatis suscipit beatae dolores vero, provident voluptatibus! Doloremque laboriosam pariatur itaque praesentium expedita provident. Vitae at odit, architecto dolore nulla quis, commodi eaque temporibus obcaecati expedita harum saepe non laudantium modi fuga, ducimus cum voluptate sint facilis. Dolores praesentium repellendus molestias incidunt nemo, amet reprehenderit odit reiciendis laborum, veritatis vero quae exercitationem unde ab eos magnam ipsam omnis aliquid, ratione hic fuga minus. Nostrum aperiam possimus reprehenderit? Ad aperiam enim ab perferendis quo consequuntur velit? Omnis fugiat esse ipsam nam quasi mollitia vel enim possimus praesentium, in pariatur quia, aliquam delectus distinctio nisi culpa doloribus nihil magnam maxime laudantium alias ex molestiae! Minus quam asperiores in, temporibus laudantium nostrum a, incidunt animi eveniet quas quis velit aperiam similique dolorem delectus obcaecati ducimus eos voluptatem adipisci dolores, quae molestias! Voluptatibus consectetur perspiciatis error eligendi dicta dolorem similique totam expedita voluptate optio ut obcaecati ipsam itaque ullam illum blanditiis facere corporis harum quidem, atque sunt necessitatibus iste eum unde? Et, quam. Ad magni eius mollitia nostrum dicta animi laudantium rem cumque vero odit maiores possimus officia numquam itaque porro sunt, magnam recusandae quidem ipsum. Veniam placeat praesentium modi quas odio.",
  },
  {
    id: "6",
    title: "Lorem Ipsum Color Sit Amet.",
    image:
      "https://static.republika.co.id/uploads/images/inpicture_slide/aktivitas-warga-saat-shalat-subuh-_150302073711-146.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci quis impedit perspiciatis suscipit beatae dolores vero, provident voluptatibus! Doloremque laboriosam pariatur itaque praesentium expedita provident. Vitae at odit, architecto dolore nulla quis, commodi eaque temporibus obcaecati expedita harum saepe non laudantium modi fuga, ducimus cum voluptate sint facilis. Dolores praesentium repellendus molestias incidunt nemo, amet reprehenderit odit reiciendis laborum, veritatis vero quae exercitationem unde ab eos magnam ipsam omnis aliquid, ratione hic fuga minus. Nostrum aperiam possimus reprehenderit? Ad aperiam enim ab perferendis quo consequuntur velit? Omnis fugiat esse ipsam nam quasi mollitia vel enim possimus praesentium, in pariatur quia, aliquam delectus distinctio nisi culpa doloribus nihil magnam maxime laudantium alias ex molestiae! Minus quam asperiores in, temporibus laudantium nostrum a, incidunt animi eveniet quas quis velit aperiam similique dolorem delectus obcaecati ducimus eos voluptatem adipisci dolores, quae molestias! Voluptatibus consectetur perspiciatis error eligendi dicta dolorem similique totam expedita voluptate optio ut obcaecati ipsam itaque ullam illum blanditiis facere corporis harum quidem, atque sunt necessitatibus iste eum unde? Et, quam. Ad magni eius mollitia nostrum dicta animi laudantium rem cumque vero odit maiores possimus officia numquam itaque porro sunt, magnam recusandae quidem ipsum. Veniam placeat praesentium modi quas odio.",
  },
  {
    id: "7",
    title: "Lorem Ipsum Color Sit Amet.",
    image:
      "https://static.republika.co.id/uploads/images/inpicture_slide/aktivitas-warga-saat-shalat-subuh-_150302073711-146.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur adipisci quis impedit perspiciatis suscipit beatae dolores vero, provident voluptatibus! Doloremque laboriosam pariatur itaque praesentium expedita provident. Vitae at odit, architecto dolore nulla quis, commodi eaque temporibus obcaecati expedita harum saepe non laudantium modi fuga, ducimus cum voluptate sint facilis. Dolores praesentium repellendus molestias incidunt nemo, amet reprehenderit odit reiciendis laborum, veritatis vero quae exercitationem unde ab eos magnam ipsam omnis aliquid, ratione hic fuga minus. Nostrum aperiam possimus reprehenderit? Ad aperiam enim ab perferendis quo consequuntur velit? Omnis fugiat esse ipsam nam quasi mollitia vel enim possimus praesentium, in pariatur quia, aliquam delectus distinctio nisi culpa doloribus nihil magnam maxime laudantium alias ex molestiae! Minus quam asperiores in, temporibus laudantium nostrum a, incidunt animi eveniet quas quis velit aperiam similique dolorem delectus obcaecati ducimus eos voluptatem adipisci dolores, quae molestias! Voluptatibus consectetur perspiciatis error eligendi dicta dolorem similique totam expedita voluptate optio ut obcaecati ipsam itaque ullam illum blanditiis facere corporis harum quidem, atque sunt necessitatibus iste eum unde? Et, quam. Ad magni eius mollitia nostrum dicta animi laudantium rem cumque vero odit maiores possimus officia numquam itaque porro sunt, magnam recusandae quidem ipsum. Veniam placeat praesentium modi quas odio.",
  },
];

const page = ({ params }: { params: { id: string } }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scroll = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const [number, setNumber] = useState(0);

  const selectedActivity = articles.filter((item) => item.id === params.id);

  useEffect(() => {
    scroll.on("change", (v) => setNumber(Math.round(v)));
    // scroll.onChange((v) => setNumber(Math.round(v)));
  }, [scrollYProgress]);

  return (
    <div ref={ref} className="h-[calc(100%+800px)] bg-white text-black">
      <Image
        alt="activity-image-detail"
        src={selectedActivity[0].image}
        layout="fill"
        objectFit="cover"
        className="w-full max-h-[575px] !static"
      />
      <div className="h-[calc(100%-575px)] flex">
        <div className="relative h-full max-w-[456px] w-full">
          <div className="sticky top-[150px] left-[206px] z-10 h-[62.5px] w-fit flex items-center bg-white">
            <p>{number}%</p>
          </div>
          <motion.div
            style={{ scaleY: scrollYProgress }}
            className="bg-black h-full w-[1px] absolute top-[0px] left-[217px] origin-top"
          />
        </div>
        <div className="max-w-[901px] w-full mt-[10px]">
          <h1 className={`${permanentMarker400.className} text-[96px] leading-[100px] mb-[32px]`}>
            {selectedActivity[0].title}
          </h1>
          <p className={`${openSans400.className} text-[24px]`}>{selectedActivity[0].desc}</p>
        </div>
      </div>
    </div>
  );
};

export default page;
