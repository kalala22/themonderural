import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { DonationProvider } from "@/context/DonationContext";
import DonationModal from "@/components/DonationModal";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Le Monde Rural ASBL | Pour un monde rural prospère",
  description:
    "Association Sans But Lucratif dédiée au développement rural en République Démocratique du Congo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <DonationProvider>
          {children}
          <DonationModal />
        </DonationProvider>
      </body>
    </html>
  );
}
