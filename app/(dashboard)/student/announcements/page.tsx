"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { useState } from "react"

export default function StudentAnnouncementsPage() {
  const [filter, setFilter] = useState("all")

  const announcements = [
    {
      id: 1,
      title: "Mid-Semester Break Announcement",
      publisher: "Admin",
      date: "Mar 15, 2024",
      category: "System",
      description: "Classes will resume on April 1st. All students are advised to...",
      read: false,
    },
    {
      id: 2,
      title: "CS 301 Assignment Deadline Extended",
      publisher: "Dr. Adewale",
      date: "Mar 14, 2024",
      category: "Lecturer",
      description: "The deadline for the algorithms assignment has been extended to...",
      read: false,
    },
    {
      id: 3,
      title: "New Course Registration Opens",
      publisher: "Admin",
      date: "Mar 13, 2024",
      category: "Department",
      description: "Registration for next semester begins on March 20th...",
      read: true,
    },
    {
      id: 4,
      title: "Computer Lab Maintenance",
      publisher: "Admin",
      date: "Mar 12, 2024",
      category: "System",
      description: "Lab 3 will be closed for maintenance from March 16-18...",
      read: true,
    },
  ]

  const filteredAnnouncements =
    filter === "all" ? announcements : announcements.filter((a) => a.category.toLowerCase() === filter)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Announcements</h1>
        <p className="text-muted-foreground">View global, departmental, and class-level announcements</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Filter Announcements</CardTitle>
            <div className="flex gap-2">
              <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
                All
              </Button>
              <Button
                variant={filter === "department" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("department")}
              >
                Department
              </Button>
              <Button
                variant={filter === "lecturer" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("lecturer")}
              >
                Lecturer
              </Button>
              <Button
                variant={filter === "system" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("system")}
              >
                System
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <Card key={announcement.id} className={!announcement.read ? "border-blue-600" : ""}>
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    {!announcement.read && <div className="h-2 w-2 rounded-full bg-blue-600" />}
                    <h3 className="font-semibold text-lg">{announcement.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{announcement.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span
                      className={`px-2 py-1 rounded-full font-medium ${
                        announcement.category === "System"
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          : announcement.category === "Lecturer"
                            ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                            : "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                      }`}
                    >
                      {announcement.category}
                    </span>
                    <span>By {announcement.publisher}</span>
                    <span>{announcement.date}</span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
