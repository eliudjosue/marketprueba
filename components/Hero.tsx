import { Button } from "@/components/ui/button";
import { Rocket, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-1/4 top-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute left-1/4 bottom-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <Star className="absolute top-20 right-20 text-yellow-400 animate-pulse" />
        <Star className="absolute bottom-20 left-20 text-yellow-400 animate-pulse" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
            Boost Your Business with Digital Marketing Excellence
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            Drive real business growth with our expert digital marketing strategies.
            Transform your online presence and reach new heights.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="text-lg">
              Get Started
              <Rocket className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}