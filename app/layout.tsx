import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BotLayout from "@/components/BotLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MacawMinds",
  description: "",
  metadataBase: new URL("https://www.macawminds.com.ar/"), 
  verification: {
    google: "tj8qy9wsSoAWTcHjvNqkZ-3vT4FT2JBrW3eRixpDlSQ", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Agrega la referencia al favicon */}
        <link rel="icon" type="image/png" href="/favicon.svg" />
        <link rel="canonical" href="https://www.macawminds.com.ar/" />
        <title>Diseño web y marketing digital</title>
        <meta
          name="description"
          content="Creamos sitios web diseñados para captar leads, optimizamos tu presencia en Google y ejecutamos campañas de Google Ads efectivas para generar más oportunidades de negocio."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Diseño web y marketing digital",
              "description":
                "Creamos sitios web diseñados para captar leads, optimizamos tu presencia en Google y ejecutamos campañas de Google Ads efectivas.",
              "provider": {
                "@type": "Organization",
                "name": "Macawminds",
              },
              "areaServed": "Latinoamérica",
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "sales",
                "url": "https://wa.me/541123878173",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <BotLayout>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <Footer />
          </ThemeProvider>
        </BotLayout>
      </body>
    </html>
  );
}
