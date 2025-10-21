"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { User, Bell, Shield, Palette } from "lucide-react"
import { useState } from "react"

export default function StudentSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile")
  const [profileData, setProfileData] = useState({
    fullName: "David Okafor",
    email: "david@yabatech.edu.ng",
    matricNumber: "YCT/ND2/CS/2023/001",
    department: "Computer Science",
    level: "ND2",
  })
  const [theme, setTheme] = useState("system")
  const [notifications, setNotifications] = useState({
    announcements: true,
    classReminders: true,
    newMaterials: true,
    emailNotifications: false,
    pushNotifications: true,
  })

  const handleProfileChange = (field: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveProfile = () => {
    alert("Profile updated successfully!")
  }

  const handleThemeChange = (newTheme: string) => {
    setTheme(newTheme)
    alert(`Theme changed to ${newTheme}`)
  }

  const handleNotificationChange = (key: string) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const handleSaveNotifications = () => {
    alert("Notification preferences saved!")
  }

  const tabs = [
    { id: "profile", label: "Profile", icon: User },
    { id: "security", label: "Security", icon: Shield },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "theme", label: "Theme", icon: Palette },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold">Settings</h1>
        <p className="text-muted-foreground text-sm md:text-base">
          Personalize your experience and manage your account
        </p>
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
                      activeTab === tab.id ? "bg-blue-600 text-white" : "hover:bg-muted"
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
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                    <User className="h-10 w-10 text-blue-600" />
                  </div>
                  <Button variant="outline">Change Photo</Button>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Full Name</label>
                  <Input
                    value={profileData.fullName}
                    onChange={(e) => handleProfileChange("fullName", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input
                    type="email"
                    value={profileData.email}
                    onChange={(e) => handleProfileChange("email", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Matric Number</label>
                  <Input value={profileData.matricNumber} disabled />
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Department</label>
                    <Input value={profileData.department} disabled />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Level</label>
                    <Input value={profileData.level} disabled />
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto" onClick={handleSaveProfile}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "security" && (
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Manage your password and security options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Current Password</label>
                  <Input type="password" placeholder="Enter current password" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">New Password</label>
                  <Input type="password" placeholder="Enter new password" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Confirm New Password</label>
                  <Input type="password" placeholder="Confirm new password" />
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Add extra security to your account</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" />
                </div>
                <div className="pt-4 border-t">
                  <p className="text-sm font-medium mb-2">Login Activity</p>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>Last login: Today at 9:30 AM from Chrome on Windows</p>
                    <p>Previous login: Yesterday at 2:15 PM from Mobile</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">Update Password</Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Preferences</CardTitle>
                <CardDescription>Choose what notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Announcements</p>
                    <p className="text-sm text-muted-foreground">Get notified about new announcements</p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={notifications.announcements}
                    onChange={() => handleNotificationChange("announcements")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Class Reminders</p>
                    <p className="text-sm text-muted-foreground">Receive reminders before classes</p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={notifications.classReminders}
                    onChange={() => handleNotificationChange("classReminders")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">New Materials</p>
                    <p className="text-sm text-muted-foreground">Alert when new materials are uploaded</p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={notifications.newMaterials}
                    onChange={() => handleNotificationChange("newMaterials")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Receive updates via email</p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={notifications.emailNotifications}
                    onChange={() => handleNotificationChange("emailNotifications")}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Browser push notifications</p>
                  </div>
                  <input
                    type="checkbox"
                    className="h-5 w-5"
                    checked={notifications.pushNotifications}
                    onChange={() => handleNotificationChange("pushNotifications")}
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto" onClick={handleSaveNotifications}>
                  Save Preferences
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
                    className="w-full px-4 py-2 border rounded-lg bg-background"
                    value={theme}
                    onChange={(e) => handleThemeChange(e.target.value)}
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="system">System</option>
                  </select>
                </div>
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-2">Preview</p>
                  <div className="h-32 bg-background border rounded-lg flex items-center justify-center">
                    <p className="text-muted-foreground">Theme preview ({theme})</p>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full md:w-auto">Apply Theme</Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
