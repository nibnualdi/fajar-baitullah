import React from "react";
import UserCard from "./UserCard";

const UserCardsContainer = () => {
  return (
    <table className="w-full leading-normal text-black">
      <thead>
        <tr>
          <th
            scope="col"
            className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
          >
            User
          </th>
          <th
            scope="col"
            className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
          >
            Role
          </th>
          <th
            scope="col"
            className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
          >
            Created_at
          </th>
          <th
            scope="col"
            className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
          >
            status
          </th>
          <th
            scope="col"
            className="border-b border-gray-200 px-5 py-3 text-left text-sm font-normal uppercase"
          />
        </tr>
      </thead>
      <tbody className="text-black">
        <UserCard />
      </tbody>
    </table>
  );
};

export default UserCardsContainer;
