"use client"

import { useEffect, useCallback } from "react"
import { useAppStore } from "@/lib/store"

export function useSync() {
  const store = useAppStore()

  // Subscribe to store changes and trigger updates
  useEffect(() => {
    const unsubscribe = useAppStore.subscribe((state: any) => {
      // This callback fires whenever the store changes; log lastUpdated
      // Components can use this to trigger re-renders
      console.log("[v0] Store updated:", state.lastUpdated)
    })

    return () => unsubscribe()
  }, [])

  const syncAnnouncements = useCallback(() => {
    return store.announcements
  }, [store.announcements])

  const syncMaterials = useCallback(() => {
    return store.materials
  }, [store.materials])

  const syncClasses = useCallback(() => {
    return store.classes
  }, [store.classes])

  const syncUsers = useCallback(() => {
    return store.users
  }, [store.users])

  return {
    syncAnnouncements,
    syncMaterials,
    syncClasses,
    syncUsers,
    lastUpdated: store.lastUpdated,
  }
}
