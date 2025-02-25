"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate, useSearchParams } from "react-router"
const API_URL = import.meta.env.VITE_API_URL;
type StudentFormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  dateOfBirth: string
}

type BusinessFormData = {
  businessName: string
  email: string
  password: string
}

export default function Signup() {
  const navigate = useNavigate();

  console.log(API_URL);
  const [searchParams] = useSearchParams();

  // Get the type from URL and default to "student" if not provided
  const typeFromUrl = searchParams.get("type") as "student" | "business" | null;

  const [activeTab, setActiveTab] = useState<"student" | "business">(typeFromUrl ?? "student")

  const studentForm = useForm<StudentFormData>()
  const businessForm = useForm<BusinessFormData>()

  const [isSubmitting, setIsSubmitting] = useState(false)

  const onStudentSubmit = async (data: StudentFormData) => {
    // setIsSubmitting(true)
    // Here you would typically send the data to your API
    console.log("Student data:", data)
    // Simulate API call
    // await new Promise((resolve) => setTimeout(resolve, 1000))

    const res = await fetch(API_URL + "/auth/signup_student", {
      method: 'POST',
      mode: "cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    console.log(res);

    if (!res.ok) {
      const error = await res.json()
      console.error(error)
      alert(error.message)
      setIsSubmitting(false)
      studentForm.setError("email", {
        type: "manual",
        message: "Email already exists",
      })
      return
    }

    // TODO handle other errors

    setIsSubmitting(false)
    // Handle response, redirect, etc.
    navigate("/student/profile-setup")
  }

  const onBusinessSubmit = async (data: BusinessFormData) => {
    setIsSubmitting(true)
    // Here you would typically send the data to your API
    console.log("Business data:", data)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSubmitting(false)
    // Handle response, redirect, etc.
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up for DevConnect</h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md text-gray-900">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 font-medium text-sm focus:outline-none ${activeTab === "student"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
              onClick={() => setActiveTab("student")}
            >
              Student
            </button>
            <button
              className={`px-4 py-2 font-medium text-sm focus:outline-none ${activeTab === "business"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
                }`}
              onClick={() => setActiveTab("business")}
            >
              Business
            </button>
          </div>

          {activeTab === "student" ? (
            <form className="space-y-6" onSubmit={studentForm.handleSubmit(onStudentSubmit)}>
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <div className="mt-1">
                  <input
                    id="firstName"
                    type="text"
                    autoComplete="given-name"
                    {...studentForm.register("firstName", { required: "First name is required" })}
                    className="appearance-none text-gray-900 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {studentForm.formState.errors.firstName && (
                    <p className="mt-2 text-sm text-red-600">{studentForm.formState.errors.firstName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                  Last Name
                </label>
                <div className="mt-1">
                  <input
                    id="lastName"
                    type="text"
                    autoComplete="family-name"
                    {...studentForm.register("lastName", { required: "Last name is required" })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {studentForm.formState.errors.lastName && (
                    <p className="mt-2 text-sm text-red-600">{studentForm.formState.errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...studentForm.register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {studentForm.formState.errors.email && (
                    <p className="mt-2 text-sm text-red-600">{studentForm.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    {...studentForm.register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {studentForm.formState.errors.password && (
                    <p className="mt-2 text-sm text-red-600">{studentForm.formState.errors.password.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <div className="mt-1">
                  <input
                    id="dateOfBirth"
                    type="date"
                    autoComplete="bday"
                    {...studentForm.register("dateOfBirth", { required: "Date of birth is required" })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {studentForm.formState.errors.dateOfBirth && (
                    <p className="mt-2 text-sm text-red-600">{studentForm.formState.errors.dateOfBirth.message}</p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isSubmitting ? "Signing up..." : "Sign up as Student"}
                </button>
              </div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={businessForm.handleSubmit(onBusinessSubmit)}>
              <div>
                <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">
                  Business Name
                </label>
                <div className="mt-1">
                  <input
                    id="businessName"
                    type="text"
                    autoComplete="organization"
                    {...businessForm.register("businessName", { required: "Business name is required" })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {businessForm.formState.errors.businessName && (
                    <p className="mt-2 text-sm text-red-600">{businessForm.formState.errors.businessName.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    {...businessForm.register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {businessForm.formState.errors.email && (
                    <p className="mt-2 text-sm text-red-600">{businessForm.formState.errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    type="password"
                    autoComplete="new-password"
                    {...businessForm.register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                      },
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  {businessForm.formState.errors.password && (
                    <p className="mt-2 text-sm text-red-600">{businessForm.formState.errors.password.message}</p>
                  )}
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  // disabled={isSubmitting}
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {isSubmitting ? "Signing up..." : "Sign up as Business"}
                </button>
              </div>
            </form>
          )}

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/login"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

