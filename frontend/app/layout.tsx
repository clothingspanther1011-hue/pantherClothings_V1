import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar whatsappNumber="7084721011" />
        {children}
        <Footer whatsappNumber="7084721011" />
      </body>
    </html>
  );
}