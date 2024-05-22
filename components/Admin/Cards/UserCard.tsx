import Image from "next/image";
import React from "react";

const UserCard = () => {
  return (
    <tr>
      <td className="border-b border-gray-200 p-5 text-sm">
        <div className="flex items-center">
          <div className="shrink-0">
            <a href="#" className="relative block">
              <Image
                alt="profil"
                src="https://i1.wp.com/hechingerreport.org/wp-content/uploads/2018/04/Jennifer-Heller-Buckley-PHOTO1.jpg?ssl=1"
                width={0}
                height={0}
                sizes="100%"
                style={{ width: "40px", height: "40px" }}
                className="mx-auto h-10 w-10 rounded-full object-cover"
              />
            </a>
          </div>
          <div className="ml-3">
            <p className="whitespace-nowrap">Jean marc</p>
          </div>
        </div>
      </td>
      <td className="border-b border-gray-200 p-5 text-sm">
        <p className="whitespace-nowrap">Admin</p>
      </td>
      <td className="border-b border-gray-200 p-5 text-sm">
        <p className="whitespace-nowrap">12/09/2020</p>
      </td>
      <td className="border-b border-gray-200 p-5 text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold leading-tight">
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded-full bg-green-200 opacity-50"
          />
          <span className="relative">active</span>
        </span>
      </td>
      <td className="border-b border-gray-200 p-5 text-sm">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default UserCard;
