import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { Link, useParams } from "react-router";

// Mock data for job details
const jobDetails = {
    1: {
        id: 1,
        title: "Frontend Developer",
        description:
            "Build modern web applications using React and related technologies. Work with a team of experienced developers on cutting-edge projects.",
        skills: "React, TypeScript, CSS, Next.js",
        timePeriod: "3 months",
        hourlyPay: "$45/hr",
        totalPay: "$21,600",
        requirements: [
            "3+ years of frontend development experience",
            "Strong understanding of React ecosystem",
            "Experience with modern CSS practices",
            "Good communication skills",
        ],
        responsibilities: [
            "Develop new user-facing features",
            "Build reusable components",
            "Optimize applications for performance",
            "Collaborate with backend developers",
        ],
    },
}

export default function JobDetailsPage() {
    const { jobId } = useParams();

    const job = jobDetails[jobId as unknown as keyof typeof jobDetails] || jobDetails[1] // Fallback to first job if ID not found

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl relative">
            <Link to="/student/inbox" className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={32} />
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">{job.title}</h1>
                <div className="h-px bg-gray-200 w-full"></div>
            </div>

            <div className="space-y-6 mb-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700">{job.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Details</h2>
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium">Duration:</span> {job.timePeriod}
                            </p>
                            <p>
                                <span className="font-medium">Hourly Rate:</span> {job.hourlyPay}
                            </p>
                            <p>
                                <span className="font-medium">Total Pay:</span> {job.totalPay}
                            </p>
                            <p>
                                <span className="font-medium">Required Skills:</span> {job.skills}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Requirements</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {job.requirements.map((req, index) => (
                                <li key={index} className="text-gray-700">
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Responsibilities</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {job.responsibilities.map((resp, index) => (
                            <li key={index} className="text-gray-700">
                                {resp}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex justify-center gap-6 mt-12">
                <Button className="bg-green-500 hover:bg-green-600 text-white px-12 py-6 text-lg">Accept Offer</Button>
                <Button variant="destructive" className="px-12 py-6 text-lg">
                    Reject Offer
                </Button>
            </div>
        </div>
    )
}

