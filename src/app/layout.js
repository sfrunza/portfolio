import '@/styles/globals.css';
import { Red_Hat_Text } from '@next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const redHat = Red_Hat_Text({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={redHat.className}>
      <head />
      <body className="h-screen flex flex-col justify-between">
        <Navbar />
        <main className="flex-1 bg-[#CFFDE1]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
