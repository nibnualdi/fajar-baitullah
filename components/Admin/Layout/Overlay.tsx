"use client";

// The overlay will only be visible on small screens to emphasize the focus on Sidebar when it is open.
function Overlay() {
  // have not used redux yet
  // it should use redux for keeping the variable
  const sidebarOpen = false;
  const closeSidebar = () => {
    console.log("close sidebar");
  };
  return (
    <div
      onClick={closeSidebar}
      className={
        sidebarOpen ? "fixed left-0 top-0 z-30 h-screen w-screen bg-black opacity-40 lg:hidden" : ""
      }
    />
  );
}

export default Overlay;
