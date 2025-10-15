"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Megaphone, Plus, Edit, Trash2, Pin } from "lucide-react"
import { useState } from "react"

export default function AdminAnnouncementsPage() {
  const [announcements] = useState([
    {
      id: 1,
      title: "Mid-Semester Break Announcement",
      content: "Classes will resume on April 1st...",
      target: "All Students",
      author: "Admin",
      date: "Mar 15, 2024",
      pinned: true,
    },
    {
      id: 2,
      title: "New Course Registration Opens",
      content: "Registration for next semester begins...",
      target: "All Students",
      author: "Admin",
      date: "Mar 14, 2024",
      pinned: false,
    },
    {
      id: 3,
      title: "Lecturer Training Workshop",
      content: "All lecturers are invited to attend...",
      target: "All Lecturers",
      author: "Admin",
      date: "Mar 13, 2024",
      pinned: false,
    },
    {
      id: 4,
      title: "Computer Science Department Meeting",
      content: "Meeting scheduled for Friday...",
      target: "Computer Science",
      author: "Admin",
      date: "Mar 12, 2024",
      pinned: false,
    },
  ])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Announcements</h1>
          <p className="text-muted-foreground">Broadcast important messages to students, lecturers, or all users</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700">
          <Plus className="h-4 w-4 mr-2" />
          Create Announcement
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Announcements</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Posted</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pinned</CardTitle>
            <Pin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reach</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">Total users</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Announcements</CardTitle>
              <CardDescription>Manage and edit announcements</CardDescription>
            </div>
            <Input placeholder="Search announcements..." className="max-w-xs" />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.map((announcement) => (
              <Card key={announcement.id} className={announcement.pinned ? "border-purple-600" : ""}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {announcement.pinned && <Pin className="h-4 w-4 text-purple-600" />}
                        <h3 className="font-semibold">{announcement.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{announcement.content}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                          {announcement.target}
                        </span>
                        <span>By {announcement.author}</span>
                        <span>{announcement.date}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
