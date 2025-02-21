import { Button } from "@/components/ui/button"
import { X, Edit, Trash2 } from "lucide-react"
import { Link, useParams } from "react-router"

// Mock data for project details
const projectDetails = {
    1: {
        id: 1,
        name: "E-commerce Platform Redesign",
        description:
            "Redesign and modernize our existing e-commerce platform to improve user experience and increase conversions.",
        timeStatus: "2 weeks left",
        totalPrice: "$15,000",
        developersFound: "3/4",
        technologies: "React, Node.js, MongoDB",
        projectScope: [
            "Redesign user interface",
            "Improve checkout process",
            "Implement new product recommendation system",
            "Optimize for mobile devices",
        ],
        milestones: ["Wireframe approval", "Frontend development", "Backend integration", "User testing", "Launch"],
    },
}

export default function ProjectDetailsPage() {
    const { id } = useParams();
    const project = projectDetails[id as unknown as keyof typeof projectDetails] || projectDetails[1] // Fallback to first project if ID not found

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl relative">
            <Link to="/business/projects" className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={32} />
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">{project.name}</h1>
                <div className="h-px bg-gray-200 w-full"></div>
            </div>

            <div className="space-y-6 mb-8">
                <div>
                    <h2 className="text-2xl font-semibold mb-2">Description</h2>
                    <p className="text-gray-700">{project.description}</p>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Details</h2>
                        <div className="space-y-2">
                            <p>
                                <span className="font-medium">Status:</span> {project.timeStatus}
                            </p>
                            <p>
                                <span className="font-medium">Total Price:</span> {project.totalPrice}
                            </p>
                            <p>
                                <span className="font-medium">Developers:</span> {project.developersFound}
                            </p>
                            <p>
                                <span className="font-medium">Technologies:</span> {project.technologies}
                            </p>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-2">Project Scope</h2>
                        <ul className="list-disc list-inside space-y-1">
                            {project.projectScope.map((item, index) => (
                                <li key={index} className="text-gray-700">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold mb-2">Milestones</h2>
                    <ul className="list-disc list-inside space-y-1">
                        {project.milestones.map((milestone, index) => (
                            <li key={index} className="text-gray-700">
                                {milestone}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="flex justify-center gap-6 mt-12">
                <Button className="bg-blue-500 hover:bg-blue-600 text-white px-12 py-6 text-lg">
                    <Edit className="w-5 h-5 mr-2" />
                    Edit Project
                </Button>
                <Button variant="destructive" className="px-12 py-6 text-lg">
                    <Trash2 className="w-5 h-5 mr-2" />
                    Delete Project
                </Button>
            </div>
        </div>
    )
}

