"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, FileText, Download, Heart, Eye } from "lucide-react"
import { useState } from "react"

export default function LearningHubPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [departmentFilter, setDepartmentFilter] = useState("all")
  const [levelFilter, setLevelFilter] = useState("all")
  const [semesterFilter, setSemesterFilter] = useState("all")
  const [favorites, setFavorites] = useState<number[]>([])
  const [previewMaterial, setPreviewMaterial] = useState<{ id: number; title: string; course: string; lecturer: string; date: string; type: string; downloads: number; department: string; level: string; semester: string; color: string; size: string } | null>(null)

  const allMaterials = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      course: "CS 301",
      lecturer: "Dr. Adewale",
      date: "Mar 15, 2024",
      type: "PDF",
      downloads: 45,
      department: "Computer Science",
      level: "HND1",
      semester: "First Semester",
      color: "bg-red-100 dark:bg-red-900 text-red-600",
      size: "2.4 MB",
    },
    {
      id: 2,
      title: "Database Design Principles",
      course: "CS 302",
      lecturer: "Prof. Okonkwo",
      date: "Mar 14, 2024",
      type: "PPT",
      downloads: 38,
      department: "Computer Science",
      level: "HND1",
      semester: "First Semester",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-600",
      size: "5.1 MB",
    },
    {
      id: 3,
      title: "Web Development Guide",
      course: "CS 303",
      lecturer: "Mrs. Bello",
      date: "Mar 13, 2024",
      type: "PDF",
      downloads: 52,
      department: "Computer Science",
      level: "HND2",
      semester: "Second Semester",
      color: "bg-red-100 dark:bg-red-900 text-red-600",
      size: "3.8 MB",
    },
    {
      id: 4,
      title: "React Tutorial Video",
      course: "CS 303",
      lecturer: "Mrs. Bello",
      date: "Mar 12, 2024",
      type: "Video",
      downloads: 67,
      department: "Computer Science",
      level: "HND2",
      semester: "Second Semester",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-600",
      size: "145 MB",
    },
    {
      id: 5,
      title: "SQL Practice Exercises",
      course: "CS 302",
      lecturer: "Prof. Okonkwo",
      date: "Mar 11, 2024",
      type: "DOC",
      downloads: 41,
      department: "Computer Science",
      level: "ND2",
      semester: "First Semester",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-600",
      size: "1.2 MB",
    },
    {
      id: 6,
      title: "Engineering Mathematics",
      course: "ENG 201",
      lecturer: "Dr. Ibrahim",
      date: "Mar 10, 2024",
      type: "PDF",
      downloads: 55,
      department: "Engineering",
      level: "ND1",
      semester: "First Semester",
      color: "bg-red-100 dark:bg-red-900 text-red-600",
      size: "4.2 MB",
    },
  ]

  const filteredMaterials = allMaterials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.course.toLowerCase().includes(searchQuery.toLowerCase()) ||
      material.lecturer.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesDepartment = departmentFilter === "all" || material.department === departmentFilter
    const matchesLevel = levelFilter === "all" || material.level === levelFilter
    const matchesSemester = semesterFilter === "all" || material.semester === semesterFilter

    return matchesSearch && matchesDepartment && matchesLevel && matchesSemester
  })

  const toggleFavorite = (id: number) => {
    setFavorites((prev) => (prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]))
  }

  const handleDownload = (material: { id: number; title: string; course: string; lecturer?: string; date: string; type?: string; downloads?: number; department?: string; level?: string; semester?: string; color?: string; size: string }) => {
    alert(`Downloading: ${material.title} (${material.size})`)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Learning Hub</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Access uploaded course materials, notes, and assignments from lecturers
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by course name or lecturer..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <Select value={departmentFilter} onValueChange={setDepartmentFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Departments" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Departments</SelectItem>
                  <SelectItem value="Computer Science">Computer Science</SelectItem>
                  <SelectItem value="Engineering">Engineering</SelectItem>
                  <SelectItem value="Business Admin">Business Admin</SelectItem>
                </SelectContent>
              </Select>

              <Select value={levelFilter} onValueChange={setLevelFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Levels" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Levels</SelectItem>
                  <SelectItem value="ND1">ND1</SelectItem>
                  <SelectItem value="ND2">ND2</SelectItem>
                  <SelectItem value="HND1">HND1</SelectItem>
                  <SelectItem value="HND2">HND2</SelectItem>
                </SelectContent>
              </Select>

              <Select value={semesterFilter} onValueChange={setSemesterFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All Semesters" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  <SelectItem value="First Semester">First Semester</SelectItem>
                  <SelectItem value="Second Semester">Second Semester</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Showing {filteredMaterials.length} of {allMaterials.length} materials
        </p>
        {favorites.length > 0 && <p className="text-sm text-muted-foreground">{favorites.length} favorites</p>}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredMaterials.map((material) => (
          <Card key={material.id} className="hover:shadow-lg transition-shadow flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className={`h-12 w-12 rounded-lg ${material.color} flex items-center justify-center`}>
                  <FileText className="h-6 w-6" />
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleFavorite(material.id)}
                  className={favorites.includes(material.id) ? "text-red-500" : ""}
                >
                  <Heart className={`h-4 w-4 ${favorites.includes(material.id) ? "fill-current" : ""}`} />
                </Button>
              </div>
              <CardTitle className="text-base mt-3">{material.title}</CardTitle>
              <CardDescription>{material.course}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 flex-1 flex flex-col">
              <div className="space-y-1 text-sm flex-1">
                <p className="text-muted-foreground">Lecturer: {material.lecturer}</p>
                <p className="text-muted-foreground">Uploaded: {material.date}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${material.color}`}>
                    {material.type}
                  </span>
                  <span className="text-xs text-muted-foreground">{material.size}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                  onClick={() => handleDownload(material)}
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </Button>
                <Button size="sm" variant="outline" onClick={() => setPreviewMaterial(material)}>
                  <Eye className="h-4 w-4 mr-2" />
                  Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredMaterials.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No materials found matching your filters.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("")
              setDepartmentFilter("all")
              setLevelFilter("all")
              setSemesterFilter("all")
            }}
          >
            Clear filters
          </Button>
        </Card>
      )}

      <Dialog open={!!previewMaterial} onOpenChange={() => setPreviewMaterial(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{previewMaterial?.title}</DialogTitle>
            <DialogDescription>
              {previewMaterial?.course} • {previewMaterial?.lecturer}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
              <FileText className="h-16 w-16 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium">Department</p>
                <p className="text-muted-foreground">{previewMaterial?.department}</p>
              </div>
              <div>
                <p className="font-medium">Level</p>
                <p className="text-muted-foreground">{previewMaterial?.level}</p>
              </div>
              <div>
                <p className="font-medium">Semester</p>
                <p className="text-muted-foreground">{previewMaterial?.semester}</p>
              </div>
              <div>
                <p className="font-medium">Type</p>
                <p className="text-muted-foreground">{previewMaterial?.type}</p>
              </div>
              <div>
                <p className="font-medium">File Size</p>
                <p className="text-muted-foreground">{previewMaterial?.size}</p>
              </div>
              <div>
                <p className="font-medium">Downloads</p>
                <p className="text-muted-foreground">{previewMaterial?.downloads}</p>
              </div>
            </div>
            <div className="flex gap-2 flex-col md:flex-row">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700" onClick={() => handleDownload(previewMaterial!)}>
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
              <Button variant="outline" onClick={() => setPreviewMaterial(null)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
