"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Building2, Users, GraduationCap, FileText, Plus } from "lucide-react"

export default function DepartmentsPage() {
  const departments = [
    {
      name: "Computer Science",
      faculty: "Science & Technology",
      students: 450,
      lecturers: 14,
      materials: 450,
      hod: "Dr. Adewale Johnson",
    },
    {
      name: "Engineering",
      faculty: "Engineering",
      students: 380,
      lecturers: 12,
      materials: 320,
      hod: "Prof. Sarah Okonkwo",
    },
    {
      name: "Business Administration",
      faculty: "Management Sciences",
      students: 320,
      lecturers: 10,
      materials: 280,
      hod: "Mr. John Eze",
    },
    {
      name: "Mass Communication",
      faculty: "Arts & Humanities",
      students: 290,
      lecturers: 8,
      materials: 210,
      hod: "Mrs. Mary Bello",
    },
    {
      name: "Accounting",
      faculty: "Management Sciences",
      students: 310,
      lecturers: 9,
      materials: 250,
      hod: "Dr. Ahmed Ibrahim",
    },
    {
      name: "Electrical Engineering",
      faculty: "Engineering",
      students: 270,
      lecturers: 11,
      materials: 300,
      hod: "Engr. Chidi Okoro",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Department Management</h1>
          <p className="text-muted-foreground">Manage YABATECH departments and link them to lecturers & students</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="h-4 w-4 mr-2" />
          Add Department
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((dept, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <CardDescription className="text-xs">{dept.faculty}</CardDescription>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Students
                  </span>
                  <span className="font-semibold">{dept.students}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    Lecturers
                  </span>
                  <span className="font-semibold">{dept.lecturers}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <FileText className="h-4 w-4" />
                    Materials
                  </span>
                  <span className="font-semibold">{dept.materials}</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="text-xs text-muted-foreground mb-1">Head of Department</p>
                <p className="text-sm font-medium">{dept.hod}</p>
              </div>

              <Button className="w-full bg-transparent" variant="outline">
                Manage Department
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
