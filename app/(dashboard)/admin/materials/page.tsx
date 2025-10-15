"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, Eye, CheckCircle, XCircle, Trash2 } from "lucide-react"
import { useState } from "react"

export default function MaterialsManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const materials = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      course: "CS 301",
      uploadedBy: "Dr. Adewale",
      department: "Computer Science",
      date: "Mar 15, 2024",
      status: "Approved",
    },
    {
      id: 2,
      title: "Database Design Principles",
      course: "CS 302",
      uploadedBy: "Prof. Okonkwo",
      department: "Computer Science",
      date: "Mar 14, 2024",
      status: "Pending",
    },
    {
      id: 3,
      title: "Web Development Guide",
      course: "CS 303",
      uploadedBy: "Mrs. Bello",
      department: "Computer Science",
      date: "Mar 13, 2024",
      status: "Approved",
    },
    {
      id: 4,
      title: "Circuit Analysis Notes",
      course: "EE 201",
      uploadedBy: "Engr. Okoro",
      department: "Engineering",
      date: "Mar 12, 2024",
      status: "Pending",
    },
    {
      id: 5,
      title: "Marketing Fundamentals",
      course: "BA 101",
      uploadedBy: "Mr. Eze",
      department: "Business Admin",
      date: "Mar 11, 2024",
      status: "Approved",
    },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Materials Management</h1>
        <p className="text-muted-foreground">Monitor and manage all materials uploaded by lecturers</p>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Materials</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">All time uploads</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,180</div>
            <p className="text-xs text-muted-foreground">Live materials</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">47</div>
            <p className="text-xs text-muted-foreground">New uploads</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Materials</CardTitle>
          <CardDescription>Review, approve, or reject uploaded materials</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, course, or lecturer..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select className="px-4 py-2 border rounded-lg bg-background">
                <option>All Departments</option>
                <option>Computer Science</option>
                <option>Engineering</option>
                <option>Business Admin</option>
              </select>
              <select className="px-4 py-2 border rounded-lg bg-background">
                <option>All Status</option>
                <option>Approved</option>
                <option>Pending</option>
                <option>Rejected</option>
              </select>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Title</th>
                    <th className="text-left p-4 font-medium">Course</th>
                    <th className="text-left p-4 font-medium">Uploaded By</th>
                    <th className="text-left p-4 font-medium">Department</th>
                    <th className="text-left p-4 font-medium">Date</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {materials.map((material) => (
                    <tr key={material.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{material.title}</td>
                      <td className="p-4 text-sm">{material.course}</td>
                      <td className="p-4 text-sm">{material.uploadedBy}</td>
                      <td className="p-4 text-sm">{material.department}</td>
                      <td className="p-4 text-sm text-muted-foreground">{material.date}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            material.status === "Approved"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                          }`}
                        >
                          {material.status}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm" title="Preview">
                            <Eye className="h-4 w-4" />
                          </Button>
                          {material.status === "Pending" && (
                            <>
                              <Button variant="ghost" size="sm" className="text-green-600" title="Approve">
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm" className="text-red-600" title="Reject">
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          <Button variant="ghost" size="sm" className="text-red-600" title="Delete">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
