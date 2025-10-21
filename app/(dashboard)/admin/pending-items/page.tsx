"use client"

import { useState } from "react"
import { useAppStore } from "@/lib/store"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle, FileText } from "lucide-react"
import { useToast, ToastContainer } from "@/components/ui/toast"

export default function PendingItemsPage() {
  const { materials, approveMaterial, rejectMaterial } = useAppStore()
  const { toasts, addToast, removeToast } = useToast()
  const [selectedItem, setSelectedItem] = useState<string | null>(null)

  const pendingMaterials = materials.filter((m) => m.status === "pending")

  const handleApprove = (id: string) => {
    approveMaterial(id)
    addToast({
      title: "Material Approved",
      description: "The material has been approved successfully.",
      type: "success",
    })
  }

  const handleReject = (id: string) => {
    rejectMaterial(id)
    addToast({
      title: "Material Rejected",
      description: "The material has been rejected.",
      type: "error",
    })
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-3xl font-bold">Review Pending Items</h1>
        <p className="text-muted-foreground mt-2">Review and approve or reject pending materials</p>
      </div>

      {pendingMaterials.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground">No pending items to review</p>
        </Card>
      ) : (
        <div className="grid gap-4">
          {pendingMaterials.map((material) => (
            <Card
              key={material.id}
              className="p-6 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedItem(material.id)}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-blue-600" />
                    <h3 className="font-semibold text-lg">{material.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Course: {material.course}</p>
                  <p className="text-sm text-muted-foreground">Lecturer: {material.lecturer}</p>
                  <p className="text-sm text-muted-foreground">
                    Department: {material.department} | Level: {material.level}
                  </p>
                  <p className="text-sm text-muted-foreground">Uploaded: {material.uploadedAt}</p>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    className="bg-green-600 hover:bg-green-700"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleApprove(material.id)
                    }}
                  >
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Approve
                  </Button>
                  <Button
                    size="sm"
                    variant="destructive"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleReject(material.id)
                    }}
                  >
                    <XCircle className="h-4 w-4 mr-1" />
                    Reject
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </div>
  )
}
