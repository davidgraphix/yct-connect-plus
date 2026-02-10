import Link from "next/link";
import { GraduationCap, BookOpen, ArrowLeft } from "lucide-react";

export default function ChooseRolePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-10 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-9 h-9 text-blue-500" />
            <h1 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
              YCT Connect+
            </h1>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Select Your Role
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Continue as a student to access your dashboard and academic resources.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Student Card */}
          <Link
            href="/student/login"
            className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-blue-600 to-blue-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/30"
          >
            <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition">
                <GraduationCap className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                I&apos;m a Student
              </h3>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Access course materials, timetables, assignments, and announcements.
              </p>
            </div>
          </Link>

          {/* Lecturer Card */}
          {/* 
          <Link
            href="/lecturer/login"
            className="group relative rounded-3xl p-8 sm:p-10 bg-gradient-to-br from-slate-700 to-slate-800 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-600/20 border border-slate-700"
          >
            <div className="absolute inset-0 rounded-3xl bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/10 transition">
                <BookOpen className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                I&apos;m a Lecturer
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Upload materials, manage courses, and post announcements.
              </p>
            </div>
          </Link>
          */}
        </div>

        {/* Footer */}
        <div className="text-center mt-14">
          <p className="text-slate-500 text-sm">
            Need help?{" "}
            <a
              href="#"
              className="text-blue-400 hover:text-blue-300 underline transition"
            >
              Contact Support
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
