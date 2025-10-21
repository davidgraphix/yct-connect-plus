"use client"

import { useMemo } from "react"
import { useAppStore } from "@/lib/store"

export function useRoleData() {
  const store = useAppStore()
  const currentUser = store.currentUser

  const announcements = useMemo(() => {
    if (!currentUser) return []
    return store.getAnnouncementsForRole(currentUser.role)
  }, [store.announcements, currentUser, store.lastUpdated.announcements])

  const materials = useMemo(() => {
    if (!currentUser) return []
    return store.getMaterialsForRole(currentUser.role)
  }, [store.materials, currentUser, store.lastUpdated.materials])

  const classes = useMemo(() => {
    if (!currentUser) return []
    return store.getClassesForRole(currentUser.role)
  }, [store.classes, currentUser, store.lastUpdated.classes])

  return {
    announcements,
    materials,
    classes,
    currentUser,
  }
}
