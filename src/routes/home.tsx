"use client"

import { Code, Briefcase, GraduationCap, Clock, DollarSign, Users } from "lucide-react"
import { Link } from "react-router";

// // eslint-disable-next-line no-empty-pattern
// export function meta({ }: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

export default function Home() {
  return (

    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Connecting Student Developers with Real-World Projects
            </h1>
            <p className="text-xl mb-8">
              Gain experience, earn money, and build your portfolio while helping businesses grow
            </p>
            {/* <Link
              to="#"
              className="bg-white text-blue-600 px-6 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 inline-flex items-center"
            >
              Get Started
              <ArrowRight className="ml-2" />
            </Link> */}
          </div>
        </section>

        <section className="pt-6 pb-12 bg-gray-50" id="what-we-do">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Code className="text-blue-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Connect Talent</h3>
                <p className="text-gray-600">
                  We bridge the gap between talented student developers and businesses in need of web development
                  services.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Briefcase className="text-blue-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Facilitate Projects</h3>
                <p className="text-gray-600">
                  Our platform manages project assignments, communication, and deliverables for smooth collaboration.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <GraduationCap className="text-blue-600 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Foster Growth</h3>
                <p className="text-gray-600">
                  We provide opportunities for students to learn, earn, and build their professional portfolios.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" id="why-companies-should-care">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Companies Should Care</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start">
                <DollarSign className="text-green-500 w-8 h-8 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Cost-Effective Solutions</h3>
                  <p className="text-gray-600">
                    Access a pool of talented developers at competitive rates, perfect for startups and small
                    businesses.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="text-blue-500 w-8 h-8 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fresh Perspectives</h3>
                  <p className="text-gray-600">
                    Tap into the innovative ideas and current tech knowledge of student developers.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="text-purple-500 w-8 h-8 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Flexible Engagements</h3>
                  <p className="text-gray-600">
                    Hire for short-term projects or ongoing work, adapting to your business needs.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Code className="text-red-500 w-8 h-8 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Diverse Skill Sets</h3>
                  <p className="text-gray-600">
                    Find developers with expertise in various technologies and frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-50" id="why-students-should-care">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Students Should Participate</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <DollarSign className="text-green-500 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Earn While You Learn</h3>
                <p className="text-gray-600">Get paid for your skills and fund your education or personal projects.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Clock className="text-purple-500 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Flexible Workload</h3>
                <p className="text-gray-600">Choose projects that fit your schedule and academic commitments.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Briefcase className="text-blue-500 w-12 h-12 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Real-World Experience</h3>
                <p className="text-gray-600">
                  Build a strong portfolio with actual client projects and improve your employability.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16" >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Join our platform today and start your journey in professional web development.
            </p>
            <div className="space-x-4">
              <Link
                to="/signup?type=student"
                className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700"
              >
                Sign Up as a Student
              </Link>
              <Link
                to="/signup?type=business"
                className="bg-green-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-700"
              >
                Sign Up as a Business
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}