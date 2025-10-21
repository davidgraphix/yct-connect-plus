"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Users, Calendar, FileText, Clock, Eye, UploadIcon, CalendarDays } from "lucide-react"
import { useState } from "react"

export default function MyClassesPage() {
  const [isManageDialogOpen, setIsManageDialogOpen] = useState(false)
  const [selectedClass, setSelectedClass] = useState<any>(null)
  const [activeTab, setActiveTab] = useState<"students" | "materials" | "timetable">("students")

  const classes = [
    {
      code: "CS 301",
      title: "Data Structures & Algorithms",
      level: "ND2",
      department: "Computer Science",
      students: 45,
      nextClass: "Mon 10:00 AM",
      venue: "Room 204",
      materials: 12,
      studentList: [
        { id: 1, name: "John Doe", matric: "ND2/CS/001", attendance: "95%" },
        { id: 2, name: "Jane Smith", matric: "ND2/CS/002", attendance: "92%" },
        { id: 3, name: "Mike Johnson", matric: "ND2/CS/003", attendance: "88%" },
      ],
      timetable: [
        { day: "Monday", time: "10:00 AM - 12:00 PM", venue: "Room 204" },
        { day: "Wednesday", time: "2:00 PM - 4:00 PM", venue: "Lab 3" },
      ],
    },
    {
      code: "CS 302",
      title: "Database Management Systems",
      level: "ND2",
      department: "Computer Science",
      students: 38,
      nextClass: "Tue 2:00 PM",
      venue: "Lab 3",
      materials: 10,
      studentList: [
        { id: 1, name: "Sarah Williams", matric: "ND2/CS/015", attendance: "97%" },
        { id: 2, name: "David Brown", matric: "ND2/CS/016", attendance: "90%" },
      ],
      timetable: [
        { day: "Tuesday", time: "2:00 PM - 4:00 PM", venue: "Lab 3" },
        { day: "Thursday", time: "10:00 AM - 12:00 PM", venue: "Lab 3" },
      ],
    },
    {
      code: "CS 303",
      title: "Web Development",
      level: "ND1",
      department: "Computer Science",
      students: 52,
      nextClass: "Wed 11:00 AM",
      venue: "Room 105",
      materials: 15,
      studentList: [
        { id: 1, name: "Emily Davis", matric: "ND1/CS/020", attendance: "93%" },
        { id: 2, name: "Chris Wilson", matric: "ND1/CS/021", attendance: "89%" },
      ],
      timetable: [
        { day: "Wednesday", time: "11:00 AM - 1:00 PM", venue: "Room 105" },
        { day: "Friday", time: "9:00 AM - 11:00 AM", venue: "Lab 2" },
      ],
    },
  ]

  const handleManageClass = (course: any) => {
    setSelectedClass(course)
    setIsManageDialogOpen(true)
    setActiveTab("students")
  }

  const handleMaterialUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const toastContainer = document.createElement("div")
      toastContainer.innerHTML = `<div class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg">Material uploaded to ${selectedClass?.code}!</div>`
      document.body.appendChild(toastContainer)
      setTimeout(() => toastContainer.remove(), 3000)
    }
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">My Classes</h1>
        <p className="text-sm text-muted-foreground">Manage and view details of all your assigned courses</p>
      </div>

      <div className="grid gap-6">
        {classes.map((course, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                <div>
                  <CardTitle className="text-lg sm:text-xl">
                    {course.code} - {course.title}
                  </CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {course.level} • {course.department}
                  </CardDescription>
                </div>
                <Button onClick={() => handleManageClass(course)} className="w-full sm:w-auto">
                  Manage
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Students</p>
                    <p className="font-semibold text-sm sm:text-base">{course.students}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Next Class</p>
                    <p className="font-semibold text-xs sm:text-sm">{course.nextClass}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center flex-shrink-0">
                    <Clock className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Venue</p>
                    <p className="font-semibold text-xs sm:text-sm">{course.venue}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center flex-shrink-0">
                    <FileText className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-muted-foreground">Materials</p>
                    <p className="font-semibold text-xs sm:text-sm">{course.materials} files</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm bg-transparent"
                  onClick={() => {
                    setSelectedClass(course)
                    setActiveTab("students")
                    setIsManageDialogOpen(true)
                  }}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Students
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm bg-transparent"
                  onClick={() => {
                    setSelectedClass(course)
                    setActiveTab("materials")
                    setIsManageDialogOpen(true)
                  }}
                >
                  <UploadIcon className="h-4 w-4 mr-2" />
                  Upload Material
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs sm:text-sm bg-transparent"
                  onClick={() => {
                    setSelectedClass(course)
                    setActiveTab("timetable")
                    setIsManageDialogOpen(true)
                  }}
                >
                  <CalendarDays className="h-4 w-4 mr-2" />
                  View Timetable
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isManageDialogOpen} onOpenChange={setIsManageDialogOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl">
              {selectedClass?.code} - {selectedClass?.title}
            </DialogTitle>
            <DialogDescription className="text-xs sm:text-sm">
              {selectedClass?.level} • {selectedClass?.department}
            </DialogDescription>
          </DialogHeader>

          {selectedClass && (
            <div className="space-y-4">
              {/* Tab Navigation */}
              <div className="flex gap-2 border-b overflow-x-auto">
                <button
                  className={`px-3 sm:px-4 py-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === "students"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("students")}
                >
                  Students
                </button>
                <button
                  className={`px-3 sm:px-4 py-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === "materials"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("materials")}
                >
                  Materials
                </button>
                <button
                  className={`px-3 sm:px-4 py-2 font-medium text-sm transition-colors whitespace-nowrap ${
                    activeTab === "timetable"
                      ? "border-b-2 border-blue-600 text-blue-600"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => setActiveTab("timetable")}
                >
                  Timetable
                </button>
              </div>

              {/* Tab Content */}
              {activeTab === "students" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <h3 className="font-semibold text-sm sm:text-base">Student List ({selectedClass.students})</h3>
                    <Button size="sm" variant="outline" className="text-xs sm:text-sm bg-transparent">
                      Export CSV
                    </Button>
                  </div>
                  <div className="border rounded-lg overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-2 sm:p-3 font-medium text-xs sm:text-sm">Name</th>
                          <th className="text-left p-2 sm:p-3 font-medium text-xs sm:text-sm">Matric No</th>
                          <th className="text-left p-2 sm:p-3 font-medium text-xs sm:text-sm">Attendance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        {selectedClass.studentList.map((student: any) => (
                          <tr key={student.id} className="hover:bg-muted/30">
                            <td className="p-2 sm:p-3 text-xs sm:text-sm">{student.name}</td>
                            <td className="p-2 sm:p-3 text-xs sm:text-sm text-muted-foreground">{student.matric}</td>
                            <td className="p-2 sm:p-3">
                              <span className="px-2 py-1 bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300 rounded-full text-xs font-medium">
                                {student.attendance}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeTab === "materials" && (
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                    <h3 className="font-semibold text-sm sm:text-base">Course Materials ({selectedClass.materials})</h3>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm w-full sm:w-auto">
                      <UploadIcon className="h-4 w-4 mr-2" />
                      Upload New
                    </Button>
                  </div>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Upload lecture notes, slides, and resources for this course
                  </p>
                  <div
                    className="border-2 border-dashed rounded-lg p-6 sm:p-8 text-center cursor-pointer hover:border-blue-600 transition-colors"
                    onClick={() => document.getElementById(`file-upload-${selectedClass.code}`)?.click()}
                  >
                    <UploadIcon className="h-10 sm:h-12 w-10 sm:w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-xs sm:text-sm font-medium mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PDF, DOCX, ZIP, PPT (max 50MB)</p>
                    <input
                      id={`file-upload-${selectedClass.code}`}
                      type="file"
                      className="hidden"
                      onChange={handleMaterialUpload}
                      accept=".pdf,.docx,.zip,.ppt,.pptx"
                    />
                  </div>
                </div>
              )}

              {activeTab === "timetable" && (
                <div className="space-y-4">
                  <h3 className="font-semibold text-sm sm:text-base">Class Schedule</h3>
                  <div className="space-y-3">
                    {selectedClass.timetable.map((schedule: any, idx: number) => (
                      <Card key={idx}>
                        <CardContent className="p-3 sm:p-4">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div className="flex items-center gap-3 w-full">
                              <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                                <CalendarDays className="h-5 w-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-semibold text-sm">{schedule.day}</p>
                                <p className="text-xs sm:text-sm text-muted-foreground">{schedule.time}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-xs sm:text-sm font-medium">{schedule.venue}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
