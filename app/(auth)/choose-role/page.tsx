import Link from "next/link";
import { GraduationCap, BookOpen, ArrowLeft } from "lucide-react";

export default function ChooseRolePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <GraduationCap className="w-10 h-10 text-white" />
            <h1 className="text-3xl font-bold text-white">YCT Connect+</h1>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Select Your Role
          </h2>
          <p className="text-slate-300 text-lg">
            Continue as a student or lecturer to access your dashboard
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Student Card */}
          <Link
            href="/student/login"
            className="group relative bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                <GraduationCap className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                I&apos;m a Student
              </h3>
              <p className="text-blue-100">
                Access course materials, timetables, and announcements
              </p>
            </div>
          </Link>

          {/* Lecturer Card */}
          <Link
            href="/lecturer/login"
            className="group relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 border border-slate-600"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 text-center">
              <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition-colors">
                <BookOpen className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">
                I&apos;m a Lecturer
              </h3>
              <p className="text-slate-300">
                Upload materials, manage courses, and post announcements
              </p>
            </div>
          </Link>
        </div>

        {/* Footer Text */}
        <div className="text-center">
          <p className="text-slate-400">
            Need help?{" "}
            <a href="#" className="text-blue-400 hover:text-blue-300 underline">
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
