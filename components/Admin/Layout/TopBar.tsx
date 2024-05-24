"use client";

import { AvatarIcon } from "@/assets/icons/admin";
import Dropdown, { menus } from "@/components/Dropdown/Dropdown";
import { toggleSidebar } from "@/lib/features/util/utilSlice";
import { useAppDispatch } from "@/lib/hooks";

const ButtonAccountOwner = () => {
  return (
    <div className="h-10 w-10 rounded-full object-cover bg-white flex justify-center items-center text-dark-green">
      <AvatarIcon />
    </div>
  );
};

const AccountOwner = () => {
  return (
    <>
      <div>Bonnie Green</div>
      <div className="font-medium truncate">name@flowbite.com</div>
    </>
  );
};

function TopBar() {
  const MENUS: menus[] = [
    { name: "account owner", CustomElement: AccountOwner },
    { name: "Sign out", href: "/admin/auth/login", closeDropdownInAction: true },
  ];
  const dispatch = useAppDispatch();

  const toggleSidebarHandler = () => {
    dispatch(toggleSidebar());
  };

  return (
    <header className="relative z-10 h-16 w-full items-center bg-gray-200 shadow md:h-20 lg:rounded-2xl">
      <div className="relative mx-auto flex h-full w-full flex-col justify-center px-3">
        <div className="relative flex w-full items-center pl-1 sm:ml-0 sm:pr-2">
          <div className="relative left-0 flex h-full w-3/4">
            <div className="group relative flex h-full w-12 items-center">
              <button
                type="button"
                aria-expanded="false"
                aria-label="Toggle sidenav"
                className="text-4xl text-gray-500 focus:outline-none"
                onClick={toggleSidebarHandler}
              >
                &#8801;
              </button>
            </div>
            <div className="group relative flex h-full w-36 items-center lg:w-64">
              <div className="absolute flex h-10 w-auto cursor-pointer items-center justify-center p-3 pr-2 text-sm uppercase text-gray-500 sm:hidden">
                <svg
                  fill="none"
                  className="relative h-5 w-5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <svg
                className="pointer-events-none absolute left-0 ml-4 hidden h-4 w-4 fill-current text-gray-500 group-hover:text-gray-400 sm:block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
              </svg>
              <input
                type="text"
                className="block w-full rounded-2xl bg-gray-100 py-1.5 pl-10 pr-4 leading-normal text-gray-400 opacity-90 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Search"
              />
              <div className="absolute right-0 mr-2 hidden h-auto rounded-2xl border border-gray-300 px-2 py-1 text-xs text-gray-400 md:block">
                +
              </div>
            </div>
          </div>

          <Dropdown Icon={ButtonAccountOwner} name="admin account" menus={MENUS} />
        </div>
      </div>
    </header>
  );
}

export default TopBar;
