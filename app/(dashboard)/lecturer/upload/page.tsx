"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Upload, Edit, Trash2 } from "lucide-react"
import { useState } from "react"

export default function UploadMaterialsPage() {
  const [materials] = useState([
    { id: 1, title: "Introduction to Algorithms", course: "CS 301", date: "Mar 15, 2024", status: "Approved" },
    { id: 2, title: "Database Design Principles", course: "CS 302", date: "Mar 14, 2024", status: "Pending" },
    { id: 3, title: "Web Development Guide", course: "CS 303", date: "Mar 13, 2024", status: "Approved" },
  ])

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Upload Materials</h1>
        <p className="text-muted-foreground">Share lecture notes, slides, and academic resources with students</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Material</CardTitle>
          <CardDescription>Fill in the details and upload your file</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Select Course</label>
                <select className="w-full px-4 py-2 border rounded-lg bg-background">
                  <option>CS 301 - Data Structures</option>
                  <option>CS 302 - Database Management</option>
                  <option>CS 303 - Web Development</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Title of Material</label>
                <Input placeholder="e.g., Introduction to Algorithms" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Description</label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg bg-background min-h-[100px]"
                  placeholder="Brief description of the material..."
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Tags (optional)</label>
                <Input placeholder="algorithms, sorting, data structures" />
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Upload File</label>
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-600 transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground">PDF, DOCX, ZIP, PPT (max 50MB)</p>
                </div>
              </div>

              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                <p className="text-sm font-medium mb-2">Preview</p>
                <p className="text-xs text-muted-foreground">No file selected</p>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700">
                <Upload className="h-4 w-4 mr-2" />
                Upload Material
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Uploaded Materials</CardTitle>
          <CardDescription>Manage your uploaded files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-muted/50">
                <tr>
                  <th className="text-left p-4 font-medium">Title</th>
                  <th className="text-left p-4 font-medium">Course</th>
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
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
