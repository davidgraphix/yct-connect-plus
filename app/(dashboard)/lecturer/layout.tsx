import type React from "react"
import { Sidebar } from "@/components/sidebar"

export default function LecturerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar role="lecturer" userName="Mr. Adewale Johnson" />
      <main className="flex-1 overflow-y-auto bg-background p-8">{children}</main>
    </div>
  )
}
