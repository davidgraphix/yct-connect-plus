import { apiFetch } from "./api"

export async function registerStudent(data: {
  fullName: string
  matricNo: string
  department: string
  level: string
  email: string
  password: string
}) {
  const result = await apiFetch("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  })

  localStorage.setItem("token", result.token)
  localStorage.setItem("student", JSON.stringify(result))

  return result
}

export async function loginStudent(email: string, password: string) {
  const result = await apiFetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  })

  localStorage.setItem("token", result.token)
  localStorage.setItem("student", JSON.stringify(result))

  return result
}

export function logoutStudent() {
  localStorage.removeItem("token")
  localStorage.removeItem("student")
}