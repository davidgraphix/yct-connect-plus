"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Bell, Shield, Palette } from "lucide-react"
import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { useToast, ToastContainer } from "@/components/ui/toast"

export default function LecturerSettingsPage() {
  const { theme, setTheme } = useAppStore()
  const { toasts, addToast, removeToast } = useToast()
  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    fullName: "Dr. Adewale Johnson",
    email: "adewale@yabatech.edu.ng",
    department: "Computer Science",
    staffId: "LEC-2023-001",
  })
  const [themeMode, setThemeMode] = useState(theme || "light")
  const [photoUrl, setPhotoUrl] = useState<string | null>(null)

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "privacy", label: "Privacy", icon: Shield },
    { id: "theme", label: "Theme", icon: Palette },
  ]

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setPhotoUrl(event.target?.result as string)
        addToast({
          title: "Photo Updated",
          description: "Your profile photo has been updated successfully.",
          type: "success",
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveChanges = () => {
    if (themeMode !== theme) {
      setTheme(themeMode as "light" | "dark")
    }
    addToast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully.",
      type: "success",
    })
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
        <p className="text-xs sm:text-sm text-muted-foreground">Manage your profile, preferences, and notifications</p>
      </div>

      <div className="grid gap-6 md:grid-cols-[200px_1fr]">
        <Card className="h-fit">
          <CardContent className="p-4">
            <nav className="space-y-2">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeTab === tab.id ? "bg-purple-600 text-white" : "hover:bg-muted"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                )
              })}
            </nav>
          </CardContent>
        </Card>

        <div>
          {activeTab === "profile" && (
            <Card>
              <CardHeader>
                <CardTitle>Profile Settings</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center overflow-hidden flex-shrink-0">
                    {photoUrl ? (
                      <img src={photoUrl || "/placeholder.svg"} alt="Profile" className="h-full w-full object-cover" />
                    ) : (
                      <User className="h-10 w-10 text-purple-600" />
                    )}
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => document.getElementById("photo-upload")?.click()}
                    className="text-xs sm:text-sm"
                  >
                    Change Photo
                  </Button>
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    onChange={handlePhotoUpload}
                    className="hidden"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    value={profileData.fullName}
                    onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Department</label>
                  <Input value={profileData.department} disabled />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Staff ID</label>
                  <Input value={profileData.staffId} disabled />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose how you want to be notified</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Email Notifications</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Push Notifications</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Browser notifications</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Student Comments</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Notify when students comment</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "privacy" && (
            <Card>
              <CardHeader>
                <CardTitle>Privacy Settings</CardTitle>
                <CardDescription>Control your privacy and security</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Show Online Status</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Let students see when you're online</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-sm">Two-Factor Authentication</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">Add extra security to your account</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Change Password</label>
                  <Input type="password" placeholder="New password" />
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "theme" && (
            <Card>
              <CardHeader>
                <CardTitle>Theme Preferences</CardTitle>
                <CardDescription>Customize your interface appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Theme Mode</label>
                  <select
                    value={themeMode}
                    onChange={(e) => setThemeMode(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg bg-background text-sm"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-2">Preview</p>
                  <div className="h-32 bg-background border rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">Theme: {themeMode}</p>
                  </div>
                </div>
                <Button className="bg-purple-600 hover:bg-purple-700 w-full sm:w-auto" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  )
}
