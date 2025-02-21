import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"

export default function FAQPage() {
    return (
        <div className="mx-auto max-w-4xl px-4 py-16">
            <div className="mb-8 flex flex-col items-center space-y-6">
                <Link to="/" className="self-start">
                    <Button variant="ghost" className="gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Home
                    </Button>
                </Link>
                <h1 className="text-center text-4xl font-bold text-primary">Frequently Asked Questions</h1>
            </div>

            <div className="rounded-lg border border-border bg-card">
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="px-4">Who can participate in DevConnect?</AccordionTrigger>
                        <AccordionContent className="px-4">
                            <div className="overflow-y-auto">
                                University students aged 18 and above can join DevConnect as subcontractors to gain real-world
                                experience and collaborate with businesses. DevConnect is open to businesses looking for tech solutions,
                                students offering development services, and developers seeking collaboration opportunities.
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger className="px-4">How do I become a subcontractor for DevConnect?</AccordionTrigger>
                        <AccordionContent className="px-4">
                            <div className="overflow-y-auto">
                                Students must complete onboarding, including signing an NDA, SOW, and meeting compliance requirements.
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger className="px-4">What documents are required for businesses?</AccordionTrigger>
                        <AccordionContent className="px-4">
                            <div className="overflow-y-auto">
                                <p>Businesses are required to sign the following:</p>
                                <ul className="list-disc pl-6 pt-2">
                                    <li>Non-Disclosure Agreement (NDA)</li>
                                    <li>Statement of Work (SOW)</li>
                                    <li>Data Protection Agreement (DPA)</li>
                                    <li>Insurance & Compliance Document</li>
                                </ul>
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                        <AccordionTrigger className="px-4">How are payments handled?</AccordionTrigger>
                        <AccordionContent className="px-4">
                            <div className="overflow-y-auto">
                                Students can work flexibly from anywhere. Payments are based on hours worked and processed after project
                                completion.
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                        <AccordionTrigger className="px-4">How is confidential information protected?</AccordionTrigger>
                        <AccordionContent className="px-4">
                            <div className="overflow-y-auto">
                                All students sign an NDA to ensure the confidentiality of proprietary information shared during
                                projects.
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                        <AccordionTrigger className="px-4">Can I make changes to the project scope?</AccordionTrigger>
                        <AccordionContent className="px-4">
                            <div className="overflow-y-auto">
                                Any changes to the project scope must be documented and approved by both parties as per the Change
                                Management process in the SOW.
                            </div>
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                        <AccordionTrigger className="px-4">Who do I contact for support or queries?</AccordionTrigger>
                        <AccordionContent className="px-4">
                            <div className="overflow-y-auto">
                                For any questions or support, contact our DevConnect team at{" "}
                                <a href="mailto:rob@chltm.tech" className="text-primary hover:underline">
                                    rob@chltm.tech
                                </a>
                                .
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    )
}

