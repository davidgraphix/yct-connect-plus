"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, Download, Heart, Eye } from "lucide-react"
import { useState } from "react"

export default function LearningHubPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const materials = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      course: "CS 301",
      lecturer: "Dr. Adewale",
      date: "Mar 15, 2024",
      type: "PDF",
      downloads: 45,
      color: "bg-red-100 dark:bg-red-900 text-red-600",
    },
    {
      id: 2,
      title: "Database Design Principles",
      course: "CS 302",
      lecturer: "Prof. Okonkwo",
      date: "Mar 14, 2024",
      type: "PPT",
      downloads: 38,
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600",
    },
    {
      id: 3,
      title: "Web Development Guide",
      course: "CS 303",
      lecturer: "Mrs. Bello",
      date: "Mar 13, 2024",
      type: "PDF",
      downloads: 52,
      color: "bg-red-100 dark:bg-red-900 text-red-600",
    },
    {
      id: 4,
      title: "React Tutorial Video",
      course: "CS 303",
      lecturer: "Mrs. Bello",
      date: "Mar 12, 2024",
      type: "Video",
      downloads: 67,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600",
    },
    {
      id: 5,
      title: "SQL Practice Exercises",
      course: "CS 302",
      lecturer: "Prof. Okonkwo",
      date: "Mar 11, 2024",
      type: "DOC",
      downloads: 41,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Learning Hub</h1>
        <p className="text-muted-foreground">Access uploaded course materials, notes, and assignments from lecturers</p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by course name or lecturer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <select className="px-4 py-2 border rounded-lg bg-background">
              <option>All Departments</option>
              <option>Computer Science</option>
              <option>Engineering</option>
            </select>
            <select className="px-4 py-2 border rounded-lg bg-background">
              <option>All Levels</option>
              <option>ND1</option>
              <option>ND2</option>
              <option>HND1</option>
              <option>HND2</option>
            </select>
            <select className="px-4 py-2 border rounded-lg bg-background">
              <option>All Semesters</option>
              <option>First Semester</option>
              <option>Second Semester</option>
            </select>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {materials.map((material) => (
          <Card key={material.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`h-12 w-12 rounded-lg ${material.color} flex items-center justify-center`}>
                  <FileText className="h-6 w-6" />
                </div>
                <Button variant="ghost" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
              </div>
              <CardTitle className="text-base mt-3">{material.title}</CardTitle>
              <CardDescription>{material.course}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1 text-sm">
                <p className="text-muted-foreground">Lecturer: {material.lecturer}</p>
                <p className="text-muted-foreground">Uploaded: {material.date}</p>
                <div className="flex items-center gap-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${material.color}`}>
                    {material.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{material.downloads} downloads</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 bg-blue-600 hover:bg-blue-700">
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline">
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
