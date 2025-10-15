"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Video, Users, CheckCircle } from "lucide-react"

export default function SmartClassPage() {
  const classes = [
    {
      title: "Data Structures & Algorithms",
      code: "CS 301",
      lecturer: "Dr. Adewale Johnson",
      time: "Today at 10:00 AM",
      venue: "Room 204",
      status: "upcoming",
      students: 45,
    },
    {
      title: "Database Management Systems",
      code: "CS 302",
      lecturer: "Prof. Sarah Okonkwo",
      time: "Today at 2:00 PM",
      venue: "Lab 3",
      status: "upcoming",
      students: 38,
    },
    {
      title: "Web Development",
      code: "CS 303",
      lecturer: "Mrs. Mary Bello",
      time: "Tomorrow at 11:00 AM",
      venue: "Room 105",
      status: "scheduled",
      students: 52,
    },
  ]

  const recordings = [
    { title: "Introduction to Algorithms", course: "CS 301", date: "Mar 14, 2024", duration: "1h 45m" },
    { title: "SQL Fundamentals", course: "CS 302", date: "Mar 13, 2024", duration: "2h 10m" },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">SmartClass</h1>
        <p className="text-muted-foreground">Interactive class sessions, live lectures, and recorded content</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
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
          {classes.map((classItem, index) => (
            <Card
              key={index}
              className={classItem.status === "upcoming" ? "border-blue-600 bg-blue-50 dark:bg-blue-950/20" : ""}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{classItem.title}</CardTitle>
                    <CardDescription>
                      {classItem.code} • {classItem.lecturer}
                    </CardDescription>
                  </div>
                  {classItem.status === "upcoming" && (
                    <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">Live Soon</span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-4 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{classItem.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{classItem.venue}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{classItem.students} students</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Video className="h-4 w-4 text-muted-foreground" />
                    <span>Live Stream</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700" disabled={classItem.status !== "upcoming"}>
                    <Video className="h-4 w-4 mr-2" />
                    Join Class
                  </Button>
                  <Button variant="outline">View Details</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recorded Lectures</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {recordings.map((recording, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
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
              <CardContent>
                <Button variant="outline" className="w-full bg-transparent">
                  <Video className="h-4 w-4 mr-2" />
                  Watch Recording
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
