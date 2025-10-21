"use client"

import { useState, useCallback } from "react"
import { X } from "lucide-react"

export interface Toast {
  id: string
  title: string
  description?: string
  type: "success" | "error" | "info"
  duration?: number
}

export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([])

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { ...toast, id }
    setToasts((prev) => [...prev, newToast])

    if (toast.duration !== 0) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, toast.duration || 3000)
    }

    return id
  }, [])

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return { toasts, addToast, removeToast }
}

export function ToastContainer({ toasts, onRemove }: { toasts: Toast[]; onRemove: (id: string) => void }) {
  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`p-4 rounded-lg shadow-lg flex items-start gap-3 min-w-80 ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : toast.type === "error"
                ? "bg-red-500 text-white"
                : "bg-blue-500 text-white"
          }`}
        >
          <div className="flex-1">
            <p className="font-semibold">{toast.title}</p>
            {toast.description && <p className="text-sm opacity-90">{toast.description}</p>}
          </div>
          <button onClick={() => onRemove(toast.id)} className="flex-shrink-0 hover:opacity-80">
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
