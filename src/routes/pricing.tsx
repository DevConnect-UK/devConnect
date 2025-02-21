import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function PricingPage() {
  const pricingData = [
    {
      role: "Data Analyst",
      hourlyRate: "£17 to £25.50",
      totalHours: "200 hours",
      costLower: "£10,200",
      costUpper: "£15,300",
      timeToComplete: "~1.67 weeks",
    },
    {
      role: "Data Entry",
      hourlyRate: "£9 to £15",
      totalHours: "100 hours",
      costLower: "£2,700",
      costUpper: "£4,500",
      timeToComplete: "~0.83 weeks (~5 days)",
    },
    {
      role: "Visualization Creation",
      hourlyRate: "£12.75 to £21.25",
      totalHours: "120 hours",
      costLower: "£4,590",
      costUpper: "£7,650",
      timeToComplete: "~1.0 weeks (~5 days)",
    },
    {
      role: "AI Chatbot",
      hourlyRate: "£17 to £29.75",
      totalHours: "200 hours",
      costLower: "£10,200",
      costUpper: "£17,850",
      timeToComplete: "~1.67 weeks",
    },
    {
      role: "Web Development",
      hourlyRate: "£12.75 to £21.25",
      totalHours: "150 hours",
      costLower: "£5,737.50",
      costUpper: "£9,562.50",
      timeToComplete: "~1.25 weeks",
    },
    {
      role: "Mobile App Development",
      hourlyRate: "£15 to £25",
      totalHours: "200 hours",
      costLower: "£9,000",
      costUpper: "£15,000",
      timeToComplete: "~1.67 weeks",
    },
    {
      role: "Cybersecurity",
      hourlyRate: "£15 to £25",
      totalHours: "200 hours",
      costLower: "£9,000",
      costUpper: "£15,000",
      timeToComplete: "~1.67 weeks",
    },
    {
      role: "Audit",
      hourlyRate: "£15 to £25",
      totalHours: "150 hours",
      costLower: "£6,750",
      costUpper: "£11,250",
      timeToComplete: "~1.25 weeks",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-[#3B62F6] text-white">
        <div className="container mx-auto px-4 py-20">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Our Service Rates</h1>
          <p className="text-lg md:text-xl text-center max-w-2xl mx-auto opacity-90">
            Transparent pricing for quality development services.
          </p>
        </div>
      </div>

      {/* Pricing Cards Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingData.map((item, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl text-primary">{item.role}</CardTitle>
                <CardDescription>Estimated completion time: {item.timeToComplete}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Hourly Rate (After Discount)</div>
                    <div className="font-semibold">{item.hourlyRate}</div>
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground mb-1">Project Duration</div>
                    <div className="font-semibold">{item.totalHours}</div>
                  </div>
                  <div className="pt-4 border-t">
                    <div className="text-sm text-muted-foreground mb-2">Total Project Cost</div>
                    <div className="font-semibold">
                      {item.costLower} - {item.costUpper}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-12 text-center space-y-8">
          <p className="text-sm text-muted-foreground">
            * Rates are subject to change based on project complexity and requirements.
            <br />
            Contact us for detailed quotes and custom project scopes.
          </p>

        </div>
      </div>
    </div>
  )
}

