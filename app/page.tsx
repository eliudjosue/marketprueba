"use client";

import {
  RocketIcon,
  TrendingUpIcon,
  PenToolIcon,
  DollarSignIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: <RocketIcon className="h-8 w-8" />,
    title: "Publicidad en Google Ads",
    description:
      "Campañas de búsqueda, display y remarketing para captar la atención en el momento justo.",
  },
  {
    icon: <PenToolIcon className="h-8 w-8" />,
    title: "SaaS para PYMEs",
    description:
      "Herramientas integradas para gestionar prospectos, analizar datos y automatizar procesos de marketing",
  },
  {
    icon: <DollarSignIcon className="h-8 w-8" />,
    title: "Consultoría estratégica",
    description:
      "Sesiones personalizadas para optimizar tus estrategias de marketing digital.",
  },
  {
    icon: <TrendingUpIcon className="h-8 w-8" />,
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
    <main className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900">
      {/* Hero Section */}
      <section id="inicio" className="relative pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Encuentra a tus clientes ideales Tu negocio merece llegar a las
            personas adecuadas.
          </h1>
          <p className="text-xl text-purple-100 mb-8">
            Con nuestra tecnología avanzada y campañas personalizadas
          </p>
          <p className="text-xl text-purple-100 mb-8">
            Ya no es cuestión de &quot;si te ven&quot;, sino de quién te ve y
            cómo reacciona.
          </p>
          <div className="flex gap-4 justify-center">
            {/* <Button size="lg" className="bg-purple-500 hover:bg-purple-600">
              Get Started
            </Button> */}
            <Button
              size="lg"
              variant="outline"
              className="text-white relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transition-transform transform translate-x-full group-hover:translate-x-0"></span>
              <span className="relative z-10 group-hover:scale-105 transition-transform">
                Contáctanos
              </span>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
            Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-center mb-4 text-purple-600">
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
      <section id="howwedoit" className="py-20 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-purple-900 mb-8">
              Como lo hacemos?
            </h2>
            <div className="space-y-6">
              {[
                "Análisis profundo de tu negocio: Identificamos tus metas y desafíos específicos.",
                "Estrategias personalizadas: Diseñamos planes a medida basados en tus objetivos.",
                "Campañas inteligentes: Optimizamos tus anuncios en Google y Meta Ads para maximizar resultados con la menor inversión.",
                "Tecnología SaaS intuitiva: Te damos herramientas para monitorear resultados en tiempo real, simplificando tus decisiones.",
                "Optimización constante: Analizamos métricas y ajustamos en cada etapa para garantizar un crecimiento sostenido.",
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
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2R-KEM4SqIz31n8AcNjTbNypCvYX9AG5Y7Q&s"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {/* <section className="py-20 px-4 bg-white">
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
      </section> */}

      {/* Quienes somos*/}
      <section id="about" className="bg-purple-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-6">Quiénes Somos</h3>
            <p className="text-purple-200 max-w-2xl mx-auto">
              Somos un equipo apasionado conformado por un desarrollador de
              software y dos community managers, emprendedores dedicados a
              transformar ideas en realidades digitales. Nuestro objetivo es
              crear, conectar e inspirar.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Primer miembro */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full bg-purple-800">
                <img
                  src="ruta-a-la-foto-del-desarrollador.jpg"
                  alt="Desarrollador de software"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mt-4">Eliud Campos</h4>
              <p className="text-purple-200 text-sm mt-2">
                Desarrollador de software con experiencia en tecnologías
                modernas. Crea soluciones innovadoras que transforman ideas en
                código.
              </p>
            </div>
            {/* Segundo miembro */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full bg-purple-800">
                <img
                  src="ruta-a-la-foto-del-primer-community-manager.jpg"
                  alt="Community Manager 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mt-4">Maru Salazar</h4>
              <p className="text-purple-200 text-sm mt-2">
                Especialista Digital en estrategias de marketing que impulsa
                marcas a través de marketing innovador y campañas efectivas.
              </p>
            </div>
            {/* Tercer miembro */}
            <div className="text-center">
              <div className="w-32 h-32 mx-auto overflow-hidden rounded-full bg-purple-800">
                <img
                  src="ruta-a-la-foto-del-segundo-community-manager.jpg"
                  alt="Community Manager 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h4 className="text-xl font-bold mt-4">Gaby García</h4>
              <p className="text-purple-200 text-sm mt-2">
                Especialista Digital y Paid media Manager que optimiza campañas
                digitales para maximizar el alcance y los resultados de las
                marcas
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="choice" className="py-20 px-4 bg-purple-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80"
              alt="Team working"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-purple-900 mb-8">
              Porque elegirnos?
            </h2>
            <div className="space-y-6">
              {[
                "Resultados medibles desde el día 1 Confiamos en la calidad de nuestro trabajo, y por eso te mostramos los resultados de manera transparente desde el primer momento.",
                "Soluciones diseñadas para PYMEs Entendemos tus desafíos como emprendedor. Diseñamos servicios y herramientas accesibles y eficaces para maximizar tu presupuesto.",
                "Expertos certificados Nuestro equipo cuenta con certificaciones oficiales en Google Ads, Meta Ads y desarrollo SaaS, garantizando experiencia y profesionalismo.",
                "Atención personalizada No eres solo un cliente. Nos convertimos en un aliado estratégico, disponible para atender tus necesidades y ajustar estrategias a medida que tu negocio crece.",
                "Tecnología avanzada Nuestro SaaS es intuitivo, potente y diseñado para facilitar tu trabajo, permitiéndote enfocarte en lo que mejor haces: tu negocio.",
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
    </main>
  );
}
