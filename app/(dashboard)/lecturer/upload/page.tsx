"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Upload, Edit, Trash2, FileText, Eye, X } from "lucide-react"
import { useState, useRef } from "react"

export default function UploadMaterialsPage() {
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: "Introduction to Algorithms",
      course: "CS 301",
      date: "Mar 15, 2024",
      status: "Approved",
      fileName: "algorithms.pdf",
      size: "2.5 MB",
    },
    {
      id: 2,
      title: "Database Design Principles",
      course: "CS 302",
      date: "Mar 14, 2024",
      status: "Pending",
      fileName: "database.pdf",
      size: "3.1 MB",
    },
    {
      id: 3,
      title: "Web Development Guide",
      course: "CS 303",
      date: "Mar 13, 2024",
      status: "Approved",
      fileName: "webdev.pdf",
      size: "4.2 MB",
    },
  ])

  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)
  const [previewMaterial, setPreviewMaterial] = useState<any>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setSelectedFile(file)
      // Create preview URL for images/PDFs
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    const file = e.dataTransfer.files[0]
    if (file) {
      setSelectedFile(file)
      const url = URL.createObjectURL(file)
      setPreviewUrl(url)
    }
  }

  const handleUploadMaterial = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!selectedFile) return

    const formData = new FormData(e.currentTarget)
    const newMaterial = {
      id: materials.length + 1,
      title: formData.get("title") as string,
      course: formData.get("course") as string,
      date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
      status: "Pending",
      fileName: selectedFile.name,
      size: `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB`,
    }

    setMaterials([newMaterial, ...materials])
    setSelectedFile(null)
    setPreviewUrl(null)
    const toastContainer = document.createElement("div")
    toastContainer.innerHTML = `<div class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg">Material uploaded successfully!</div>`
    document.body.appendChild(toastContainer)
    setTimeout(() => toastContainer.remove(), 3000)
    e.currentTarget.reset()
  }

  const handleDeleteMaterial = (id: number) => {
    setMaterials(materials.filter((m) => m.id !== id))
  }

  const handlePreviewMaterial = (material: any) => {
    setPreviewMaterial(material)
    setIsPreviewOpen(true)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Upload Materials</h1>
        <p className="text-sm text-muted-foreground">
          Share lecture notes, slides, and academic resources with students
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Upload New Material</CardTitle>
          <CardDescription>Fill in the details and upload your file</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleUploadMaterial}>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="course">Select Course</Label>
                  <Select name="course" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="CS 301">CS 301 - Data Structures</SelectItem>
                      <SelectItem value="CS 302">CS 302 - Database Management</SelectItem>
                      <SelectItem value="CS 303">CS 303 - Web Development</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title">Title of Material</Label>
                  <Input id="title" name="title" placeholder="e.g., Introduction to Algorithms" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Brief description of the material..."
                    className="min-h-[100px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Tags (optional)</Label>
                  <Input id="tags" name="tags" placeholder="algorithms, sorting, data structures" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Upload File</Label>
                  <div
                    className="border-2 border-dashed rounded-lg p-8 text-center hover:border-blue-600 transition-colors cursor-pointer"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                    <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                    <p className="text-xs text-muted-foreground">PDF, DOCX, ZIP, PPT (max 50MB)</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      className="hidden"
                      onChange={handleFileChange}
                      accept=".pdf,.docx,.zip,.ppt,.pptx"
                    />
                  </div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
                  <p className="text-sm font-medium mb-2">Preview</p>
                  {selectedFile ? (
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-blue-600" />
                          <span className="text-sm font-medium">{selectedFile.name}</span>
                        </div>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setSelectedFile(null)
                            setPreviewUrl(null)
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Size: {(selectedFile.size / (1024 * 1024)).toFixed(2)} MB
                      </p>
                    </div>
                  ) : (
                    <p className="text-xs text-muted-foreground">No file selected</p>
                  )}
                </div>

                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={!selectedFile}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Material
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>My Uploaded Materials</CardTitle>
          <CardDescription>Manage your uploaded files</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="border rounded-lg overflow-x-auto">
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
                        <Button variant="ghost" size="sm" onClick={() => handlePreviewMaterial(material)}>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600"
                          onClick={() => handleDeleteMaterial(material.id)}
                        >
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

      <Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Material Preview</DialogTitle>
            <DialogDescription>View material details</DialogDescription>
          </DialogHeader>
          {previewMaterial && (
            <div className="space-y-4">
              <div>
                <Label>Title</Label>
                <p className="text-lg font-semibold">{previewMaterial.title}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label>Course</Label>
                  <p>{previewMaterial.course}</p>
                </div>
                <div>
                  <Label>Upload Date</Label>
                  <p>{previewMaterial.date}</p>
                </div>
                <div>
                  <Label>File Name</Label>
                  <p>{previewMaterial.fileName}</p>
                </div>
                <div>
                  <Label>File Size</Label>
                  <p>{previewMaterial.size}</p>
                </div>
              </div>
              <div>
                <Label>Status</Label>
                <p>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      previewMaterial.status === "Approved"
                        ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                        : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                    }`}
                  >
                    {previewMaterial.status}
                  </span>
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
