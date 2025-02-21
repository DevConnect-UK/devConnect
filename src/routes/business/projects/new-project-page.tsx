import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { X } from "lucide-react"
import { Link } from "react-router"

export default function NewProjectPage() {
    return (
        <div className="container mx-auto px-4 py-8 max-w-3xl relative">
            <Link to="/business/projects" className="absolute right-4 top-4 p-2 hover:bg-gray-100 rounded-full transition-colors">
                <X size={32} />
            </Link>

            <div className="mb-12">
                <h1 className="text-4xl font-bold mb-4">Create New Project</h1>
                <div className="h-px bg-gray-200 w-full"></div>
            </div>

            <form className="space-y-8">
                <div className="space-y-4">
                    <label className="text-lg font-semibold">Type of Service</label>
                    <Select>
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="website">Website Development</SelectItem>
                            <SelectItem value="data">Data Analysis</SelectItem>
                            <SelectItem value="ai">AI Chatbot Development</SelectItem>
                            <SelectItem value="mobile">Mobile App Development</SelectItem>
                            <SelectItem value="security">Cybersecurity Audit & Penetration Testing</SelectItem>
                            <SelectItem value="it">IT Support & Cloud Setup</SelectItem>
                            <SelectItem value="custom">Custom Projects</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-4">
                    <label className="text-lg font-semibold">Skills Needed</label>
                    <Textarea placeholder="Enter the required skills for this project..." className="min-h-[100px]" />
                </div>

                <div className="space-y-4">
                    <label className="text-lg font-semibold">Description</label>
                    <Textarea placeholder="Provide a detailed description of your project..." className="min-h-[200px]" />
                </div>

                <div className="flex justify-end gap-4 pt-6">
                    <Button variant="outline" type="button" onClick={() => window.history.back()}>
                        Cancel
                    </Button>
                    <Button type="submit" className="bg-[#00bfff] hover:bg-[#00a6dd]">
                        Create Project
                    </Button>
                </div>
            </form>
        </div>
    )
}

