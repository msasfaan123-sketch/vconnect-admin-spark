import { NavLink, useLocation } from "react-router-dom"
import {
  Home,
  Users,
  FileText,
  MessageSquare,
  Calendar,
  DollarSign,
  Settings,
  BarChart3,
  Building2,
  UserCheck
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Citizens", url: "/citizens", icon: Users },
  { title: "Governance", url: "/governance", icon: FileText },
  { title: "Communication", url: "/communication", icon: MessageSquare },
  { title: "Events", url: "/events", icon: Calendar },
  { title: "Finance", url: "/finance", icon: DollarSign },
  { title: "Services", url: "/services", icon: Building2 },
  { title: "Reports", url: "/reports", icon: BarChart3 },
]

const adminItems = [
  { title: "User Management", url: "/admin/users", icon: UserCheck },
  { title: "Settings", url: "/settings", icon: Settings },
]

export function AppSidebar() {
  const { collapsed } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/"
    }
    return currentPath.startsWith(path)
  }

  const getNavClass = (isActiveRoute: boolean) =>
    isActiveRoute 
      ? "bg-primary text-primary-foreground font-medium" 
      : "text-muted-foreground hover:bg-muted hover:text-foreground"

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible>
      <SidebarContent>
        <div className="px-3 py-2">
          <h2 className={`font-bold text-lg text-primary ${collapsed ? "hidden" : "block"}`}>
            V-Connect
          </h2>
          {collapsed && (
            <div className="text-primary font-bold text-xl text-center">V</div>
          )}
        </div>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "hidden" : "block"}>
            Main Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      end={item.url === "/"}
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup>
          <SidebarGroupLabel className={collapsed ? "hidden" : "block"}>
            Administration
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {adminItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}