import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter Plan",
    price: 500,
    features: [
      "Basic SEO optimization",
      "5 social media posts per week",
      "Monthly performance report",
      "Email support",
    ],
  },
  {
    name: "Business Plan",
    price: 1000,
    features: [
      "Advanced SEO optimization",
      "10 social media posts per week",
      "Weekly performance reports",
      "Priority email & chat support",
      "Content calendar",
    ],
  },
  {
    name: "Premium Plan",
    price: 2000,
    features: [
      "Enterprise SEO strategy",
      "Unlimited social media posts",
      "Real-time analytics dashboard",
      "24/7 priority support",
      "Custom content strategy",
      "Dedicated account manager",
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="bg-card p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow border"
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full" variant="outline">
                Get Started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}