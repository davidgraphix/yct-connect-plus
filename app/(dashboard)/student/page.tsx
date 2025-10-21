"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BookOpen, Calendar, Bell, Download, Eye, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function StudentDashboard() {
  const [selectedClass, setSelectedClass] = useState<any>(null)

  const nextClass = {
    title: "Computer Science 301 - Data Structures",
    code: "CS 301",
    lecturer: "Mr. Adewale Johnson",
    time: "Today at 10:00 AM",
    venue: "Room 204",
    students: 45,
    description: "Learn fundamental data structures including arrays, linked lists, stacks, and queues.",
  }

  const recentMaterials = [
    { title: "Introduction to Algorithms", course: "CS 301", lecturer: "Mr. Adewale", date: "2 days ago" },
    { title: "Database Management Systems", course: "CS 302", lecturer: "Dr. Okonkwo", date: "3 days ago" },
    { title: "Web Development Basics", course: "CS 303", lecturer: "Mrs. Bello", date: "5 days ago" },
  ]

  const handleDownload = (material: any) => {
    alert(`Downloading: ${material.title}`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Welcome, David 👋</h1>
        <p className="text-muted-foreground text-sm md:text-base">Here's what's happening with your courses today.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Materials</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">127</div>
            <p className="text-xs text-muted-foreground">Available for download</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Classes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Classes Attended</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3/5</div>
            <p className="text-xs text-muted-foreground">Today • 12/15 this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">New Announcements</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Unread messages</p>
          </CardContent>
        </Card>
      </div>

      {/* Next Class Banner */}
      <Card className="border-blue-600 bg-blue-50 dark:bg-blue-950/20">
        <CardHeader>
          <CardTitle className="text-lg">Next Class</CardTitle>
          <CardDescription>{nextClass.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium">{nextClass.lecturer}</p>
              <p className="text-sm text-muted-foreground">
                {nextClass.time} - {nextClass.venue}
              </p>
            </div>
            <Button
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto"
              onClick={() => setSelectedClass(nextClass)}
            >
              View Details
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Calendar className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-base">View Timetable</CardTitle>
              <CardDescription>Check your weekly schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0" asChild>
                <Link href="/student/smartclass">Open Timetable →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Download className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-base">Download Materials</CardTitle>
              <CardDescription>Access course notes and resources</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0" asChild>
                <Link href="/student/learning-hub">Browse Materials →</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Eye className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-base">View Announcements</CardTitle>
              <CardDescription>Stay updated with latest news</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="link" className="p-0" asChild>
                <Link href="/student/announcements">Read Announcements →</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Materials */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Materials</h2>
        <Card>
          <CardContent className="p-0">
            <div className="divide-y divide-border">
              {recentMaterials.map((material, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-start md:items-center justify-between p-4 hover:bg-muted/50 transition-colors gap-4"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm md:text-base">{material.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {material.course} • {material.lecturer}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <span className="text-sm text-muted-foreground">{material.date}</span>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDownload(material)}
                      className="w-full md:w-auto"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Dialog open={!!selectedClass} onOpenChange={() => setSelectedClass(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedClass?.title}</DialogTitle>
            <DialogDescription>{selectedClass?.code}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Lecturer</p>
                <p className="text-base font-semibold">{selectedClass?.lecturer}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Time</p>
                <p className="text-base font-semibold">{selectedClass?.time}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Venue</p>
                <p className="text-base font-semibold">{selectedClass?.venue}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground">Students</p>
                <p className="text-base font-semibold">{selectedClass?.students}</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-2">Description</p>
              <p className="text-sm">{selectedClass?.description}</p>
            </div>
            <div className="flex gap-2">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Join Class</Button>
              <Button variant="outline" onClick={() => setSelectedClass(null)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
