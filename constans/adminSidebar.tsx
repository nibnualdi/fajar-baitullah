import { ArticleIcon, CategoryIcon, DashboardIcon, ReminderIcon, UserIcon } from "@/assets/icons/admin";

/** if speedDial is true, then the route's included to the flying button on bottom right side (speed dial)  */
export const routes = [
  {
    title: "Dashboard",
    icon: <DashboardIcon />,
    link: "/admin/dashboard",
  },
  {
    title: "Article",
    icon: <ArticleIcon />,
    link: "/admin/activity",
    speedDial: true,
  },
  // {
  //   title: "User",
  //   icon: <UserIcon />,
  //   link: "/admin/user",
  //   speedDial: true,
  // },
  {
    title: "Category",
    icon: <CategoryIcon />,
    link: "/admin/category",
    speedDial: true,
  },
  {
    title: "Schedule",
    icon: <ReminderIcon />,
    link: "/admin/schedule",
  },
];
