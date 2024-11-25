import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BotLayout from '@/components/BotLayout';

const inter = Inter({ subsets: ['latin'] });

<meta name="google-site-verification" content="hCY3mnZu6kZvpEFL56eKbraMYhjlJlv3H0SHkecgKoU" />

export const metadata: Metadata = {
  title: 'Digital Marketing Excellence',
  description: 'Boost your business with our digital marketing solutions',
  // Agrega la metaetiqueta aquí
  metadataBase: new URL('https://www.macawminds.com.ar/'), // Cambia a tu dominio
  verification: {
    google: 'hCY3mnZu6kZvpEFL56eKbraMYhjlJlv3H0SHkecgKoU', // Clave de verificación
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
