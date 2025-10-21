"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { TrendingUp, Users, FileText, Download } from "lucide-react"
import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { exportToPDF } from "@/lib/pdf-export"
import { useToast, ToastContainer } from "@/components/ui/toast"

export default function ReportsPage() {
  const { materials, announcements, users } = useAppStore()
  const { toasts, addToast, removeToast } = useToast()
  const [dateRange, setDateRange] = useState("30")

  const handleExportPDF = () => {
    const content = `
      <h2>YCT Connect+ Analytics Report</h2>
      <p>Date Range: Last ${dateRange} days</p>
      
      <h3>Key Metrics</h3>
      <table>
        <tr><td>Total Materials</td><td>${materials.length}</td></tr>
        <tr><td>Approved Materials</td><td>${materials.filter((m) => m.status === "approved").length}</td></tr>
        <tr><td>Pending Materials</td><td>${materials.filter((m) => m.status === "pending").length}</td></tr>
        <tr><td>Total Announcements</td><td>${announcements.length}</td></tr>
        <tr><td>Total Users</td><td>${users.length}</td></tr>
      </table>
    `
    exportToPDF("YCT Connect+ Analytics Report", content, "analytics-report")
    addToast({
      title: "PDF Exported",
      description: "The report has been exported successfully.",
      type: "success",
    })
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold">Reports & Analytics</h1>
          <p className="text-muted-foreground">Gain insights into platform usage and performance</p>
        </div>
        <div className="flex flex-col md:flex-row gap-2">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-background"
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 3 months</option>
            <option value="365">Last year</option>
          </select>
          <Button variant="outline" onClick={handleExportPDF}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Materials</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{materials.length}</div>
            <p className="text-xs text-muted-foreground">All materials</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{materials.filter((m) => m.status === "approved").length}</div>
            <p className="text-xs text-muted-foreground">Live materials</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Users</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{users.length}</div>
            <p className="text-xs text-muted-foreground">Active users</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Announcements</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{announcements.length}</div>
            <p className="text-xs text-muted-foreground">Total posted</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Materials by Status</CardTitle>
            <CardDescription>Distribution of materials</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  status: "Approved",
                  count: materials.filter((m) => m.status === "approved").length,
                  color: "bg-green-500",
                },
                {
                  status: "Pending",
                  count: materials.filter((m) => m.status === "pending").length,
                  color: "bg-yellow-500",
                },
                {
                  status: "Rejected",
                  count: materials.filter((m) => m.status === "rejected").length,
                  color: "bg-red-500",
                },
              ].map((item) => (
                <div key={item.status} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.status}</span>
                    <span className="text-muted-foreground">{item.count}</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${item.color}`}
                      style={{ width: `${(item.count / materials.length) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Top Departments</CardTitle>
            <CardDescription>By material uploads</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {Array.from(
                new Map(
                  materials.map((m) => [m.department, materials.filter((x) => x.department === m.department).length]),
                ),
              )
                .sort((a, b) => b[1] - a[1])
                .slice(0, 5)
                .map(([dept, count]) => (
                  <div key={dept} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <p className="font-medium text-sm">{dept}</p>
                    <div className="text-right">
                      <p className="font-bold text-lg">{count}</p>
                      <p className="text-xs text-muted-foreground">uploads</p>
                    </div>
                  </div>
                ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  )
}
