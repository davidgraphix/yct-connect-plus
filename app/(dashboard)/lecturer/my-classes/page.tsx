"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Calendar, FileText, Clock } from "lucide-react"

export default function MyClassesPage() {
  const classes = [
    {
      code: "CS 301",
      title: "Data Structures & Algorithms",
      level: "ND2",
      department: "Computer Science",
      students: 45,
      nextClass: "Mon 10:00 AM",
      venue: "Room 204",
    },
    {
      code: "CS 302",
      title: "Database Management Systems",
      level: "ND2",
      department: "Computer Science",
      students: 38,
      nextClass: "Tue 2:00 PM",
      venue: "Lab 3",
    },
    {
      code: "CS 303",
      title: "Web Development",
      level: "ND1",
      department: "Computer Science",
      students: 52,
      nextClass: "Wed 11:00 AM",
      venue: "Room 105",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">My Classes</h1>
        <p className="text-muted-foreground">Manage and view details of all your assigned courses</p>
      </div>

      <div className="grid gap-6">
        {classes.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-xl">
                    {course.code} - {course.title}
                  </CardTitle>
                  <CardDescription>
                    {course.level} • {course.department}
                  </CardDescription>
                </div>
                <Button>Manage</Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Students</p>
                    <p className="font-semibold">{course.students}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Next Class</p>
                    <p className="font-semibold text-sm">{course.nextClass}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Venue</p>
                    <p className="font-semibold">{course.venue}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Materials</p>
                    <p className="font-semibold">12 files</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  View Students
                </Button>
                <Button variant="outline" size="sm">
                  Upload Material
                </Button>
                <Button variant="outline" size="sm">
                  View Timetable
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
