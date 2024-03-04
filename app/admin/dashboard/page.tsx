"use client";

import React from "react";
import { selectUtil, toggleSidebar } from "@/lib/features/util/utilSlice";
import { useAppSelector, useAppDispatch } from "@/lib/hooks";

const page = () => {
  const util = useAppSelector(selectUtil);
  const dispatch = useAppDispatch();
  return (
    <>
      {console.log(util, "util") as any}
      <button onClick={()=>dispatch(toggleSidebar())}>toggleSidebar</button>
      <div>page lalal</div>
    </>
  );
};

export default page;
