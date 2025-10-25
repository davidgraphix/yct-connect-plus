"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Book,
  Pen,
  Heart,
  BookOpen,
  Lightbulb,
  Award,
  GraduationCap,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Zap,
  Users,
  Clock,
  Bookmark,
  FileText,
  Briefcase,
  Star,
  Target,
  Layers,
} from "lucide-react";
import { useState } from "react";

export default function LandingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const animatedIcons = [
    { Icon: Book, delay: 0, animation: "move-left-right" },
    { Icon: Pen, delay: 1.5, animation: "move-up-down" },
    { Icon: Heart, delay: 3, animation: "move-top-bottom" },
    { Icon: Clock, delay: 4.5, animation: "move-left-right" },
    { Icon: BookOpen, delay: 6, animation: "move-up-down" },
    { Icon: Lightbulb, delay: 7.5, animation: "move-top-bottom" },
    { Icon: Award, delay: 9, animation: "move-left-right" },
    { Icon: GraduationCap, delay: 10.5, animation: "move-up-down" },
    { Icon: Bookmark, delay: 12, animation: "move-top-bottom" },
    { Icon: FileText, delay: 13.5, animation: "move-left-right" },
    { Icon: Briefcase, delay: 15, animation: "move-up-down" },
    { Icon: Star, delay: 16.5, animation: "move-top-bottom" },
    { Icon: Target, delay: 18, animation: "move-left-right" },
    { Icon: Layers, delay: 19.5, animation: "move-up-down" },
    { Icon: Book, delay: 21, animation: "move-top-bottom" },
    { Icon: Pen, delay: 22.5, animation: "move-left-right" },
    { Icon: Book, delay: 0 },
    { Icon: Pen, delay: 1.5 },
    { Icon: Heart, delay: 3 },
    { Icon: Clock, delay: 4.5 },
    { Icon: BookOpen, delay: 6 },
    { Icon: Lightbulb, delay: 7.5 },
    { Icon: Award, delay: 9 },
    { Icon: GraduationCap, delay: 10.5 },
    { Icon: Bookmark, delay: 12 },
    { Icon: FileText, delay: 13.5 },
    { Icon: Briefcase, delay: 15 },
    { Icon: Star, delay: 16.5 },
    { Icon: Target, delay: 18 },
    { Icon: Layers, delay: 19.5 },
    { Icon: Book, delay: 21 },
    { Icon: Pen, delay: 22.5 },
  ];

  return (
    <div className="min-h-screen ">
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 blur-2xl"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20 blur-2xl"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                YCT Connect+
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm font-medium text-foreground/70 cursor-pointer hover:text-foreground transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                How It Works
              </Link>
              <Link
                href="#why-choose"
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Why Us
              </Link>
            </div>

            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button
                variant="ghost"
                asChild
                className="text-foreground/70 cursor-pointer hover:text-foreground"
              >
                <Link href="/choose-role">Login</Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
              >
                <Link href="/choose-role">Get Started</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 space-y-3 border-t border-border pt-4">
              <Link
                href="#features"
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href="#why-choose"
                className="block px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Us
              </Link>
              <div className="flex gap-2 pt-2">
                <Button
                  variant="outline"
                  asChild
                  className="flex-1 bg-transparent"
                >
                  <Link href="/choose-role">Login</Link>
                </Button>
                <Button
                  asChild
                  className="flex-1 bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white"
                >
                  <Link href="/choose-role">Get Started</Link>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-background to-teal-50 dark:from-slate-950 dark:via-background dark:to-slate-900">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-500/20"></div>

        {/* Animated Background Elements */}

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {animatedIcons.map((item, index) => (
            <div
              key={index}
              className={`absolute opacity-20 dark:opacity-10 ${item.animation}`}
              style={{
                animationDelay: `${item.delay}s`,
                left: `${(index * 6.25) % 100}%`,
                top: `${Math.sin(index * 0.5) * 40 + 50}%`,
              }}
            >
              <item.Icon className="h-20 w-20 text-blue-600 dark:text-blue-400" />
            </div>
          ))}
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 dark:bg-teal-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-blue-200 dark:bg-blue-900/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative  z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 4,
                  ease: "easeOut",
                }}
                className="space-y-6 sm:space-y-8"
              >
                <div className="space-y-4">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                    Your Campus.{" "}
                    <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                      Connected.
                    </span>
                  </h1>
                  <p className="text-lg sm:text-xl text-foreground/70 leading-relaxed max-w-lg">
                    Access materials, view timetables, and stay updated— all in
                    one unified platform designed for YABATECH students and
                    lecturers.
                  </p>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 4,
                  ease: "easeOut",
                }}
                className="flex flex-col sm:flex-row gap-3 pt-4"
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold group"
                  asChild
                >
                  <Link href="/choose-role" className="flex items-center gap-2">
                    Get Started
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-600 text-white border border-white hover:bg-teal-500 hover:text-black hover:border-black transition-all duration-300"
                  asChild
                >
                  <Link href="/(auth)/choose-role">Login</Link>
                </Button>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 4,
                  ease: "easeOut",
                }}
                className="flex flex-wrap gap-6 pt-4"
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                    <Users className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">1000+</p>
                    <p className="text-xs text-foreground/60">Active Users</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Real-time</p>
                    <p className="text-xs text-foreground/60">Updates</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Right Image  */}
            <div className="relative hidden lg:block">
              <motion.img
                src="/hero1.png"
                alt="Student using YCT Connect+"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 1.5,
                  ease: "easeOut",
                }}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 sm:py-24 bg-gradient-to-r from-blue-600/20 to-teal-500/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Powerful Features for Everyone
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Everything you need to succeed in your academic journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Clock,
                title: "Smart Timetables",
                description:
                  "Never miss a class with intelligent schedule management and notifications",
              },
              {
                icon: Users,
                title: "Better Communication",
                description:
                  "Direct messaging between students and lecturers for seamless collaboration",
              },
              {
                icon: Zap,
                title: "Instant Updates",
                description:
                  "Real-time notifications for announcements, materials, and important events",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ y: -80, opacity: 0, scale: 0.9 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 60,
                  damping: 12,
                  duration: 8,
                  delay: index * 0.5,
                }}
                className="group p-6 sm:p-8 rounded-xl shadow-xl border-border hover:border-blue-500/50 bg-gradient-to-r from-blue-600/20 to-teal-500/20 hover:shadow-lg transition-all duration-300 bg-card hover:bg-muted/50"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600/20 to-teal-500/20 flex items-center justify-center mb-4 group-hover:from-blue-600/30 group-hover:to-teal-500/30 transition-colors">
                  <feature.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-foreground/60">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 sm:py-24 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              How It Works
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                number: "1",
                title: "Sign Up",
                description:
                  "Create your account as a student or lecturer in seconds",
                image: "/student-graduation-cap-icon-blue.jpg",
              },
              {
                number: "2",
                title: "Access Resources",
                description:
                  "Browse courses, materials, and timetables instantly",
                image: "/document-notes-paper-icon-blue.jpg",
              },
              {
                number: "3",
                title: "Stay Connected",
                description: "Receive real-time updates and notifications",
                image: "/notification-bell-icon-blue.jpg",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-teal-500 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <div className="w-24 h-24 flex items-center justify-center rounded-lg bg-muted p-2">
                    <img
                      src={step.image || "/placeholder.svg"}
                      alt={step.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-foreground/60">{step.description}</p>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-8 -right-4 w-8 h-8 text-blue-600">
                    <ArrowRight className="w-full h-full" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Demo Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600/20 to-teal-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image side */}
            <motion.div
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 5,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0"></div>
              <img
                src="/yct-dashboard-pic.png"
                alt="Dashboard preview"
                className="relative w-full h-auto"
              />
            </motion.div>

            {/* Text side */}
            <motion.div
              initial={{ x: 150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 5,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-balance">
                One Dashboard.{" "}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Everything You Need.
                </span>
              </h2>

              <p className="text-lg text-foreground/60 leading-relaxed">
                Materials, announcements, and schedules— all personalized for
                your department and level. Access everything from one intuitive
                dashboard.
              </p>

              <ul className="space-y-3">
                {[
                  "Personalized course materials",
                  "Department-specific announcements",
                  "Your class schedule at a glance",
                  "Performance analytics",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white font-semibold group"
                asChild
              >
                <Link href="/choose-role" className="flex items-center gap-2">
                  View Dashboard Demo
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section id="why-choose" className="py-16 sm:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
                Why Choose YCT Connect+?
              </h2>
              <div className="space-y-4">
                {[
                  "Improves student-lecturer communication",
                  "Saves time searching for notes and materials",
                  "Real-time alerts for all updates and announcements",
                  "Designed specifically for YABATECH students",
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3 group">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle2 className="h-4 w-4 text-white" />
                    </div>
                    <p className="text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex justify-center">
              <div className="absolute inset-0  "></div>
              <img
                src="/student-pic.png"
                alt="Student using mobile app"
                className="relative w-full max-w-md h-auto "
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-blue-600 to-teal-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            Ready to Transform Your Campus Experience?
          </h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students and lecturers already using YCT Connect+
            to stay connected and informed.
          </p>
          <Button
            size="lg"
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold group"
            asChild
          >
            <Link href="/choose-role" className="flex items-center gap-2">
              Get Started Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-gradient-to-r from-blue-600/20 to-teal-500/20 py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-teal-500 rounded-lg flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold">YCT Connect+</span>
              </div>
              <p className="text-sm text-foreground/60">
                Your campus connection platform for YABATECH students and
                lecturers.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                {["Materials", "Timetable", "Announcements"].map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Support</h3>
              <ul className="space-y-2 text-sm">
                {["Help Center", "Contact Us", "FAQs"].map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm">Legal</h3>
              <ul className="space-y-2 text-sm">
                {["Privacy Policy", "Terms of Service"].map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
            <p>
              &copy; {new Date().getFullYear()} YCT Connect+. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Animations */}
      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }

        /* Simplified animations for clear directional movement */
        @keyframes move-left-right {
          0% {
            transform: translateX(-100px);
          }
          50% {
            transform: translateX(100px);
          }
          100% {
            transform: translateX(-100px);
          }
        }

        @keyframes move-up-down {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-80px);
          }
          100% {
            transform: translateY(0px);
          }
        }

        @keyframes move-top-bottom {
          0% {
            transform: translateY(-80px);
          }
          50% {
            transform: translateY(80px);
          }
          100% {
            transform: translateY(-80px);
          }
        }

        .move-left-right {
          animation: move-left-right 8s infinite ease-in-out;
        }

        .move-up-down {
          animation: move-up-down 8s infinite ease-in-out;
        }

        .move-top-bottom {
          animation: move-top-bottom 8s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}
