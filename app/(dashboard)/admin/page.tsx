import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Users,
  GraduationCap,
  FileText,
  Bell,
  TrendingUp,
  AlertCircle,
  Building2,
  UserPlus,
  Megaphone,
} from "lucide-react"

export default function AdminDashboard() {
  const departmentStats = [
    { name: "Computer Science", students: 450, color: "bg-blue-500" },
    { name: "Engineering", students: 380, color: "bg-green-500" },
    { name: "Business Admin", students: 320, color: "bg-purple-500" },
    { name: "Mass Communication", students: 290, color: "bg-orange-500" },
  ]

  const recentActivities = [
    { action: "Lecturer John uploaded material", time: "5 mins ago", type: "upload" },
    { action: "New student registered", time: "12 mins ago", type: "user" },
    { action: "Admin posted announcement", time: "1 hour ago", type: "announcement" },
    { action: "Material approved by admin", time: "2 hours ago", type: "approval" },
    { action: "Lecturer Sarah created class", time: "3 hours ago", type: "class" },
    { action: "Student downloaded material", time: "4 hours ago", type: "download" },
    { action: "New lecturer registered", time: "5 hours ago", type: "user" },
    { action: "Department updated", time: "6 hours ago", type: "department" },
    { action: "Announcement sent to students", time: "7 hours ago", type: "announcement" },
    { action: "User profile updated", time: "8 hours ago", type: "user" },
  ]

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-muted-foreground">System overview and management controls.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Lecturers</CardTitle>
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Active this semester</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Materials Uploaded</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">Total resources</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Announcements</CardTitle>
            <Bell className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">89</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Department Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              Department Stats
            </CardTitle>
            <CardDescription>Number of students per department</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {departmentStats.map((dept, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{dept.name}</span>
                  <span className="text-muted-foreground">{dept.students} students</span>
                </div>
                <div className="h-2 bg-muted rounded-full overflow-hidden">
                  <div className={`h-full ${dept.color}`} style={{ width: `${(dept.students / 450) * 100}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Activities Feed */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activities</CardTitle>
            <CardDescription>Last 10 user actions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {recentActivities.map((activity, index) => (
                <div key={index} className="flex items-start gap-3 text-sm">
                  <div className="h-2 w-2 rounded-full bg-blue-500 mt-1.5 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-xs text-muted-foreground">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pending Approvals */}
      <Card className="border-orange-600 bg-orange-50 dark:bg-orange-950/20">
        <CardHeader>
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-orange-600" />
            <CardTitle className="text-lg">Pending Approvals</CardTitle>
          </div>
          <CardDescription>Items requiring your attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">New lecturer registrations</span>
              <span className="font-semibold">3</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Material uploads pending review</span>
              <span className="font-semibold">7</span>
            </div>
            <Button size="sm" className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
              Review Pending Items
            </Button>
          </div>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Building2 className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle className="text-base">Add New Department</CardTitle>
              <CardDescription>Create a new department</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                <Link href="/admin/departments">Add Department</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <Megaphone className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle className="text-base">Create Announcement</CardTitle>
              <CardDescription>Post updates to users</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                <Link href="/admin/announcements">Create Post</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <UserPlus className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle className="text-base">Manage Users</CardTitle>
              <CardDescription>Add or edit user accounts</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full bg-green-600 hover:bg-green-700" asChild>
                <Link href="/admin/users">Manage Users</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Management Tools */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Management Tools</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <FileText className="h-8 w-8 text-cyan-600 mb-2" />
              <CardTitle className="text-base">Materials Management</CardTitle>
              <CardDescription>Review and approve uploads</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/admin/materials">View Materials</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <TrendingUp className="h-8 w-8 text-pink-600 mb-2" />
              <CardTitle className="text-base">Reports & Analytics</CardTitle>
              <CardDescription>View platform statistics</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/admin/reports">View Reports</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <AlertCircle className="h-8 w-8 text-slate-600 mb-2" />
              <CardTitle className="text-base">System Settings</CardTitle>
              <CardDescription>Configure platform settings</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <Link href="/admin/settings">Open Settings</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
