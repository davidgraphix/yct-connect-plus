"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Bell, Users, Download } from "lucide-react"
import { useState } from "react"
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from "recharts"

export default function LecturerAnalyticsPage() {
  const [dateRange, setDateRange] = useState("30days")

  const downloadsData = [
    { name: "Algorithms", downloads: 45 },
    { name: "Database", downloads: 38 },
    { name: "Web Dev", downloads: 52 },
    { name: "Networks", downloads: 28 },
    { name: "Security", downloads: 35 },
  ]

  const engagementData = [
    { name: "CS 301", value: 35, fill: "#3b82f6" },
    { name: "CS 302", value: 28, fill: "#8b5cf6" },
    { name: "CS 303", value: 37, fill: "#ec4899" },
  ]

  const activityData = [
    { date: "Mon", views: 120, downloads: 45 },
    { date: "Tue", views: 150, downloads: 52 },
    { date: "Wed", views: 130, downloads: 48 },
    { date: "Thu", views: 180, downloads: 65 },
    { date: "Fri", views: 160, downloads: 58 },
    { date: "Sat", views: 90, downloads: 35 },
    { date: "Sun", views: 110, downloads: 42 },
  ]

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Analytics</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Insights into your classes, uploads, and student engagement
        </p>
      </div>

      {/* Date Range Filter */}
      <div className="flex flex-wrap gap-2">
        {[
          { value: "7days", label: "Last 7 Days" },
          { value: "30days", label: "Last 30 Days" },
          { value: "3months", label: "Last 3 Months" },
          { value: "year", label: "Last Year" },
        ].map((option) => (
          <Button
            key={option.value}
            variant={dateRange === option.value ? "default" : "outline"}
            size="sm"
            onClick={() => setDateRange(option.value)}
            className="text-xs sm:text-sm"
          >
            {option.label}
          </Button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Materials Uploaded</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">Total files</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Announcements</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Posted</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Students Reached</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">Unique students</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Avg Downloads</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">Per material</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Downloads per Material</CardTitle>
            <CardDescription>Most popular uploads</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={downloadsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="downloads" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Engagement per Course</CardTitle>
            <CardDescription>Student activity breakdown</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Weekly Activity</CardTitle>
          <CardDescription>Views and downloads over time</CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={activityData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="views" stroke="#3b82f6" />
              <Line type="monotone" dataKey="downloads" stroke="#8b5cf6" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Recent Activity</CardTitle>
          <CardDescription>Latest student interactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              "Student John downloaded Web Design Material",
              "10 students viewed new announcement",
              "Student Mary commented on Database assignment",
              "15 students attended live class session",
              "Student David downloaded Algorithms notes",
            ].map((activity, index) => (
              <div key={index} className="flex items-start gap-3 text-xs sm:text-sm p-3 bg-muted/30 rounded-lg">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                <p>{activity}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
