"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Video, Users, CheckCircle } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function SmartClassPage() {
  const [selectedClass, setSelectedClass] = useState<{
    id: number
    title: string
    code: string
    lecturer: string
    time: string
    venue: string
    status: "upcoming" | "scheduled" | string
    students: number
    description: string
  } | null>(null)

  const classes = [
    {
      id: 1,
      title: "Data Structures & Algorithms",
      code: "CS 301",
      lecturer: "Dr. Adewale Johnson",
      time: "Today at 10:00 AM",
      venue: "Room 204",
      status: "upcoming",
      students: 45,
      description:
        "Learn fundamental data structures and their algorithms. Topics include arrays, linked lists, stacks, queues, trees, and graphs.",
    },
    {
      id: 2,
      title: "Database Management Systems",
      code: "CS 302",
      lecturer: "Prof. Sarah Okonkwo",
      time: "Today at 2:00 PM",
      venue: "Lab 3",
      status: "upcoming",
      students: 38,
      description: "Introduction to database design, SQL, normalization, and transaction management.",
    },
    {
      id: 3,
      title: "Web Development",
      code: "CS 303",
      lecturer: "Mrs. Mary Bello",
      time: "Tomorrow at 11:00 AM",
      venue: "Room 105",
      status: "scheduled",
      students: 52,
      description: "Learn modern web development with HTML, CSS, JavaScript, and React frameworks.",
    },
  ]

  const recordings = [
    { id: 1, title: "Introduction to Algorithms", course: "CS 301", date: "Mar 14, 2024", duration: "1h 45m" },
    { id: 2, title: "SQL Fundamentals", course: "CS 302", date: "Mar 13, 2024", duration: "2h 10m" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">SmartClass</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Interactive class sessions, live lectures, and recorded content
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Today's Classes</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">Scheduled</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">Total classes</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Attendance</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-xs text-muted-foreground">This semester</p>
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Upcoming Classes</h2>
        <div className="space-y-4">
          {classes.map((classItem) => (
            <Card
              key={classItem.id}
              className={classItem.status === "upcoming" ? "border-blue-600 bg-blue-50 dark:bg-blue-950/20" : ""}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg">{classItem.title}</CardTitle>
                    <CardDescription>
                      {classItem.code} • {classItem.lecturer}
                    </CardDescription>
                  </div>
                  {classItem.status === "upcoming" && (
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full whitespace-nowrap">
                      Live Soon
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{classItem.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>{classItem.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                    <span>Live Stream</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-col md:flex-row">
                  <Button className="bg-blue-600 hover:bg-blue-700 flex-1" disabled={classItem.status !== "upcoming"}>
                    <Video className="h-4 w-4 mr-2" />
                    Join Class
                  </Button>
                  <Button variant="outline" onClick={() => setSelectedClass(classItem)} className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recorded Lectures</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {recordings.map((recording) => (
            <Card key={recording.id} className="hover:shadow-lg transition-shadow flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <Video className="h-8 w-8 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-base">{recording.title}</CardTitle>
                    <CardDescription>{recording.course}</CardDescription>
                    <div className="flex items-center gap-4 mt-2 text-xs text-muted-foreground">
                      <span>{recording.date}</span>
                      <span>{recording.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-end">
                <Button variant="outline" className="w-full bg-transparent">
                  <Video className="h-4 w-4 mr-2" />
                  Watch Recording
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedClass} onOpenChange={() => setSelectedClass(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>{selectedClass?.title}</DialogTitle>
            <DialogDescription>{selectedClass?.code}</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p className="text-sm">{selectedClass?.description}</p>
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
            <div className="flex gap-2 flex-col md:flex-row">
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
