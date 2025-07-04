import CanvasCursor from "@/components/canvas-cursor";
import Footer from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter, Preahvihear, Source_Serif_4 } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const preahvihear = Preahvihear({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-preahvihear",
});
const source_Serif_4 = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Apsara Bishwokarma",
  description: "Software Engineer/Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={cn(
          inter.variable,
          preahvihear.variable,
          source_Serif_4.variable
        )}
      >
        <Toaster richColors closeButton />
        <div className="fixed left-0 top-0 -z-10 h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-[-9%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          <div className="absolute bottom-0 right-[-9%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        </div>
        <CanvasCursor></CanvasCursor>
        <div className="px-4">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
