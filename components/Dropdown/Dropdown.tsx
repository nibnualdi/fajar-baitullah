"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AvatarIcon } from "@/assets/icons/admin";

const Dropdown = () => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  const handleToggle = () => {
    setToggle((value) => !value);
  };

  const handleblur: React.FocusEventHandler<
    HTMLButtonElement | HTMLDivElement | HTMLAnchorElement
  > = (e) => {
    if (e.relatedTarget?.className.includes("dropdown")) return;
    setToggle(false);
  };

  return (
    <div className="relative ml-5 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0">
      <button className="relative block dropdown" onClick={handleToggle} onBlur={handleblur}>
        <div className="h-10 w-10 rounded-full object-cover bg-white flex justify-center items-center text-dark-green">
          <AvatarIcon />
        </div>
      </button>

      <div
        id="dropdownAvatar"
        className={`absolute right-2 top-11 z-10 bg-white rounded-lg shadow w-44 dropdown transition ease-in-out ${
          toggle ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onBlur={handleblur}
      >
        <div className="px-4 py-3 text-sm text-gray-900 dropdown" onBlur={handleblur} tabIndex={0}>
          <div>Bonnie Green</div>
          <div className="font-medium truncate">name@flowbite.com</div>
        </div>
        <div className="py-2">
          <Link
            href="/admin/auth/login"
            data-dropdown
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown"
            onBlur={handleblur}
          >
            Sign out
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
