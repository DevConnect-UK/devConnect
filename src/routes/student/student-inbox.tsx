import { Button } from "@/components/ui/button"
import { Link } from "react-router"

// Mock data for job cards (8 cards for 4 rows of 2)
const jobCards = [
    {
        id: 1,
        title: "Frontend Developer",
        description: "Build modern web applications using React",
        skills: "React, TypeScript, CSS",
        timePeriod: "3 months",
        hourlyPay: "$45/hr",
        totalPay: "$21,600",
    },
    {
        id: 2,
        title: "UX Designer",
        description: "Design user interfaces for enterprise software",
        skills: "Figma, User Research, Prototyping",
        timePeriod: "6 months",
        hourlyPay: "$50/hr",
        totalPay: "$48,000",
    },
].concat(
    Array(6)
        .fill(null)
        .map((_, i) => ({
            id: i + 3,
            title: "Job name",
            description: "Project description goes here",
            skills: "Required skills",
            timePeriod: "2 months",
            hourlyPay: "$40/hr",
            totalPay: "$15,360",
        })),
)

export default function InboxPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-6xl font-bold mb-4 text-center">Inbox</h1>
            <div className="h-1 bg-black w-full mb-12"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {jobCards.map((job) => (
                    <div key={job.id} className="bg-[#f0f0f0] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                        <h2 className="text-3xl font-bold mb-3">{job.title}</h2>
                        <div className="space-y-2 mb-6">
                            <p className="text-gray-700">
                                <span className="font-semibold">Description:</span> {job.description}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Skills:</span> {job.skills}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Duration:</span> {job.timePeriod}
                            </p>
                            <div className="flex justify-between items-center pt-2">
                                <p className="text-gray-700">
                                    <span className="font-semibold">Rate:</span> {job.hourlyPay}
                                </p>
                                <p className="text-gray-700">
                                    <span className="font-semibold">Total:</span> {job.totalPay}
                                </p>
                            </div>
                        </div>
                        <Link
                            to={`/student/inbox/${job.id}`}
                            className="inline-block bg-[#00bfff] text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-[#00a6dd] transition-colors w-full text-center"
                        >
                            more info
                        </Link>
                    </div>
                ))}
            </div>

            <div className="mt-12 flex justify-center gap-4">
                <Button variant="outline" className="px-8 py-2 text-lg">
                    Previous
                </Button>
                <Button variant="outline" className="px-8 py-2 text-lg">
                    Next
                </Button>
            </div>
        </div>
    )
}

