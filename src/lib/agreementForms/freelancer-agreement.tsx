import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react";
import { agreementContent } from "./agreement-content";
import { Link } from "react-router";


export default function FreelancerAgreement() {
  const [isAgreed, setIsAgreed] = useState(false);

  return (
    <Card className="w-full max-w-3xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Freelancer/Independent Contractor Agreement</CardTitle>
        <CardDescription>Please read the following agreement carefully.</CardDescription>
      </CardHeader>
      <CardContent>
        {agreementContent.freelancerAgreement.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
        <div className="flex items-center space-x-2 mt-6">
          <Checkbox
            id="accept-freelancer-agreement"
            checked={isAgreed}
            onCheckedChange={(checked) => setIsAgreed(checked as boolean)}
          />
          <label
            htmlFor="accept-freelancer-agreement"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have read and agree to the Freelancer/Independent Contractor Agreement
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link to="/">Previous: Client Agreement</Link>
        </Button>
        <Button asChild disabled={!isAgreed}>
          <Link to="/ip-agreement">Next: IP Agreement</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

