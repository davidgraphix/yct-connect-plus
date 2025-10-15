"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GraduationCap, CheckCircle2 } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <nav className=" bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <span className="text-xl font-bold">YCT Connect+</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <Link
                href="#features"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#about"
                className="text-sm font-medium hover:text-blue-600 transition-colors"
              >
                About
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                asChild
                className="border border-blue-700 hover:bg-gray-100 text-blue-700"
              >
                <Link href="/choose-role">Login</Link>
              </Button>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <Link className="text-white" href="/choose-role">
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-blue-500 to-teal-400 text-white">
        {/* Animated Educational Icons Background */}
        <div
          aria-hidden
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
        >
          {/* Book Icon */}
          <svg
            className="absolute left-10 top-16 animate-floating-slow opacity-15"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="3" y="4" width="18" height="16" rx="2" fill="#fff" />
            <rect x="6" y="7" width="12" height="2" rx="1" fill="#3b82f6" />
            <rect x="6" y="11" width="8" height="2" rx="1" fill="#0ea5e9" />
          </svg>
          {/* Bell Icon */}
          <svg
            className="absolute right-20 top-32 animate-floating-medium opacity-15"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2zm6-6V11a6 6 0 1 0-12 0v5l-2 2v1h16v-1l-2-2z"
              fill="#fff"
            />
            <circle cx="12" cy="8" r="1.5" fill="#0ea5e9" />
          </svg>
          {/* Clock Icon */}
          <svg
            className="absolute left-1/2 top-10 animate-floating-fast opacity-15"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" fill="#fff" />
            <rect x="11" y="6" width="2" height="7" rx="1" fill="#3b82f6" />
            <rect
              x="12"
              y="12"
              width="5"
              height="2"
              rx="1"
              fill="#0ea5e9"
              transform="rotate(45 12 12)"
            />
          </svg>
          {/* Pen Icon */}
          <svg
            className="absolute left-32 bottom-16 animate-floating-medium opacity-15"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="4" y="17" width="16" height="3" rx="1.5" fill="#fff" />
            <rect x="7" y="5" width="10" height="8" rx="2" fill="#0ea5e9" />
            <rect x="9" y="7" width="6" height="4" rx="1" fill="#3b82f6" />
          </svg>
          {/* School Icon */}
          <svg
            className="absolute right-32 bottom-24 animate-floating-slow opacity-15"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="6" y="10" width="12" height="8" rx="2" fill="#fff" />
            <rect x="10" y="14" width="4" height="4" rx="1" fill="#0ea5e9" />
            <polygon points="12,4 4,10 20,10" fill="#3b82f6" />
          </svg>
          {/* Graduation Cap Icon */}
          <svg
            className="absolute left-1/4 top-1/4 animate-floating-slow opacity-12"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <polygon points="12,3 2,9 12,15 22,9 12,3" fill="#3b82f6" />
            <rect x="10" y="15" width="4" height="2" rx="1" fill="#0ea5e9" />
            <circle cx="12" cy="17.5" r="1.5" fill="#fff" />
          </svg>
          {/* Document Icon */}
          <svg
            className="absolute right-1/4 top-1/3 animate-floating-medium opacity-12"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="5" y="4" width="14" height="16" rx="2" fill="#fff" />
            <rect x="8" y="7" width="8" height="2" rx="1" fill="#3b82f6" />
            <rect x="8" y="11" width="6" height="2" rx="1" fill="#0ea5e9" />
            <rect x="8" y="15" width="4" height="2" rx="1" fill="#3b82f6" />
          </svg>
          {/* Chat Bubble Icon */}
          <svg
            className="absolute left-1/3 bottom-1/4 animate-floating-fast opacity-12"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="4" y="6" width="16" height="10" rx="4" fill="#fff" />
            <rect x="7" y="9" width="10" height="2" rx="1" fill="#3b82f6" />
            <rect x="7" y="13" width="6" height="2" rx="1" fill="#0ea5e9" />
            <polygon points="8,20 12,16 16,20" fill="#3b82f6" />
          </svg>
          {/* Star Icon */}
          <svg
            className="absolute right-1/3 bottom-10 animate-floating-medium opacity-12"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
          >
            <polygon
              points="12,2 15,9 22,9.5 17,14 18.5,21 12,17.5 5.5,21 7,14 2,9.5 9,9"
              fill="#0ea5e9"
            />
            <circle cx="12" cy="12" r="3" fill="#fff" />
          </svg>
          {/* Added: User Icon */}
          <svg
            className="absolute left-1/5 top-1/2 animate-floating-slow opacity-10"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="8" r="4" fill="#fff" />
            <rect x="6" y="14" width="12" height="6" rx="3" fill="#3b82f6" />
          </svg>
          {/* Added: Folder Icon */}
          <svg
            className="absolute right-1/5 bottom-1/3 animate-floating-medium opacity-10"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
          >
            <rect x="3" y="8" width="18" height="10" rx="2" fill="#fff" />
            <rect x="3" y="6" width="7" height="4" rx="1" fill="#0ea5e9" />
          </svg>
          {/* Added: Heart Icon */}
          <svg
            className="absolute left-1/6 bottom-10 animate-floating-fast opacity-10"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 21s-7-4.35-7-10A5 5 0 0 1 12 6a5 5 0 0 1 7 5c0 5.65-7 10-7 10z"
              fill="#3b82f6"
            />
          </svg>
          {/* Added: Check Icon */}
          <svg
            className="absolute right-1/6 top-10 animate-floating-slow opacity-10"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle cx="12" cy="12" r="10" fill="#fff" />
            <path
              d="M8 12l3 3 5-5"
              stroke="#0ea5e9"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
          <style jsx>{`
            @keyframes floating-slow {
              0% { transform: translateY(0px);}
              50% { transform: translateY(20px);}
              100% { transform: translateY(0px);}
            }
            @keyframes floating-medium {
              0% { transform: translateY(0px);}
              50% { transform: translateY(35px);}
              100% { transform: translateY(0px);}
            }
            @keyframes floating-fast {
              0% { transform: translateY(0px);}
              50% { transform: translateY(50px);}
              100% { transform: translateY(0px);}
            }
            .animate-floating-slow {
              animation: floating-slow 7s ease-in-out infinite;
            }
            .animate-floating-medium {
              animation: floating-medium 5s ease-in-out infinite;
            }
            .animate-floating-fast {
              animation: floating-fast 3.5s ease-in-out infinite;
            }
          `}</style>
        </div>
        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Your Campus. Connected.
                </h1>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                  Access materials, view timetables, and stay updated— all in
                  one place
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <Button
                    size="lg"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold"
                    asChild
                  >
                    <Link href="/choose-role">Get Started</Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white/10 bg-transparent"
                    asChild
                  >
                    <Link href="/choose-role">Login</Link>
                  </Button>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <img
                  src="/student-sitting-at-desk-with-laptop-and-computer-s.jpg"
                  alt="Student using YCT Connect+"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="/student-graduation-cap-icon-blue.jpg"
                  alt="Sign up icon"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">
                Sign Up as a Student or Lecturer
              </h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="/document-notes-paper-icon-blue.jpg"
                  alt="Access courses icon"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">
                Access Courses, Notes & Timetables
              </h3>
            </div>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <div className="w-20 h-20 flex items-center justify-center">
                <img
                  src="/notification-bell-icon-blue.jpg"
                  alt="Stay updated icon"
                  className="w-full h-full"
                />
              </div>
              <h3 className="text-xl font-bold">Stay Updated in Real-Time</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/laptop-showing-dashboard-with-charts-graphs-and-na.jpg"
                alt="Dashboard preview"
                className="w-full h-auto"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-balance">
                One Dashboard. Everything You Need.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Materials, announcements, and schedules— all personalized for
                your department and level.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="/choose-role">View Dashboard Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl font-bold">
                Why Choose YCT Connect+?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-lg">
                    Improves student-lecturer communication
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-lg">Saves time searching for notes</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-lg">Real-time alerts for all updates</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-lg">Designed for YABATECH students</p>
                </div>
              </div>
            </div>
            <div className="relative flex justify-center">
              <img
                src="/happy-student-holding-phone-with-blue-background-c.jpg"
                alt="Student using mobile app"
                className="w-full max-w-md h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" bg-gray-800 py-12 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-blue-600" />
                <span className="font-bold">YCT Connect+</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your campus connection platform for YABATECH students and
                lecturers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/materials"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Materials
                  </Link>
                </li>
                <li>
                  <Link
                    href="/timetable"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Timetable
                  </Link>
                </li>
                <li>
                  <Link
                    href="/announcements"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Announcements
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-white text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} YCT Connect+. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
