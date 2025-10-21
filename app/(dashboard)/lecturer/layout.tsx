import type React from "react"
import { Sidebar } from "@/components/sidebar"
import { MobileSidebar } from "@/components/mobile-sidebar"

export default function LecturerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      <Sidebar role="lecturer" userName="Mr. Adewale Johnson" />
      <div className="flex flex-1 flex-col">
        <header className="flex h-16 items-center gap-4 border-b border-border bg-card px-4 md:hidden">
          <MobileSidebar role="lecturer" userName="Mr. Adewale Johnson" />
          <h1 className="text-lg font-semibold">YCT Connect+</h1>
        </header>
        <main className="flex-1 overflow-y-auto bg-background p-4 md:p-8">{children}</main>
      </div>
    </div>
  )
}
