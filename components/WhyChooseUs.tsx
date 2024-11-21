import Image from "next/image";
import { Shield, Lightbulb, Trophy } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Custom Solutions",
    description:
      "Tailored strategies designed specifically for your business needs",
  },
  {
    icon: Lightbulb,
    title: "Creativity & Excellence",
    description:
      "Innovative approaches combined with proven marketing techniques",
  },
  {
    icon: Trophy,
    title: "Satisfaction Guaranteed",
    description:
      "We're committed to delivering results that exceed your expectations",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Digital Marketing Team"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Us?
            </h2>
            <div className="space-y-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}