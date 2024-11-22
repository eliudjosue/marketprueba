import Link from "next/link";
import {
  Rocket,
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Rocket className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">DigiMarkPro</span>
            </Link>
            <p className="text-muted-foreground">
            Agencia de marketing digital líder que ayuda a las empresas a crecer a través de estrategias innovadoras y resultados comprobados.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Nuestros servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="#choice"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Porque elegirnos?
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contactanos</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-muted-foreground">
                  contact@digimarkpro.com
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-semibold mb-4">Escribenos</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-white text-sm border rounded-md focus:ring focus:ring-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-white text-sm border rounded-md focus:ring focus:ring-primary focus:outline-none"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your Message"
                  // rows="3"
                  className="w-full px-4 py-2 bg-white text-sm border rounded-md focus:ring focus:ring-primary focus:outline-none"
                  required
                ></textarea>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="text-white relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-400 transition-transform transform translate-x-full group-hover:translate-x-0"></span>
                <span className="relative z-10 group-hover:scale-105 transition-transform">
                  Enviar
                </span>
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-muted-foreground">
          <p>
            © {currentYear} DigiMarkPro. All rights reserved.{" "}
            <Link href="/terms" className="hover:text-primary">
              Terms & Conditions
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
