"use client";

import type React from "react";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  GraduationCap,
  Mail,
  Lock,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { loginStudent } from "@/lib/auth";
import { toast } from "sonner";

export default function StudentLoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const data = await loginStudent(email, password);

      const token = data.token;

      // Save token
      localStorage.setItem("token", token);

      // Save cookie for middleware
      document.cookie = `token=${token}; path=/`;

      toast.success("Login successful! Redirecting...");

      setTimeout(() => {
        router.push("/student");
      }, 1200);

    } catch (error: any) {
      console.error("LOGIN ERROR:", error);

      toast.error(error.message || "Login failed");

      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
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

            <h2 className="text-3xl font-bold text-white mb-2">
              Student Login
            </h2>

            <p className="text-slate-400">
              Welcome back! Please enter your details
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Email Address
              </label>

              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="student@yabatech.edu.ng"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">
                Password
              </label>

              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-11 pr-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white"
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg flex items-center justify-center gap-2"
              size="lg"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login as Student"
              )}
            </Button>

          </form>

          <div className="mt-6 text-center">
            <p className="text-slate-400">
              Don&apos;t have an account?{" "}
              <Link
                href="/student/register"
                className="text-blue-400 hover:text-blue-300 font-medium"
              >
                Register here
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}