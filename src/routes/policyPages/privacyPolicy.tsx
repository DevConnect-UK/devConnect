import { Link } from "react-router"
import { Button } from "@/components/ui/button"

export default function PrivacyPage() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl px-4 py-12">
            <div className="space-y-8">
                <Button asChild variant="ghost" className="mb-8">
                    <Link to="/">← Back to Home</Link>
                </Button>

                <h1 className="text-4xl font-bold">Privacy Policy</h1>

                <div className="prose prose-gray max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly to us, information we obtain automatically when you visit
                        our website, and information from third-party sources.
                    </p>

                    <h2>2. How We Use Your Information</h2>
                    <p>
                        We use the information we collect to provide, maintain, and improve our services, to develop new ones, and
                        to protect our company and our users.
                    </p>

                    <h2>3. Information Sharing and Disclosure</h2>
                    <p>
                        We do not share personal information with companies, organizations, or individuals outside of our company
                        except in the following cases: with your consent, for external processing, or for legal reasons.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We work hard to protect our users from unauthorized access to or unauthorized alteration, disclosure, or
                        destruction of information we hold.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>
                        You have the right to access, update, or delete your information and to object to or restrict certain types
                        of processing.
                    </p>
                </div>
            </div>
        </main>
    )
}

