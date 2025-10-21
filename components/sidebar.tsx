"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { GraduationCap, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SidebarProps {
  role: "student" | "lecturer" | "admin"
  userName: string
}

const sidebarConfig = {
  student: [
    { href: "/student", label: "Dashboard", icon: "🏠" },
    { href: "/student/learning-hub", label: "Learning Hub", icon: "📚" },
    { href: "/student/smartclass", label: "SmartClass", icon: "🗓️" },
    { href: "/student/announcements", label: "Announcements", icon: "📢" },
    { href: "/student/settings", label: "Settings", icon: "⚙️" },
  ],
  lecturer: [
    { href: "/lecturer", label: "Dashboard", icon: "🏠" },
    { href: "/lecturer/upload", label: "Upload Material", icon: "📤" },
    { href: "/lecturer/announcements", label: "Announcements", icon: "📢" },
    { href: "/lecturer/classes", label: "My Classes", icon: "🗓️" },
    { href: "/lecturer/analytics", label: "Analytics", icon: "📊" },
    { href: "/lecturer/settings", label: "Settings", icon: "⚙️" },
  ],
  admin: [
    { href: "/admin", label: "Dashboard", icon: "🏠" },
    { href: "/admin/users", label: "User Management", icon: "👥" },
    { href: "/admin/departments", label: "Departments", icon: "🏛️" },
    { href: "/admin/materials", label: "Materials", icon: "📚" },
    { href: "/admin/announcements", label: "Announcements", icon: "📢" },
    { href: "/admin/reports", label: "Reports", icon: "📊" },
    { href: "/admin/settings", label: "Settings", icon: "⚙️" },
  ],
}

export function Sidebar({ role, userName }: SidebarProps) {
  const pathname = usePathname()
  const navItems = sidebarConfig[role]

  return (
    <div className="hidden md:flex h-screen w-64 flex-col border-r border-border bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <GraduationCap className="h-8 w-8 text-blue-600" />
        <span className="text-lg font-bold">YCT Connect+</span>
      </div>

      {/* User Info */}
      <div className="border-b border-border px-6 py-4">
        <p className="text-sm text-muted-foreground">Welcome back,</p>
        <p className="font-semibold">{userName}</p>
        <p className="text-xs text-muted-foreground capitalize">{role}</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href || pathname.startsWith(item.href + "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive ? "bg-blue-600 text-white" : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <span className="text-lg">{item.icon}</span>
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="border-t border-border p-4">
        <Button variant="ghost" className="w-full justify-start gap-2" asChild>
          <Link href="/api/auth/signout">
            <LogOut className="h-4 w-4" />
            Logout
          </Link>
        </Button>
      </div>
    </div>
  )
}
