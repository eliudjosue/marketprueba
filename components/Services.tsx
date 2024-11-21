import {
  Search,
  TrendingUp,
  PenTool,
  MousePointerClick,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Search,
    title: "SEO Marketing",
    description:
      "Boost your website's visibility and rank higher in search results.",
  },
  {
    icon: TrendingUp,
    title: "Research Topic Trends",
    description:
      "Stay ahead with data-driven insights and market trend analysis.",
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description:
      "Engage your audience with compelling and SEO-optimized content.",
  },
  {
    icon: MousePointerClick,
    title: "Google PPC",
    description:
      "Drive targeted traffic and maximize ROI with PPC campaigns.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital marketing solutions to help your business grow
            and succeed online.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-card p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <Button variant="outline" className="w-full">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}