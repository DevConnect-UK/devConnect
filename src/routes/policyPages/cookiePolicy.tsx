import { Button } from "@/components/ui/button"
import { Link } from "react-router"

export default function CookiesPage() {
    return (
        <main className="container mx-auto min-h-screen max-w-3xl px-4 py-12">
            <div className="space-y-8">
                <Button asChild variant="ghost" className="mb-8">
                    <Link to="/">← Back to Home</Link>
                </Button>

                <h1 className="text-4xl font-bold">Cookie Policy</h1>

                <div className="prose prose-gray max-w-none">
                    <p>Last updated: {new Date().toLocaleDateString()}</p>

                    <h2>1. What Are Cookies</h2>
                    <p>
                        Cookies are small text files that are placed on your computer or mobile device when you visit a website.
                        They are widely used to make websites work more efficiently and provide information to the owners of the
                        site.
                    </p>

                    <h2>2. How We Use Cookies</h2>
                    <p>We use cookies for various purposes including:</p>
                    <ul>
                        <li>Essential cookies: Required for the website to function properly</li>
                        <li>Analytics cookies: Help us understand how visitors interact with our website</li>
                        <li>Preference cookies: Remember your settings and preferences</li>
                    </ul>

                    <h2>3. Managing Cookies</h2>
                    <p>
                        Most web browsers allow you to control cookies through their settings preferences. However, limiting cookies
                        may impact your experience using our website.
                    </p>

                    <h2>4. Types of Cookies We Use</h2>
                    <p>
                        We use both session cookies, which expire when you close your browser, and persistent cookies, which stay on
                        your device until you delete them or they expire.
                    </p>

                    <h2>5. Updates to This Policy</h2>
                    <p>
                        We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated
                        revision date.
                    </p>
                </div>
            </div>
        </main>
    )
}

