import { ArticleIcon, DashboardIcon, UserIcon } from "@/assets/icons/admin";

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
  },
  {
    title: "User",
    icon: <UserIcon />,
    link: "/admin/user",
  },
];
