import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { agreementContent } from "./agreement-content"
import { useState } from "react";
import { Link } from "react-router";

export default function IPAgreement() {
  const [ipAgreement, setAgreement] = useState(false);
  return (
    <Card className="w-full max-w-3xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Intellectual Property (IP) Agreement</CardTitle>
        <CardDescription>Please read the following agreement carefully.</CardDescription>
      </CardHeader>
      <CardContent>
        {agreementContent.ipAgreement.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        ))}
        <div className="flex items-center space-x-2 mt-6">
          <Checkbox
            id="accept-ip-agreement"
            checked={ipAgreement}
            onCheckedChange={(checked) => setAgreement(checked as boolean)}
          />
          <label
            htmlFor="accept-ip-agreement"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I have read and agree to the Intellectual Property Agreement
          </label>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button asChild>
          <Link to="/freelancer-agreement">Previous: Freelancer Agreement</Link>
        </Button>
        <Button asChild disabled={!ipAgreement}>
          <Link to="/liability-waiver">Next: Liability Waiver</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

