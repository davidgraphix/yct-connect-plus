"use client"

import { useState, useMemo, ReactNode } from "react"
import { useAppStore } from "@/lib/store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, FileText, Eye, CheckCircle, XCircle, Trash2, Download } from "lucide-react"
import { useToast, ToastContainer } from "@/components/ui/toast"
import { useSearchFilter } from "@/hooks/use-search-filter"

export default function MaterialsManagementPage() {
  const { materials, approveMaterial, rejectMaterial, deleteMaterial } = useAppStore()
  const { toasts, addToast, removeToast } = useToast()
  const [selectedDept, setSelectedDept] = useState<string>("")
  const [selectedStatus, setSelectedStatus] = useState<string>("")
  const [previewMaterial, setPreviewMaterial] = useState<{
    title: string
    downloads: ReactNode
    fileSize: ReactNode
    level: ReactNode
    department: ReactNode
    id: string
    course: string
    lecturer: ReactNode

  } | null>(null)

  const { filtered, searchTerm, setSearchTerm } = useSearchFilter({
    items: materials,
    searchFields: ["title", "course", "lecturer"],
  })

  const finalFiltered = useMemo(() => {
    return filtered.filter((m) => {
      if (selectedDept && m.department !== selectedDept) return false
      if (selectedStatus && m.status !== selectedStatus) return false
      return true
    })
  }, [filtered, selectedDept, selectedStatus])

  const departments = [...new Set(materials.map((m) => m.department))]
  const statuses = ["pending", "approved", "rejected"]

  const handleApprove = (id: string) => {
    approveMaterial(id)
    addToast({
      title: "Material Approved",
      description: "The material has been approved successfully.",
      type: "success",
    })
  }

  const handleReject = (id: string) => {
    rejectMaterial(id)
    addToast({
      title: "Material Rejected",
      description: "The material has been rejected.",
      type: "error",
    })
  }

  const handleDelete = (id: string) => {
    deleteMaterial(id)
    addToast({
      title: "Material Deleted",
      description: "The material has been deleted successfully.",
      type: "success",
    })
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
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
            <div className="text-2xl font-bold">{materials.length}</div>
            <p className="text-xs text-muted-foreground">All time uploads</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{materials.filter((m) => m.status === "pending").length}</div>
            <p className="text-xs text-muted-foreground">Awaiting review</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{materials.filter((m) => m.status === "approved").length}</div>
            <p className="text-xs text-muted-foreground">Live materials</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{materials.reduce((sum, m) => sum + m.downloads, 0)}</div>
            <p className="text-xs text-muted-foreground">All materials</p>
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
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by title, course, or lecturer..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-background"
              >
                <option value="">All Departments</option>
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept}
                  </option>
                ))}
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-4 py-2 border rounded-lg bg-background"
              >
                <option value="">All Status</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            <div className="border rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium text-sm">Title</th>
                    <th className="text-left p-4 font-medium text-sm">Course</th>
                    <th className="text-left p-4 font-medium text-sm">Lecturer</th>
                    <th className="text-left p-4 font-medium text-sm">Department</th>
                    <th className="text-left p-4 font-medium text-sm">Date</th>
                    <th className="text-left p-4 font-medium text-sm">Status</th>
                    <th className="text-left p-4 font-medium text-sm">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {finalFiltered.map((material) => (
                    <tr key={material.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium text-sm">{material.title}</td>
                      <td className="p-4 text-sm">{material.course}</td>
                      <td className="p-4 text-sm">{material.lecturer}</td>
                      <td className="p-4 text-sm">{material.department}</td>
                      <td className="p-4 text-sm text-muted-foreground">{material.uploadedAt}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            material.status === "approved"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : material.status === "pending"
                                ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {material.status.charAt(0).toUpperCase() + material.status.slice(1)}
                        </span>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            title="Preview"
                            onClick={() => setPreviewMaterial(material)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          {material.status === "pending" && (
                            <>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-green-600"
                                title="Approve"
                                onClick={() => handleApprove(material.id)}
                              >
                                <CheckCircle className="h-4 w-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-red-600"
                                title="Reject"
                                onClick={() => handleReject(material.id)}
                              >
                                <XCircle className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-red-600"
                            title="Delete"
                            onClick={() => handleDelete(material.id)}
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
          </div>
        </CardContent>
      </Card>

      {previewMaterial && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle>{previewMaterial.title}</CardTitle>
              <button
                onClick={() => setPreviewMaterial(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                ✕
              </button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Course</p>
                  <p className="font-medium">{previewMaterial.course}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Lecturer</p>
                  <p className="font-medium">{previewMaterial.lecturer}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Department</p>
                  <p className="font-medium">{previewMaterial.department}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Level</p>
                  <p className="font-medium">{previewMaterial.level}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">File Size</p>
                  <p className="font-medium">{previewMaterial.fileSize} MB</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Downloads</p>
                  <p className="font-medium">{previewMaterial.downloads}</p>
                </div>
              </div>
              <Button onClick={() => setPreviewMaterial(null)} className="w-full">
                Close
              </Button>
            </CardContent>
          </Card>
        </div>
      )}

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  )
}
