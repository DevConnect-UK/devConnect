import { Link } from "react-router"
import { Button } from "@/components/ui/button"

export default function TermsPage() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl px-4 py-12">
            <div className="space-y-8">
                <Button asChild variant="ghost" className="mb-8">
                    <Link to="/">← Back to Home</Link>
                </Button>

                <h1 className="text-4xl font-bold">Terms of Service</h1>

                <div className="prose prose-gray max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. Acceptance of Terms</h2>
                    <p>
                        By accessing and using this website, you accept and agree to be bound by the terms and provision of this
                        agreement.
                    </p>

                    <h2>2. Use License</h2>
                    <p>
                        Permission is granted to temporarily download one copy of the materials (information or software) on this
                        website for personal, non-commercial transitory viewing only.
                    </p>

                    <h2>3. Disclaimer</h2>
                    <p>
                        The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied,
                        and hereby disclaim and negate all other warranties including, without limitation, implied warranties or
                        conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual
                        property or other violation of rights.
                    </p>

                    <h2>4. Limitations</h2>
                    <p>
                        In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for
                        loss of data or profit, or due to business interruption) arising out of the use or inability to use the
                        materials on our website.
                    </p>

                    <h2>5. Revisions and Errata</h2>
                    <p>
                        The materials appearing on our website could include technical, typographical, or photographic errors. We do
                        not warrant that any of the materials on our website are accurate, complete or current.
                    </p>
                </div>
            </div>
        </main>
    )
}

