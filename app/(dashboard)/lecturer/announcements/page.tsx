"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Bell, Send, Edit, Trash2, Paperclip, Calendar, Users } from "lucide-react"

interface Announcement {
  id: string
  title: string
  message: string
  target: string
  date: string
  attachments?: string[]
  notificationSent: boolean
}

export default function LecturerAnnouncementsPage() {
  const [announcements, setAnnouncements] = useState<Announcement[]>([
    {
      id: "1",
      title: "Assignment Deadline Extended",
      message: "The deadline for Assignment 3 has been extended to next Friday.",
      target: "Computer Science - 300 Level",
      date: "2025-01-15",
      notificationSent: true,
    },
    {
      id: "2",
      title: "Class Rescheduled",
      message: "Tomorrow's class has been moved to 2 PM instead of 10 AM.",
      target: "All Students in CSC 301",
      date: "2025-01-14",
      notificationSent: true,
    },
    {
      id: "3",
      title: "New Study Materials Available",
      message: "I've uploaded new lecture notes for Chapter 5. Please review before next class.",
      target: "Computer Science Department",
      date: "2025-01-13",
      attachments: ["chapter5-notes.pdf"],
      notificationSent: false,
    },
  ])

  const [formData, setFormData] = useState({
    title: "",
    message: "",
    target: "all-course",
    sendNotification: true,
    attachments: [] as File[],
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newAnnouncement: Announcement = {
      id: Date.now().toString(),
      title: formData.title,
      message: formData.message,
      target: getTargetLabel(formData.target),
      date: new Date().toISOString().split("T")[0],
      notificationSent: formData.sendNotification,
      attachments: formData.attachments.map((f) => f.name),
    }

    setAnnouncements([newAnnouncement, ...announcements])

    const toastContainer = document.createElement("div")
    toastContainer.innerHTML = `<div class="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg">Announcement posted successfully!</div>`
    document.body.appendChild(toastContainer)
    setTimeout(() => toastContainer.remove(), 3000)

    setFormData({
      title: "",
      message: "",
      target: "all-course",
      sendNotification: true,
      attachments: [],
    })
  }

  const getTargetLabel = (value: string) => {
    const labels: Record<string, string> = {
      "all-course": "All Students in Course",
      "100-level": "100 Level Students",
      "200-level": "200 Level Students",
      "300-level": "300 Level Students",
      "400-level": "400 Level Students",
      "cs-dept": "Computer Science Department",
      "eng-dept": "Engineering Department",
    }
    return labels[value] || value
  }

  const handleDelete = (id: string) => {
    setAnnouncements(announcements.filter((a) => a.id !== id))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, attachments: Array.from(e.target.files) })
    }
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold">Announcements</h1>
        <p className="text-muted-foreground">Share updates and reminders with your students</p>
      </div>

      {/* Create New Announcement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5 text-blue-600" />
            Create New Announcement
          </CardTitle>
          <CardDescription>Share important updates with your students</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Assignment Deadline Extended"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>

            {/* Message Body */}
            <div className="space-y-2">
              <Label htmlFor="message">Message *</Label>
              <Textarea
                id="message"
                placeholder="Write your announcement message here..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                className="resize-none"
              />
              <p className="text-xs text-muted-foreground">
                Tip: Be clear and concise. Include any important dates or action items.
              </p>
            </div>

            {/* Target Audience */}
            <div className="space-y-2">
              <Label htmlFor="target">Target Audience *</Label>
              <Select
                id="target"
                value={formData.target}
                onChange={(e) => setFormData({ ...formData, target: e.target.value })}
              >
                <option value="all-course">All Students in Course</option>
                <option value="100-level">100 Level Students</option>
                <option value="200-level">200 Level Students</option>
                <option value="300-level">300 Level Students</option>
                <option value="400-level">400 Level Students</option>
                <option value="cs-dept">Computer Science Department</option>
                <option value="eng-dept">Engineering Department</option>
              </Select>
            </div>

            {/* Attachments */}
            <div className="space-y-2">
              <Label htmlFor="attachments">Attachments (Optional)</Label>
              <div className="flex items-center gap-2">
                <Input id="attachments" type="file" multiple onChange={handleFileChange} className="cursor-pointer" />
                <Paperclip className="h-4 w-4 text-muted-foreground" />
              </div>
              {formData.attachments.length > 0 && (
                <div className="text-sm text-muted-foreground">{formData.attachments.length} file(s) selected</div>
              )}
            </div>

            {/* Send Notification Toggle */}
            <div className="flex items-center justify-between rounded-lg border border-border p-4">
              <div className="space-y-0.5">
                <Label htmlFor="notification" className="text-base">
                  Send Push Notification
                </Label>
                <p className="text-sm text-muted-foreground">
                  Students will receive an instant notification on their devices
                </p>
              </div>
              <Switch
                id="notification"
                checked={formData.sendNotification}
                onCheckedChange={(checked) => setFormData({ ...formData, sendNotification: checked })}
              />
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full" size="lg">
              <Send className="mr-2 h-4 w-4" />
              Post Announcement
            </Button>
          </form>
        </CardContent>
      </Card>

      {/* Previous Announcements */}
      <Card>
        <CardHeader>
          <CardTitle>Previous Announcements</CardTitle>
          <CardDescription>View and manage your past announcements</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {announcements.length === 0 ? (
              <div className="py-12 text-center text-muted-foreground">
                <Bell className="mx-auto mb-4 h-12 w-12 opacity-20" />
                <p>No announcements yet</p>
                <p className="text-sm">Create your first announcement above</p>
              </div>
            ) : (
              announcements.map((announcement) => (
                <div
                  key={announcement.id}
                  className="flex items-start justify-between rounded-lg border border-border p-4 transition-colors hover:bg-muted/50"
                >
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <h3 className="font-semibold">{announcement.title}</h3>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                          onClick={() => handleDelete(announcement.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground">{announcement.message}</p>

                    <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {announcement.target}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(announcement.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </div>
                      {announcement.notificationSent && (
                        <div className="flex items-center gap-1 text-green-600">
                          <Bell className="h-3 w-3" />
                          Notification Sent
                        </div>
                      )}
                      {announcement.attachments && announcement.attachments.length > 0 && (
                        <div className="flex items-center gap-1">
                          <Paperclip className="h-3 w-3" />
                          {announcement.attachments.length} attachment(s)
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
