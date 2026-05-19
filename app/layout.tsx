import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";

export const metadata: Metadata = {
  title: "Ridhi Sidhi Washing and Service Center | Aligarh Rajasthan",
  description:
    "Car, Bike, Tractor Washing and Servicing Center in Aligarh Rajasthan. High Pressure Wash, Foam Wash, Polishing, Coating, Interior Cleaning, Oil Change, Repair and Servicing.",
  keywords: [
    "Car Wash in Aligarh Rajasthan",
    "Bike Wash Aligarh",
    "Tractor Wash NH522",
    "Foam Wash Aligarh",
    "High Pressure Wash Rajasthan",
    "Car Polishing Aligarh",
    "Interior Cleaning Aligarh",
    "Car Service Center Aligarh",
  ],
  verification: {
    google: "Rks5S_AomvPcP5DX8hv0EMLB33UTF2cun7j0Td7BbN8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="hi">
      <body className="bg-sky-50 text-gray-900">
        <Navbar />
        {children}
        <Footer />

        {/* Floating Buttons */}
        <WhatsAppButton />
        <CallButton />
      </body>
    </html>
  );
}