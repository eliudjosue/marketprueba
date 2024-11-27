/* eslint-disable @next/next/no-img-element */
"use client";

import {
  RocketIcon,
  TrendingUpIcon,
  PenToolIcon,
  DollarSignIcon,
  Code,
  Monitor,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <RocketIcon className="h-14 w-14" />,
    title: "Asesoría de Marketing",
    description:
      "Te brindamos asesoramiento personalizado para una estrategia de marketing eficiente que te permita mostrar el valor de tu servicio.",
  },
  {
    icon: <Code className="h-14 w-14" />,
    title: "Creación de Sitios Web",
    description:
      "Creamos Landing Pages y Sitios web únicos, orientados a la generación de leads para que tus clientes potenciales te conozcan.",
  },
  {
    icon: <Monitor className="h-14 w-14" />,
    title: "Publicidad en Google Ads",
    description:
      "Creación y seguimiento de campañas de búsqueda, display y máximo rendimiento para captar la atención en el momento justo y al público adecuado.",
  },
  {
    icon: <TrendingUpIcon className="h-14 w-14" />,
    title: "Gestión de resultados",
    description:
      "Informes claros y detallados para medir tu ROI y seguir mejorando.",
  },
];

// const pricingPlans = [
//   {
//     name: "Starter Plan",
//     price: "$500",
//     features: ["Basic SEO Optimization", "5 Blog Posts/Month", "Social Media Setup", "Monthly Report"]
//   },
//   {
//     name: "Business Plan",
//     price: "$1000",
//     features: ["Advanced SEO Strategy", "10 Blog Posts/Month", "Social Media Management", "Weekly Reports"]
//   },
//   {
//     name: "Premium Plan",
//     price: "$2000",
//     features: ["Enterprise SEO Suite", "20 Blog Posts/Month", "Full Social Management", "Daily Reports"]
//   }
// ];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-900 via-cyan-800 to-cyan-900">
      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Impulsa tu negocio al siguiente nivel
          </h1>
          <p className="text-xl text-cyan-100 mb-8">
            Creamos sitios web diseñados para captar leads, optimizamos tu
            presencia en Google y ejecutamos campañas de Google Ads efectivas
            para generar más oportunidades de negocio.
          </p>

          <div className="flex gap-4 justify-center">
            {/* <Button size="lg" className="bg-cyan-500 hover:bg-cyan-600">
              Get Started
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="text-white relative overflow-hidden group"
              onClick={() =>
                window.open("https://wa.me/541123878173", "_blank")
              }
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-cyan-400 transition-transform transform translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:scale-105 transition-transform">
                Contáctanos
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-cyan-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cyan-900 mb-12">
            Nuestros servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4 text-cyan-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How we do it */}
      <section id="howwedoit" className="py-20 px-4 bg-cyan-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-cyan-900 mb-8">
              Nuestro proceso es claro y transparente
            </h2>
            <div className="space-y-6">
              {[
                "Consulta inicial: Conversamos sobre tus objetivos y te explicamos cómo podemos ayudarte.",
                "Propuesta personalizada: Te presentamos un plan detallado con todos los servicios incluidos.",
                "Ejecución y seguimiento: Ponemos en marcha tu proyecto y te mantenemos informado en todo momento.",
                "Transferencia de conocimientos: Te enseñamos a gestionar tus herramientas digitales para que tengas el control total.",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-cyan-600 p-2 rounded-full text-white">
                    <RocketIcon className="h-5 w-5" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/piclumen-1732654684385.png"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-cyan-900 mb-12">Pricing Plans</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-xl transition-shadow">
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold text-cyan-600 mb-6">{plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="text-gray-600">{feature}</li>
                  ))}
                </ul>
                <Button className="w-full bg-cyan-600 hover:bg-cyan-700">Select Plan</Button>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Quienes somos*/}
      <section id="about" className="bg-cyan-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Quiénes Somos</h3>
            <p className="text-cyan-200 max-w-2xl mx-auto">
              Somos un equipo apasionado conformado por un desarrollador de
              software y dos especialistas en digitales orientadas a la creación
              de estrategias de marketing innovadoras, eficientes y
              especializadas en poner tu negocio frente a los ojos correctos.
              Nuestro objetivo es crear, conectar e inspirar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Primer miembro */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full bg-cyan-800">
                <img
                  src="eli.jpeg"
                  alt="Desarrollador de software"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mt-4">Eliud Campos</h4>
              <p className="text-cyan-200 text-sm mt-2">
                Desarrollador de software con experiencia en tecnologías
                modernas. Crea soluciones innovadoras que transforman ideas en
                código.
              </p>
            </div>
            {/* Segundo miembro */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full bg-cyan-800">
                <img
                  src="/maru.png"
                  alt="Community Manager 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mt-4">Maru Salazar</h4>
              <p className="text-cyan-200 text-sm mt-2">
                Especialista Digital orientada a la creación de estrategias de
                marketing personalizadas, potenciar marcas y atraer
                potenciales clientes.
              </p>
            </div>
            {/* Tercer miembro */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full bg-cyan-800">
                <img
                  src="gaby.jpeg"
                  alt="Community Manager 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mt-4">Gaby García</h4>
              <p className="text-cyan-200 text-sm mt-2">
                Especialista digital orientada a Paid media y
                Google Ads. Dedicada a la creación de campañas creativas y
                eficientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="choice" className="py-20 px-4 bg-cyan-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/wy-choice-us.webp"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-cyan-900 mb-8">
              Por qué elegirnos?
            </h2>
            <div className="space-y-6">
              {[
                "Soluciones a medida: Diseñamos estrategias de marketing digital que se adaptan a las necesidades únicas de tu negocio.",
                "Tú tienes el control: Te proporcionamos las herramientas y los conocimientos necesarios para que puedas gestionar tus campañas y tomar decisiones informadas.",
                "Adaptabilidad a cualquier presupuesto: Ofrecemos una variedad de paquetes y servicios para que puedas elegir la opción que mejor se ajuste a tus necesidades y presupuesto.",
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="bg-cyan-600 p-2 rounded-full text-white">
                    <RocketIcon className="h-5 w-5" />
                  </div>
                  <p className="text-lg text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
