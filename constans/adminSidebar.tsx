import { ArticleIcon, CategoryIcon, DashboardIcon, UserIcon } from "@/assets/icons/admin";

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
];
