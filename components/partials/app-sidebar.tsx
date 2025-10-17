import {
  Box,
  ChartScatter,
  Home,
  Logs,
  LucideIcon,
  Settings,
  Users,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon;
}

const adminNav: NavItem[] = [
  {
    title: "Home",
    url: "/admin",
    icon: Home,
  },
  {
    title: "Users",
    url: "/admin/users",
    icon: Users,
  },
  {
    title: "Logs",
    url: "#",
    icon: Logs,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const hrNav: NavItem[] = [
  {
    title: "Home",
    url: "/hr",
    icon: Home,
  },
  {
    title: "Employees",
    url: "/hr/employees",
    icon: Users,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
];

const NavItem = ({ item }: { item: NavItem }) => {
  return (
    <SidebarMenuItem key={item.title}>
      <SidebarMenuButton asChild>
        <Link href={item.url}>
          {item.icon ? <item.icon /> : <Box />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
};

interface AppSidebarProps {
  userRole: "admin" | "hr" | "employee";
}

export default function AppSidebar({ userRole }: AppSidebarProps) {
  return (
    <Sidebar variant="inset">
      <SidebarHeader>
        <h2 className="flex items-center gap-2 text-xl font-medium uppercase">
          <ChartScatter />
          <span>Staff Portal</span>
        </h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="mt-10">
          <SidebarGroupContent>
            <SidebarMenu>
              {userRole === "admin" &&
                adminNav.map((item, index) => (
                  <NavItem item={item} key={index} />
                ))}

              {userRole === "hr" &&
                hrNav.map((item, index) => <NavItem item={item} key={index} />)}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
