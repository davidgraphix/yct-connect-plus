"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Building2, Users, GraduationCap, Plus, Search, Edit, Trash2, MoreVertical } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { useToast, ToastContainer } from "@/components/ui/toast"

export default function DepartmentsPage() {
  const { departments, addDepartment, updateDepartment, deleteDepartment } = useAppStore()
  const { toasts, addToast, removeToast } = useToast()
  const [searchQuery, setSearchQuery] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isManageDialogOpen, setIsManageDialogOpen] = useState(false)
  const [selectedDept, setSelectedDept] = useState<any>(null)
  const [editFormData, setEditFormData] = useState<any>(null)

  const filteredDepartments = departments.filter(
    (dept) =>
      dept.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.faculty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dept.hod.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAddDepartment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const newDept = {
      id: Math.random().toString(36).substr(2, 9),
      name: formData.get("name") as string,
      faculty: formData.get("faculty") as string,
      studentCount: 0,
      hod: formData.get("hod") as string,
    }
    addDepartment(newDept)
    addToast({
      title: "Department Added",
      description: "The department has been added successfully.",
      type: "success",
    })
    setIsAddDialogOpen(false)
    e.currentTarget.reset()
  }

  const handleDeleteDepartment = (id: string) => {
    deleteDepartment(id)
    addToast({
      title: "Department Deleted",
      description: "The department has been deleted successfully.",
      type: "success",
    })
    setIsManageDialogOpen(false)
  }

  const handleManageDepartment = (dept: any) => {
    setSelectedDept(dept)
    setEditFormData({ ...dept })
    setIsManageDialogOpen(true)
  }

  const handleSaveChanges = () => {
    if (!editFormData.name || !editFormData.faculty || !editFormData.hod) {
      addToast({
        title: "Error",
        description: "Please fill in all required fields",
        type: "error",
      })
      return
    }
    updateDepartment(selectedDept.id, editFormData)
    addToast({
      title: "Department Updated",
      description: "The department has been updated successfully.",
      type: "success",
    })
    setIsManageDialogOpen(false)
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Department Management</h1>
          <p className="text-sm text-muted-foreground">
            Manage YABATECH departments and link them to lecturers & students
          </p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Department
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Department</DialogTitle>
              <DialogDescription>Create a new department in the system</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleAddDepartment} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Department Name</Label>
                <Input id="name" name="name" placeholder="e.g., Computer Science" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="faculty">Faculty</Label>
                <Input id="faculty" name="faculty" placeholder="e.g., Science & Technology" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="hod">Head of Department</Label>
                <Input id="hod" name="hod" placeholder="e.g., Dr. John Doe" required />
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                  Add Department
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search departments by name, faculty, or HOD..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredDepartments.map((dept) => (
          <Card key={dept.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                    <Building2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{dept.name}</CardTitle>
                    <CardDescription className="text-xs">{dept.faculty}</CardDescription>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleManageDepartment(dept)}>
                      <Edit className="h-4 w-4 mr-2" />
                      Edit Department
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => handleDeleteDepartment(dept.id)} className="text-red-600">
                      <Trash2 className="h-4 w-4 mr-2" />
                      Delete Department
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Students
                  </span>
                  <span className="font-semibold">{dept.studentCount}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <GraduationCap className="h-4 w-4" />
                    HOD
                  </span>
                  <span className="font-semibold text-xs">{dept.hod}</span>
                </div>
              </div>

              <Button className="w-full bg-transparent" variant="outline" onClick={() => handleManageDepartment(dept)}>
                Manage Department
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isManageDialogOpen} onOpenChange={setIsManageDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Manage Department</DialogTitle>
            <DialogDescription>Edit department details and manage resources</DialogDescription>
          </DialogHeader>
          {editFormData && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Department Name</Label>
                  <Input
                    value={editFormData.name}
                    onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Faculty</Label>
                  <Input
                    value={editFormData.faculty}
                    onChange={(e) => setEditFormData({ ...editFormData, faculty: e.target.value })}
                  />
                </div>
                <div className="space-y-2 sm:col-span-2">
                  <Label>Head of Department</Label>
                  <Input
                    value={editFormData.hod}
                    onChange={(e) => setEditFormData({ ...editFormData, hod: e.target.value })}
                  />
                </div>
              </div>

              <div className="p-4 bg-muted/50 rounded-lg">
                <p className="text-sm text-muted-foreground">Students</p>
                <p className="text-2xl font-bold">{editFormData.studentCount}</p>
              </div>

              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setIsManageDialogOpen(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={() => handleDeleteDepartment(selectedDept.id)}>
                  Delete Department
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {filteredDepartments.length === 0 && (
        <div className="text-center py-12">
          <Building2 className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
          <p className="text-muted-foreground">No departments found matching your search</p>
        </div>
      )}

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  )
}
