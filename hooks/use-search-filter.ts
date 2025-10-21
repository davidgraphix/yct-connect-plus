"use client"

import { useState, useMemo } from "react"

export interface SearchFilterOptions<T> {
  items: T[]
  searchFields: (keyof T)[]
  filterField?: keyof T
  filterValues?: string[]
}

export function useSearchFilter<T>({ items, searchFields, filterField, filterValues }: SearchFilterOptions<T>) {
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilters, setActiveFilters] = useState<string[]>(filterValues || [])

  const filtered = useMemo(() => {
    let result = items

    // Apply search
    if (searchTerm) {
      result = result.filter((item) =>
        searchFields.some((field) => {
          const value = item[field]
          return String(value).toLowerCase().includes(searchTerm.toLowerCase())
        }),
      )
    }

    // Apply filters
    if (filterField && activeFilters.length > 0) {
      result = result.filter((item) => activeFilters.includes(String(item[filterField])))
    }

    return result
  }, [items, searchTerm, activeFilters, searchFields, filterField])

  return {
    filtered,
    searchTerm,
    setSearchTerm,
    activeFilters,
    setActiveFilters,
    toggleFilter: (value: string) => {
      setActiveFilters((prev) => (prev.includes(value) ? prev.filter((f) => f !== value) : [...prev, value]))
    },
  }
}
