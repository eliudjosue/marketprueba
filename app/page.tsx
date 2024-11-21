"use client";

import { RocketIcon, TrendingUpIcon, PenToolIcon, DollarSignIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <RocketIcon className="h-8 w-8" />,
    title: "SEO Marketing",
    description: "Boost your online visibility with our expert SEO strategies"
  },
  {
    icon: <TrendingUpIcon className="h-8 w-8" />,
    title: "Research Topic Trends",
    description: "Stay ahead with data-driven market insights"
  },
  {
    icon: <PenToolIcon className="h-8 w-8" />,
    title: "Content Writing",
    description: "Engaging content that converts visitors into customers"
  },
  {
    icon: <DollarSignIcon className="h-8 w-8" />,
    title: "Google PPC",
    description: "Maximize ROI with targeted PPC campaigns"
  }
];

const pricingPlans = [
  {
    name: "Starter Plan",
    price: "$500",
    features: ["Basic SEO Optimization", "5 Blog Posts/Month", "Social Media Setup", "Monthly Report"]
  },
  {
    name: "Business Plan",
    price: "$1000",
    features: ["Advanced SEO Strategy", "10 Blog Posts/Month", "Social Media Management", "Weekly Reports"]
  },
  {
    name: "Premium Plan",
    price: "$2000",
    features: ["Enterprise SEO Suite", "20 Blog Posts/Month", "Full Social Management", "Daily Reports"]
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Boost Your Business with Digital Marketing Excellence
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Transform your online presence and drive growth with our comprehensive digital solutions
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4 text-purple-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-purple-600 mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Select Plan</Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-purple-900 mb-8">Why Choose Us?</h2>
            <div className="space-y-6">
              {[
                "Customized solutions tailored to your business needs",
                "Creative excellence and innovative strategies",
                "Guaranteed satisfaction with measurable results"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-purple-600 p-2 rounded-full text-white">
                    <RocketIcon className="h-5 w-5" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-purple-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-purple-200">
              We're a leading digital marketing agency helping businesses grow through innovative online strategies and proven results.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Our Services", "Explore More", "Contact Us"].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-purple-200 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-purple-200">
              <li>contact@example.com</li>
              <li>+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-purple-800 text-center text-purple-200">
          <p>© 2024 Digital Marketing Excellence. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}