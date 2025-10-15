import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar role="admin" userName="Admin User" />
      <main className="flex-1 overflow-y-auto bg-background p-8">{children}</main>
    </div>
  )
}
