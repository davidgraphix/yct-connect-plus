"use client"

import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, Search } from "lucide-react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function StudentAnnouncementsPage() {
  const [filter, setFilter] = useState("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedAnnouncement, setSelectedAnnouncement] = useState<any>(null)

  const announcements = [
    {
      id: 1,
      title: "Mid-Semester Break Announcement",
      publisher: "Admin",
      date: "Mar 15, 2024",
      category: "System",
      description:
        "Classes will resume on April 1st. All students are advised to use this period for revision and catch up on any missed classes.",
      fullContent:
        "Classes will resume on April 1st. All students are advised to use this period for revision and catch up on any missed classes. The library will remain open during the break period. Please ensure you complete all pending assignments before the break ends.",
      read: false,
    },
    {
      id: 2,
      title: "CS 301 Assignment Deadline Extended",
      publisher: "Dr. Adewale",
      date: "Mar 14, 2024",
      category: "Lecturer",
      description:
        "The deadline for the algorithms assignment has been extended to March 25th due to technical issues.",
      fullContent:
        "The deadline for the algorithms assignment has been extended to March 25th due to technical issues. Students who have already submitted can resubmit if they wish to improve their work. The new submission link will be available on the course portal.",
      read: false,
    },
    {
      id: 3,
      title: "New Course Registration Opens",
      publisher: "Admin",
      date: "Mar 13, 2024",
      category: "Department",
      description: "Registration for next semester begins on March 20th. All students must register before March 31st.",
      fullContent:
        "Registration for next semester begins on March 20th. All students must register before March 31st. Late registration will incur a penalty fee. Please visit the registration portal to select your courses.",
      read: true,
    },
    {
      id: 4,
      title: "Computer Lab Maintenance",
      publisher: "Admin",
      date: "Mar 12, 2024",
      category: "System",
      description:
        "Lab 3 will be closed for maintenance from March 16-18. Please use Lab 1 or Lab 2 during this period.",
      fullContent:
        "Lab 3 will be closed for maintenance from March 16-18. Please use Lab 1 or Lab 2 during this period. We apologize for any inconvenience. The lab will be fully operational by March 19th.",
      read: true,
    },
  ]

  const filteredAnnouncements = announcements.filter((a) => {
    const matchesFilter = filter === "all" || a.category.toLowerCase() === filter.toLowerCase()
    const matchesSearch =
      a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Announcements</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          View global, departmental, and class-level announcements
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search announcements..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant={filter === "all" ? "default" : "outline"} size="sm" onClick={() => setFilter("all")}>
                All
              </Button>
              <Button
                variant={filter === "department" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("department")}
              >
                Department
              </Button>
              <Button
                variant={filter === "lecturer" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("lecturer")}
              >
                Lecturer
              </Button>
              <Button
                variant={filter === "system" ? "default" : "outline"}
                size="sm"
                onClick={() => setFilter("system")}
              >
                System
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="space-y-4">
        {filteredAnnouncements.map((announcement) => (
          <Card key={announcement.id} className={!announcement.read ? "border-blue-600" : ""}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row items-start justify-between gap-4">
                <div className="flex-1 w-full">
                  <div className="flex items-center gap-3 mb-2">
                    {!announcement.read && <div className="h-2 w-2 rounded-full bg-blue-600 flex-shrink-0" />}
                    <h3 className="font-semibold text-lg">{announcement.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{announcement.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                    <span
                      className={`px-2 py-1 rounded-full font-medium ${
                        announcement.category === "System"
                          ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                          : announcement.category === "Lecturer"
                            ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                            : "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                      }`}
                    >
                      {announcement.category}
                    </span>
                    <span>By {announcement.publisher}</span>
                    <span>{announcement.date}</span>
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedAnnouncement(announcement)}
                  className="w-full md:w-auto whitespace-nowrap"
                >
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredAnnouncements.length === 0 && (
        <Card className="p-12 text-center">
          <p className="text-muted-foreground">No announcements found.</p>
          <Button
            variant="link"
            onClick={() => {
              setSearchQuery("")
              setFilter("all")
            }}
          >
            Clear filters
          </Button>
        </Card>
      )}

      <Dialog open={!!selectedAnnouncement} onOpenChange={() => setSelectedAnnouncement(null)}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{selectedAnnouncement?.title}</DialogTitle>
            <DialogDescription>
              {selectedAnnouncement?.category} • By {selectedAnnouncement?.publisher} • {selectedAnnouncement?.date}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div
              className={`px-3 py-1 rounded-full font-medium w-fit ${
                selectedAnnouncement?.category === "System"
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                  : selectedAnnouncement?.category === "Lecturer"
                    ? "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                    : "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
              }`}
            >
              {selectedAnnouncement?.category}
            </div>
            <p className="text-sm leading-relaxed">{selectedAnnouncement?.fullContent}</p>
            <div className="flex gap-2 flex-col md:flex-row">
              <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Mark as Read</Button>
              <Button variant="outline" onClick={() => setSelectedAnnouncement(null)}>
                Close
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
