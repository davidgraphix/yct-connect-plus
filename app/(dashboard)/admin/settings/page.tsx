"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Settings, Bell, Shield, Database, Key } from "lucide-react"
import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { useToast, ToastContainer } from "@/components/ui/toast"
import Image from "next/image"

export default function AdminSettingsPage() {
  const { platformName, setPlatformName, logoUrl, setLogoUrl, theme, setTheme } = useAppStore()
  const { toasts, addToast, removeToast } = useToast()
  const [activeTab, setActiveTab] = useState("general")
  const [formData, setFormData] = useState({
    platformName,
    theme: theme || "light",
  })

  const tabs = [
    { id: "general", label: "General", icon: Settings },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
    { id: "api", label: "API Keys", icon: Key },
    { id: "backup", label: "Backup", icon: Database },
  ]

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        setLogoUrl(result)
        addToast({
          title: "Logo Uploaded",
          description: "The logo has been uploaded successfully.",
          type: "success",
        })
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSaveChanges = () => {
    setPlatformName(formData.platformName)
    setTheme(formData.theme === "light" || formData.theme === "dark" ? formData.theme : "light")
    addToast({
      title: "Settings Saved",
      description: "Your settings have been saved successfully.",
      type: "success",
    })
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-3xl font-bold">System Settings</h1>
        <p className="text-muted-foreground">Configure global platform settings and preferences</p>
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
          {activeTab === "general" && (
            <Card>
              <CardHeader>
                <CardTitle>General Settings</CardTitle>
                <CardDescription>Platform name, logo, and appearance</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Left Shoulder Name</label>
                  <Input
                    value={formData.platformName}
                    onChange={(e) => setFormData({ ...formData, platformName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Platform Logo</label>
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
                      {logoUrl ? (
                        <Image src={logoUrl || "/placeholder.svg"} alt="Logo" className="h-full w-full object-cover" />
                      ) : (
                        <Settings className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <input
                        type="file"
                        id="logo-upload"
                        accept="image/*"
                        onChange={handleLogoUpload}
                        className="hidden"
                      />
                      <Button variant="outline" onClick={() => document.getElementById("logo-upload")?.click()}>
                        Upload Logo
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Theme</label>
                  <select
                    value={formData.theme}
                    onChange={(e) => setFormData({ ...formData, theme: e.target.value as "light" | "dark" })}
                    className="w-full px-4 py-2 border rounded-lg bg-background"
                  >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                  </select>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700" onClick={handleSaveChanges}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "notifications" && (
            <Card>
              <CardHeader>
                <CardTitle>Notification Settings</CardTitle>
                <CardDescription>Configure email and push notifications</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Email Notifications</p>
                    <p className="text-sm text-muted-foreground">Send email updates to users</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-muted-foreground">Send browser push notifications</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">SMS Notifications</p>
                    <p className="text-sm text-muted-foreground">Send SMS alerts for critical updates</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "security" && (
            <Card>
              <CardHeader>
                <CardTitle>Security Settings</CardTitle>
                <CardDescription>Password policies and authentication</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Session Timeout (minutes)</label>
                  <Input type="number" defaultValue="30" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Two-Factor Authentication</p>
                    <p className="text-sm text-muted-foreground">Require 2FA for all users</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Password Reset Policy</p>
                    <p className="text-sm text-muted-foreground">Force password change every 90 days</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "api" && (
            <Card>
              <CardHeader>
                <CardTitle>API Keys</CardTitle>
                <CardDescription>Manage third-party service integrations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Cloudinary API Key</label>
                  <Input type="password" defaultValue="••••••••••••••••" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Firebase Config</label>
                  <Input type="password" defaultValue="••••••••••••••••" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Resend API Key</label>
                  <Input type="password" defaultValue="••••••••••••••••" />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">Save Changes</Button>
              </CardContent>
            </Card>
          )}

          {activeTab === "backup" && (
            <Card>
              <CardHeader>
                <CardTitle>Backup & Restore</CardTitle>
                <CardDescription>Manage database backups</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm font-medium mb-2">Last Backup</p>
                  <p className="text-sm text-muted-foreground">March 15, 2024 at 2:30 AM</p>
                </div>
                <div className="flex gap-2">
                  <Button className="bg-blue-600 hover:bg-blue-700">Create Backup Now</Button>
                  <Button variant="outline">Restore from Backup</Button>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Automatic Daily Backups</p>
                    <p className="text-sm text-muted-foreground">Backup database every day at 2:00 AM</p>
                  </div>
                  <input type="checkbox" className="h-5 w-5" defaultChecked />
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  )
}
