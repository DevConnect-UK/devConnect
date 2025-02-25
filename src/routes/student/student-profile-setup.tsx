import { useState } from "react"
import { useForm, type SubmitHandler } from "react-hook-form"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useNavigate } from "react-router"

const API_URL = import.meta.env.VITE_API_URL;


type ProfileFormData = {
    areasOfWork: string[]
    skills: string[]
    minHours: number
    maxHours: number
}

const areaOptions = ["Frontend Developer", "Backend Developer", "Project Management", "Web Design"]
const skillOptions = [
    "React",
    "Golang",
    "TypeScript",
    "Angular",
    "Svelte",
    "Postman",
    "Vercel",
    "Docker",
    "Figma",
    "Photoshop",
    "Illustrator",
]

export default function StudentProfileSetup() {
    const navigate = useNavigate();
    const [step, setStep] = useState(1)
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm<ProfileFormData>()
    const [isSubmitting, setIsSubmitting] = useState(false)

    // const watchAreasOfWork = watch("areasOfWork", [])
    // const watchSkills = watch("skills", [])

    const onSubmit: SubmitHandler<ProfileFormData> = async (data) => {
        // setIsSubmitting(true)
        // Here you would typically send the data to your API
        console.log("Profile data:", data)

        const response = await fetch(API_URL + "/student/profile", {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error(error);
            setIsSubmitting(false);
            return;
        }

        const json = await response.json();
        console.log(json);
        setTimeout(() => navigate("/student/inbox"), 3000);

        setIsSubmitting(false)
        // Handle response, redirect, etc.


        navigate("/")
    }

    const nextStep = () => setStep(step + 1)
    const prevStep = () => setStep(step - 1)

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Set Up Your Student Profile</h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        {step === 1 && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Pick areas of work</label>
                                {areaOptions.map((area) => (
                                    <div key={area} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={area}
                                            value={area}
                                            {...register("areasOfWork", { required: "Please select at least one area of work" })}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor={area} className="ml-2 block text-sm text-gray-900">
                                            {area}
                                        </label>
                                    </div>
                                ))}
                                {errors.areasOfWork && <p className="mt-2 text-sm text-red-600">{errors.areasOfWork.message}</p>}
                            </div>
                        )}

                        {step === 2 && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Pick languages/tools you are familiar with
                                </label>
                                {skillOptions.map((skill) => (
                                    <div key={skill} className="flex items-center mb-2">
                                        <input
                                            type="checkbox"
                                            id={skill}
                                            value={skill}
                                            {...register("skills", { required: "Please select at least one skill" })}
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor={skill} className="ml-2 block text-sm text-gray-900">
                                            {skill}
                                        </label>
                                    </div>
                                ))}
                                {errors.skills && <p className="mt-2 text-sm text-red-600">{errors.skills.message}</p>}
                            </div>
                        )}

                        {step === 3 && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Set the size of project/time you are willing to commit to working on (hours per week)
                                </label>
                                <div className="flex space-x-4">
                                    <div>
                                        <label htmlFor="minHours" className="block text-sm font-medium text-gray-700">
                                            Minimum Hours
                                        </label>
                                        <input
                                            type="number"
                                            id="minHours"
                                            {...register("minHours", {
                                                required: "Minimum hours is required",
                                                min: { value: 1, message: "Minimum hours must be at least 1" },
                                                max: { value: 168, message: "Minimum hours cannot exceed 168 (24 * 7)" },
                                            })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                        {errors.minHours && <p className="mt-2 text-sm text-red-600">{errors.minHours.message}</p>}
                                    </div>
                                    <div>
                                        <label htmlFor="maxHours" className="block text-sm font-medium text-gray-700">
                                            Maximum Hours
                                        </label>
                                        <input
                                            type="number"
                                            id="maxHours"
                                            {...register("maxHours", {
                                                required: "Maximum hours is required",
                                                min: { value: 1, message: "Maximum hours must be at least 1" },
                                                max: { value: 168, message: "Maximum hours cannot exceed 168 (24 * 7)" },
                                            })}
                                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        />
                                        {errors.maxHours && <p className="mt-2 text-sm text-red-600">{errors.maxHours.message}</p>}
                                    </div>
                                </div>
                            </div>
                        )}

                        <div className="flex justify-between">
                            {step > 1 && (
                                <button
                                    type="button"
                                    onClick={prevStep}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    <ChevronLeft className="mr-2 h-4 w-4" />
                                    Previous
                                </button>
                            )}
                            {step < 3 && (
                                <button
                                    type="button"
                                    onClick={nextStep}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Next
                                    <ChevronRight className="ml-2 h-4 w-4" />
                                </button>
                            )}
                            {step === 3 && (
                                <button
                                    type="submit"
                                    // disabled={isSubmitting}
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    {isSubmitting ? "Creating Profile..." : "Create Profile"}
                                </button>
                            )}
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">Step {step} of 3</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

