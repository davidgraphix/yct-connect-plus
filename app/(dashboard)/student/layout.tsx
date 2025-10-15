import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar role="student" userName="David Olamide" />
      <main className="flex-1 overflow-y-auto bg-background p-8">{children}</main>
    </div>
  )
}
