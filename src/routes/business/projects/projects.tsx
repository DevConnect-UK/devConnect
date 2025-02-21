import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { useState } from "react"
import { Link } from "react-router"

// Define status types and their colors
const statusConfig = {
    error: {
        color: "text-red-500",
        border: "border-red-500",
        label: "Error",
    },
    attention: {
        color: "text-yellow-500",
        border: "border-yellow-500",
        label: "Needs Attention",
    },
    ongoing: {
        color: "text-green-500",
        border: "border-green-500",
        label: "Ongoing",
    },
    planning: {
        color: "text-blue-500",
        border: "border-blue-500",
        label: "Planning/Waiting",
    },
    completed: {
        color: "text-purple-500",
        border: "border-purple-500",
        label: "Completed",
    },
} as const

type StatusType = keyof typeof statusConfig

// Mock data for project cards
const projectCards = [
    {
        id: 1,
        name: "E-commerce Platform Redesign",
        status: "ongoing" as StatusType,
        timeStatus: "2 weeks left",
        totalPrice: "$15,000",
        developersFound: "3/4",
    },
    {
        id: 2,
        name: "Mobile App Development",
        status: "planning" as StatusType,
        timeStatus: "Waiting to start",
        totalPrice: "$30,000",
        developersFound: "2/3",
    },
    {
        id: 3,
        name: "AI Chatbot Integration",
        status: "attention" as StatusType,
        timeStatus: "Need more developers",
        totalPrice: "$20,000",
        developersFound: "1/3",
    },
    {
        id: 4,
        name: "Data Analytics Dashboard",
        status: "error" as StatusType,
        timeStatus: "Missing requirements",
        totalPrice: "$25,000",
        developersFound: "1/3",
    },
    {
        id: 5,
        name: "Security System Update",
        status: "completed" as StatusType,
        timeStatus: "Completed",
        totalPrice: "$18,000",
        developersFound: "2/2",
    },
]

export default function ProjectsPage() {
    const [selectedFilter, setSelectedFilter] = useState<StatusType | "all">("all")

    const filteredProjects =
        selectedFilter === "all" ? projectCards : projectCards.filter((project) => project.status === selectedFilter)

    return (
        <div className="container mx-auto px-4 py-8 max-w-7xl">
            <h1 className="text-6xl font-bold mb-4 text-center">Project Inbox</h1>
            <div className="h-1 bg-black w-full mb-8"></div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
                <Button
                    variant={selectedFilter === "all" ? "default" : "outline"}
                    onClick={() => setSelectedFilter("all")}
                    className="min-w-[120px]"
                >
                    All Projects
                </Button>
                {Object.entries(statusConfig).map(([key, value]) => (
                    <Button
                        key={key}
                        variant={selectedFilter === key ? "default" : "outline"}
                        onClick={() => setSelectedFilter(key as StatusType)}
                        className={`min-w-[120px] ${selectedFilter === key
                            ? value.color.replace("text-", "bg-").replace("-500", "-600") +
                            " hover:bg-" +
                            value.color.split("-")[1] +
                            "-700"
                            : value.color + " hover:bg-" + value.color.split("-")[1] + "-50"
                            }`}
                    >
                        {value.label}
                    </Button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {filteredProjects.map((project) => (
                    <div
                        key={project.id}
                        className={`bg-[#f0f0f0] p-6 rounded-lg shadow-md hover:shadow-lg transition-all
              border-2 ${statusConfig[project.status].border}`}
                    >
                        <h2 className="text-3xl font-bold mb-3">{project.name}</h2>
                        <div className="space-y-2 mb-6">
                            <p className={`font-semibold ${statusConfig[project.status].color}`}>Status: {project.timeStatus}</p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Total Price:</span> {project.totalPrice}
                            </p>
                            <p className="text-gray-700">
                                <span className="font-semibold">Developers:</span> {project.developersFound}
                            </p>
                        </div>
                        <Link
                            to={`/business/projects/${project.id}`}
                            className="inline-block bg-[#00bfff] text-white px-6 py-2 rounded-md text-lg font-medium hover:bg-[#00a6dd] transition-colors w-full text-center"
                        >
                            View Details
                        </Link>
                    </div>
                ))}

                {/* Add New Project Box */}
                <Link
                    to="/business/projects/new"
                    className="bg-[#f0f0f0] rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center min-h-[300px] group border-2 border-[#00bfff]"
                >
                    <Plus className="w-20 h-20 text-[#00bfff] opacity-75 group-hover:opacity-100 transition-opacity" />
                </Link>
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

