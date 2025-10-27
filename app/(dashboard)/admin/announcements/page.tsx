"use client"

import type React from "react"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Megaphone, Plus, Edit, Trash2, Pin, X } from "lucide-react"
import { useToast, ToastContainer } from "@/components/ui/toast"

export default function AdminAnnouncementsPage() {
  const { announcements, addAnnouncement, updateAnnouncement, deleteAnnouncement } = useAppStore()
  const { toasts, addToast, removeToast } = useToast()
  const [searchTerm, setSearchTerm] = useState("")
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    message: "",
    target: "all",
    targetAudience: "",
  })

  const filtered = announcements.filter(
    (a) =>
      a.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.message.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.title || !formData.message) {
      addToast({
        title: "Error",
        description: "Please fill in all required fields",
        type: "error",
      })
      return
    }

    if (editingId) {
      updateAnnouncement(editingId, {
        title: formData.title,
        message: formData.message,
        target: formData.target as "all" | "specific",
        targetAudience: formData.targetAudience,
        updatedAt: new Date().toISOString().split("T")[0],
      })
      addToast({
        title: "Announcement Updated",
        description: "The announcement has been updated successfully.",
        type: "success",
      })
    } else {
      addAnnouncement({
        id: Math.random().toString(36).substr(2, 9),
        title: formData.title,
        message: formData.message,
        author: "Admin",
        authorRole: "admin",
        target: formData.target as "all" | "specific",
        targetAudience: formData.targetAudience,
        createdAt: new Date().toISOString().split("T")[0],
        status: "published",
      })
      addToast({
        title: "Announcement Created",
        description: "The announcement has been created successfully.",
        type: "success",
      })
    }

    setFormData({ title: "", message: "", target: "all", targetAudience: "" })
    setEditingId(null)
    setShowCreateModal(false)
  }
  interface Announcement {
    id: string
    title: string
    message: string
    author: string
    authorRole: string
    target: "all" | "specific"
    targetAudience?: string
    createdAt: string
    status: "published" | "draft"
  }

  const handleEdit = (announcement: Announcement) => {
    setFormData({
      title: announcement.title,
      message: announcement.message,
      target: announcement.target,
      targetAudience: announcement.targetAudience || "",
    })
    setEditingId(announcement.id)
    setShowCreateModal(true)
  }

  const handleDelete = (id: string) => {
    deleteAnnouncement(id)
    addToast({
      title: "Announcement Deleted",
      description: "The announcement has been deleted successfully.",
      type: "success",
    })
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Announcements</h1>
          <p className="text-muted-foreground">Broadcast important messages to students, lecturers, or all users</p>
        </div>
        <Button className="bg-purple-600 hover:bg-purple-700" onClick={() => setShowCreateModal(true)}>
          <Plus className="h-4 w-4 mr-2" />
          Create Announcement
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Announcements</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{announcements.length}</div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Published</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{announcements.filter((a) => a.status === "published").length}</div>
            <p className="text-xs text-muted-foreground">Active</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Drafts</CardTitle>
            <Pin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{announcements.filter((a) => a.status === "draft").length}</div>
            <p className="text-xs text-muted-foreground">Pending</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Reach</CardTitle>
            <Megaphone className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">Total users</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <CardTitle>All Announcements</CardTitle>
              <CardDescription>Manage and edit announcements</CardDescription>
            </div>
            <Input
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="max-w-xs"
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filtered.map((announcement) => (
              <Card key={announcement.id} className="border">
                <CardContent className="p-4">
                  <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="font-semibold">{announcement.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{announcement.message}</p>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                        <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full">
                          {announcement.target === "all" ? "All Users" : announcement.targetAudience}
                        </span>
                        <span>By {announcement.author}</span>
                        <span>{announcement.createdAt}</span>
                        <span
                          className={`px-2 py-1 rounded-full ${
                            announcement.status === "published"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300"
                          }`}
                        >
                          {announcement.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button variant="ghost" size="sm" onClick={() => handleEdit(announcement)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-red-600"
                        onClick={() => handleDelete(announcement.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {showCreateModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <Card className="w-full max-w-2xl">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>{editingId ? "Edit Announcement" : "Create Announcement"}</CardTitle>
              <button
                onClick={() => {
                  setShowCreateModal(false)
                  setEditingId(null)
                  setFormData({ title: "", message: "", target: "all", targetAudience: "" })
                }}
                className="text-muted-foreground hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-sm font-medium">Title</label>
                  <Input
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Announcement title"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Announcement message"
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                    rows={4}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Target Audience</label>
                  <select
                    value={formData.target}
                    onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                    className="w-full px-3 py-2 border rounded-lg bg-background"
                  >
                    <option value="all">All Users</option>
                    <option value="specific">Specific Group</option>
                  </select>
                </div>
                {formData.target === "specific" && (
                  <div>
                    <label className="text-sm font-medium">Specific Audience</label>
                    <Input
                      value={formData.targetAudience}
                      onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                      placeholder="e.g., Computer Science - Level 100"
                    />
                  </div>
                )}
                <div className="flex gap-2 justify-end">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setShowCreateModal(false)
                      setEditingId(null)
                      setFormData({ title: "", message: "", target: "all", targetAudience: "" })
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" className="bg-purple-600 hover:bg-purple-700">
                    {editingId ? "Update" : "Create"} Announcement
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      )}

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  )
}
