"use client"

import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface User {
  id: string
  name: string
  email: string
  role: "student" | "lecturer" | "admin"
  department?: string
  level?: string
  profileImage?: string
}

export interface Material {
  id: string
  title: string
  course: string
  lecturer: string
  department: string
  level: string
  semester: string
  status: "pending" | "approved" | "rejected"
  uploadedAt: string
  fileUrl: string
  fileSize: number
  downloads: number
}

export interface Announcement {
  id: string
  title: string
  message: string
  author: string
  authorRole: "lecturer" | "admin"
  target: "all" | "specific"
  targetAudience?: string
  createdAt: string
  updatedAt?: string
  status: "published" | "draft"
}

export interface Department {
  id: string
  name: string
  faculty: string
  hod: string
  studentCount: number
}

export interface Class {
  id: string
  name: string
  code: string
  lecturer: string
  level: string
  semester: string
  students: number
  schedule: string
  venue: string
}

export interface AppStore {
  // User state
  currentUser: User | null
  setCurrentUser: (user: User | null) => void

  // Materials
  materials: Material[]
  addMaterial: (material: Material) => void
  updateMaterial: (id: string, updates: Partial<Material>) => void
  deleteMaterial: (id: string) => void
  approveMaterial: (id: string) => void
  rejectMaterial: (id: string) => void

  // Announcements
  announcements: Announcement[]
  addAnnouncement: (announcement: Announcement) => void
  updateAnnouncement: (id: string, updates: Partial<Announcement>) => void
  deleteAnnouncement: (id: string) => void

  // Departments
  departments: Department[]
  addDepartment: (department: Department) => void
  updateDepartment: (id: string, updates: Partial<Department>) => void
  deleteDepartment: (id: string) => void

  // Classes
  classes: Class[]
  addClass: (classItem: Class) => void
  updateClass: (id: string, updates: Partial<Class>) => void
  deleteClass: (id: string) => void

  // Users
  users: User[]
  addUser: (user: User) => void
  updateUser: (id: string, updates: Partial<User>) => void
  deleteUser: (id: string) => void

  // Theme
  theme: "light" | "dark"
  setTheme: (theme: "light" | "dark") => void

  // Settings
  platformName: string
  setPlatformName: (name: string) => void
  logoUrl?: string
  setLogoUrl: (url: string) => void

  getAnnouncementsForRole: (role: "student" | "lecturer" | "admin") => Announcement[]
  getMaterialsForRole: (role: "student" | "lecturer" | "admin") => Material[]
  getClassesForRole: (role: "student" | "lecturer" | "admin") => Class[]

  lastUpdated: {
    announcements: number
    materials: number
    departments: number
    classes: number
    users: number
  }
  updateLastModified: (entity: keyof AppStore["lastUpdated"]) => void
}

// Mock initial data
const mockMaterials: Material[] = [
  {
    id: "1",
    title: "Introduction to Web Development",
    course: "WEB101",
    lecturer: "Dr. John Smith",
    department: "Computer Science",
    level: "100",
    semester: "1",
    status: "approved",
    uploadedAt: "2024-01-15",
    fileUrl: "/materials/web101.pdf",
    fileSize: 2.5,
    downloads: 45,
  },
  {
    id: "2",
    title: "Database Design Principles",
    course: "DB102",
    lecturer: "Prof. Jane Doe",
    department: "Computer Science",
    level: "200",
    semester: "1",
    status: "pending",
    uploadedAt: "2024-01-20",
    fileUrl: "/materials/db102.pdf",
    fileSize: 3.2,
    downloads: 12,
  },
]

const mockAnnouncements: Announcement[] = [
  {
    id: "1",
    title: "Semester Break Announcement",
    message:
      "The semester break will commence on December 15th. All students are advised to complete their assignments before the break.",
    author: "Admin",
    authorRole: "admin",
    target: "all",
    createdAt: "2024-01-10",
    status: "published",
  },
  {
    id: "2",
    title: "New Course Materials Available",
    message: "Dr. John Smith has uploaded new materials for WEB101. Please check the Learning Hub.",
    author: "Dr. John Smith",
    authorRole: "lecturer",
    target: "specific",
    targetAudience: "Computer Science - Level 100",
    createdAt: "2024-01-18",
    status: "published",
  },
]

const mockDepartments: Department[] = [
  { id: "1", name: "Computer Science", faculty: "Engineering", hod: "Prof. Ahmed Hassan", studentCount: 450 },
  { id: "2", name: "Electrical Engineering", faculty: "Engineering", hod: "Dr. Fatima Okafor", studentCount: 380 },
  { id: "3", name: "Business Administration", faculty: "Social Sciences", hod: "Dr. Chioma Nwosu", studentCount: 520 },
]

const mockClasses: Class[] = [
  {
    id: "1",
    name: "Web Development Fundamentals",
    code: "WEB101",
    lecturer: "Dr. John Smith",
    level: "100",
    semester: "1",
    students: 120,
    schedule: "Mon, Wed, Fri - 10:00 AM",
    venue: "Lab A1",
  },
  {
    id: "2",
    name: "Database Systems",
    code: "DB102",
    lecturer: "Prof. Jane Doe",
    level: "200",
    semester: "1",
    students: 95,
    schedule: "Tue, Thu - 2:00 PM",
    venue: "Lecture Hall B2",
  },
]

const mockUsers: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@yabatech.edu.ng",
    role: "student",
    department: "Computer Science",
    level: "100",
  },
  {
    id: "2",
    name: "Dr. Jane Smith",
    email: "jane@yabatech.edu.ng",
    role: "lecturer",
    department: "Computer Science",
  },
]

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // User
      currentUser: null,
      setCurrentUser: (user) => set({ currentUser: user }),

      // Materials
      materials: mockMaterials,
      addMaterial: (material) =>
        set((state) => {
          const updated = [...state.materials, material]
          return {
            materials: updated as Material[],
            lastUpdated: { ...state.lastUpdated, materials: Date.now() },
          }
        }),
      updateMaterial: (id, updates) =>
        set((state) => {
          const updated = state.materials.map((m) => (m.id === id ? { ...m, ...updates } : m))
          return {
            materials: updated as Material[],
            lastUpdated: { ...state.lastUpdated, materials: Date.now() },
          }
        }),
      deleteMaterial: (id) =>
        set((state) => {
          const updated = state.materials.filter((m) => m.id !== id)
          return {
            materials: updated as Material[],
            lastUpdated: { ...state.lastUpdated, materials: Date.now() },
          }
        }),
      approveMaterial: (id) =>
        set((state) => {
          const updated = state.materials.map((m) => (m.id === id ? { ...m, status: "approved" } : m))
          return {
            materials: updated as Material[],
            lastUpdated: { ...state.lastUpdated, materials: Date.now() },
          }
        }),
      rejectMaterial: (id) =>
        set((state) => {
          const updated = state.materials.map((m) => (m.id === id ? { ...m, status: "rejected" } : m))
          return {
            materials: updated as Material[],
            lastUpdated: { ...state.lastUpdated, materials: Date.now() },
          }
        }),

      // Announcements
      announcements: mockAnnouncements,
      addAnnouncement: (announcement) =>
        set((state) => {
          const updated = [...state.announcements, announcement]
          return {
            announcements: updated,
            lastUpdated: { ...state.lastUpdated, announcements: Date.now() },
          }
        }),
      updateAnnouncement: (id, updates) =>
        set((state) => {
          const updated = state.announcements.map((a) => (a.id === id ? { ...a, ...updates } : a))
          return {
            announcements: updated,
            lastUpdated: { ...state.lastUpdated, announcements: Date.now() },
          }
        }),
      deleteAnnouncement: (id) =>
        set((state) => {
          const updated = state.announcements.filter((a) => a.id !== id)
          return {
            announcements: updated,
            lastUpdated: { ...state.lastUpdated, announcements: Date.now() },
          }
        }),

      // Departments
      departments: mockDepartments,
      addDepartment: (department) => set((state) => ({ departments: [...state.departments, department] })),
      updateDepartment: (id, updates) =>
        set((state) => ({
          departments: state.departments.map((d) => (d.id === id ? { ...d, ...updates } : d)),
        })),
      deleteDepartment: (id) =>
        set((state) => ({
          departments: state.departments.filter((d) => d.id !== id),
        })),

      // Classes
      classes: mockClasses,
      addClass: (classItem) => set((state) => ({ classes: [...state.classes, classItem] })),
      updateClass: (id, updates) =>
        set((state) => ({
          classes: state.classes.map((c) => (c.id === id ? { ...c, ...updates } : c)),
        })),
      deleteClass: (id) =>
        set((state) => ({
          classes: state.classes.filter((c) => c.id !== id),
        })),

      // Users
      users: mockUsers,
      addUser: (user) => set((state) => ({ users: [...state.users, user] })),
      updateUser: (id, updates) =>
        set((state) => ({
          users: state.users.map((u) => (u.id === id ? { ...u, ...updates } : u)),
        })),
      deleteUser: (id) =>
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        })),

      // Theme
      theme: "light",
      setTheme: (theme) => set({ theme }),

      // Settings
      platformName: "YCT Connect+",
      setPlatformName: (name) => set({ platformName: name }),
      logoUrl: undefined,
      setLogoUrl: (url) => set({ logoUrl: url }),

      getAnnouncementsForRole: (role) => {
        const announcements = get().announcements
        const currentUser = get().currentUser

        if (role === "admin") {
          // Admins see all announcements
          return announcements
        } else if (role === "lecturer") {
          // Lecturers see their own announcements and admin announcements
          return announcements.filter((a) => a.authorRole === "admin" || a.author === currentUser?.name)
        } else {
          // Students see published announcements from lecturers and admins
          return announcements.filter((a) => a.status === "published")
        }
      },

      getMaterialsForRole: (role) => {
        const materials = get().materials
        const currentUser = get().currentUser

        if (role === "admin") {
          // Admins see all materials
          return materials
        } else if (role === "lecturer") {
          // Lecturers see their own materials and approved materials
          return materials.filter((m) => m.lecturer === currentUser?.name || m.status === "approved")
        } else {
          // Students see only approved materials
          return materials.filter((m) => m.status === "approved")
        }
      },

      getClassesForRole: (role) => {
        const classes = get().classes
        const currentUser = get().currentUser

        if (role === "admin") {
          // Admins see all classes
          return classes
        } else if (role === "lecturer") {
          // Lecturers see their own classes
          return classes.filter((c) => c.lecturer === currentUser?.name)
        } else {
          // Students see classes in their level
          return classes.filter((c) => c.level === currentUser?.level)
        }
      },

      lastUpdated: {
        announcements: Date.now(),
        materials: Date.now(),
        departments: Date.now(),
        classes: Date.now(),
        users: Date.now(),
      },

      updateLastModified: (entity) =>
        set((state) => ({
          lastUpdated: {
            ...state.lastUpdated,
            [entity]: Date.now(),
          },
        })),
    }),
    {
      name: "yct-connect-store",
    },
  ),
)
