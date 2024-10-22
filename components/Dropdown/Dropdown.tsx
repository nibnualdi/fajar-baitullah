"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler, useEffect, useState } from "react";

export type menus = {
  name: string;
  href: string;
  icon?: () => React.JSX.Element;
  closeDropdownInAction?: boolean;
  CustomElement?: () => React.JSX.Element;
  handleClick?: MouseEventHandler<HTMLAnchorElement> | undefined;
};

type PropsDropdown = {
  name: string;
  menus: menus[];
  Icon?: () => React.JSX.Element;
  onOpen?: "click" | "hover";
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Dropdown = ({ name, menus, Icon, onOpen = "click" }: PropsDropdown) => {
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    setToggle(false);
  }, [pathname]);

  const handleToggle = () => {
    setToggle((value) => !value);
  };

  const handleblur: React.FocusEventHandler<HTMLElement> = (e) => {
    if (e.relatedTarget?.className.includes("dropdown")) return;
    setToggle(false);
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLElement> = (e) => {
    if ((e.relatedTarget as Element)?.className.includes("dropdown")) return;
    setToggle(false);
  };

  return (
    <div className="relative ml-5 flex w-1/4 items-center justify-end p-1 sm:right-auto sm:mr-0">
      {onOpen === "click" ? (
        <button className="relative block dropdown" onClick={handleToggle} onBlur={handleblur}>
          {Icon ? <Icon /> : name}
        </button>
      ) : (
        <button
          className="relative block dropdown"
          onMouseEnter={handleToggle}
          onMouseLeave={handleMouseLeave}
          onClick={handleToggle}
        >
          {Icon ? <Icon /> : name}
        </button>
      )}

      <div
        id="dropdownAvatar"
        className={`absolute right-2 ${
          onOpen === "click" ? "top-11" : "top-7"
        } z-10 bg-white rounded-lg shadow w-44 dropdown transition ease-in-out text-right ${
          toggle ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        onBlur={handleblur}
      >
        {menus.map((item, index) => {
          return item.closeDropdownInAction && item.href ? (
            <Link
              href={item.href}
              data-dropdown
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dropdown"
              onBlur={handleblur}
              onMouseLeave={handleMouseLeave}
              onClick={item.handleClick}
              key={`${item.name} ${index}`}
            >
              {item.CustomElement ? (
                <item.CustomElement />
              ) : item.icon ? (
                <span className="flex items-center gap-1">
                  <item.icon />
                  <p>{item.name}</p>
                </span>
              ) : (
                item.name
              )}
            </Link>
          ) : (
            <div
              className="px-4 py-3 text-sm text-gray-900 dropdown"
              onBlur={handleblur}
              tabIndex={0}
              key={`${item.name} ${index}`}
            >
              {item.CustomElement ? (
                <item.CustomElement />
              ) : item.icon ? (
                <span className="flex items-center gap-1">
                  <item.icon />
                  <p>{item.name}</p>
                </span>
              ) : (
                item.name
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
