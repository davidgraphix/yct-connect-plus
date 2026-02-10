"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { GraduationCap, Mail, Lock, User, Hash, Building2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function StudentRegisterPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    matricNo: "",
    department: "",
    level: "",
    email: "",
    password: "",
    confirmPassword: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

 
    try {
 const res = await fetch("http://localhost:5092/api/auth/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    fullName: formData.fullName,
    matricNo: formData.matricNo,
    department: formData.department,
    level: formData.level,
    email: formData.email,
    password: formData.password,
  }),
})


      const data = await res.json()

      if (!res.ok) {
        alert(data) // show error from API
        return
      }

      alert("Registration successful!")
      // Redirect to login page
      window.location.href = "/student/login"
    } catch (err) {
      console.error(err)
      alert("Something went wrong, check console")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-md">
        <Link
          href="/choose-role"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to role selection
        </Link>

        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="w-8 h-8 text-blue-500" />
              <h1 className="text-2xl font-bold text-white">YCT Connect+</h1>
            </div>
            <h2 className="text-3xl font-bold text-white mb-2">Student Registration</h2>
            <p className="text-slate-400">Create your student account</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Matric Number */}
            <div>
              <label htmlFor="matricNo" className="block text-sm font-medium text-slate-300 mb-2">Matric Number</label>
              <div className="relative">
                <Hash className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="matricNo"
                  name="matricNo"
                  type="text"
                  value={formData.matricNo}
                  onChange={handleChange}
                  placeholder="YCT/2024/12345"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-slate-300 mb-2">Department</label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all appearance-none"
                  required
                >
                  <option value="">Select Department</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Mass Communication">Mass Communication</option>
                  <option value="Science Laboratory Technology">Science Laboratory Technology</option>
                </select>
              </div>
            </div>

            {/* Level */}
            <div>
              <label htmlFor="level" className="block text-sm font-medium text-slate-300 mb-2">Level</label>
              <select
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                required
              >
                <option value="">Select Level</option>
                <option value="ND1">ND1</option>
                <option value="ND2">ND2</option>
                <option value="HND1">HND1</option>
                <option value="HND2">HND2</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="student@yabatech.edu.ng"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

          

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
              size="lg"
            >
              Register as Student
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400">
              Already have an account?{" "}
              <Link
                href="/student/login"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
