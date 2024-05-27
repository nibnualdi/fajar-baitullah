"use client";

import { selectUtil, toggleSidebar } from "@/lib/features/util/utilSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

// The overlay will only be visible on small screens to emphasize the focus on Sidebar when it is open.
function Overlay() {
  const util = useAppSelector(selectUtil);
  const dispatch = useAppDispatch();

  const closeSidebar = () => {
    dispatch(toggleSidebar());
  };  
  return (
    <div
      onClick={closeSidebar}
      className={
        util.sidebarOpen
          ? "fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40 lg:hidden"
          : ""
      }
    />
  );
}

export default Overlay;
