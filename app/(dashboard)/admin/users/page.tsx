"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, UserPlus, MoreVertical, Download, Upload } from "lucide-react"
import { useState } from "react"

export default function UserManagementPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const users = [
    {
      id: 1,
      name: "David Okafor",
      email: "david@yabatech.edu.ng",
      role: "Student",
      department: "Computer Science",
      status: "Active",
      joined: "Jan 15, 2024",
    },
    {
      id: 2,
      name: "Sarah Adeyemi",
      email: "sarah@yabatech.edu.ng",
      role: "Lecturer",
      department: "Engineering",
      status: "Active",
      joined: "Sep 10, 2023",
    },
    {
      id: 3,
      name: "John Eze",
      email: "john@yabatech.edu.ng",
      role: "Student",
      department: "Business Admin",
      status: "Suspended",
      joined: "Feb 20, 2024",
    },
    {
      id: 4,
      name: "Mary Okonkwo",
      email: "mary@yabatech.edu.ng",
      role: "Lecturer",
      department: "Computer Science",
      status: "Active",
      joined: "Aug 5, 2023",
    },
    {
      id: 5,
      name: "Ahmed Bello",
      email: "ahmed@yabatech.edu.ng",
      role: "Student",
      department: "Mass Comm",
      status: "Active",
      joined: "Mar 12, 2024",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">User Management</h1>
          <p className="text-muted-foreground">Manage all user accounts - students, lecturers, and admins</p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <UserPlus className="h-4 w-4 mr-2" />
          Add User
        </Button>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Users</CardTitle>
              <CardDescription>Total: {users.length} users</CardDescription>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Upload className="h-4 w-4 mr-2" />
                Import CSV
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, email, or department..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <select className="px-4 py-2 border rounded-lg bg-background">
                <option>All Roles</option>
                <option>Student</option>
                <option>Lecturer</option>
                <option>Admin</option>
              </select>
              <select className="px-4 py-2 border rounded-lg bg-background">
                <option>All Status</option>
                <option>Active</option>
                <option>Suspended</option>
              </select>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left p-4 font-medium">Name</th>
                    <th className="text-left p-4 font-medium">Email</th>
                    <th className="text-left p-4 font-medium">Role</th>
                    <th className="text-left p-4 font-medium">Department</th>
                    <th className="text-left p-4 font-medium">Status</th>
                    <th className="text-left p-4 font-medium">Date Joined</th>
                    <th className="text-left p-4 font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {users.map((user) => (
                    <tr key={user.id} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-medium">{user.name}</td>
                      <td className="p-4 text-sm text-muted-foreground">{user.email}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.role === "Student"
                              ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                              : user.role === "Lecturer"
                                ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                                : "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          }`}
                        >
                          {user.role}
                        </span>
                      </td>
                      <td className="p-4 text-sm">{user.department}</td>
                      <td className="p-4">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                              : "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300"
                          }`}
                        >
                          {user.status}
                        </span>
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">{user.joined}</td>
                      <td className="p-4">
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing 1-5 of {users.length} users</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
                </Button>
                <Button variant="outline" size="sm">
                  Next
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
