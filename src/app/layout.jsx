import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NextProvider from "@/provider/nextAuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "",
    template: "%s ", 
  },
  description: "Empowering Farmers, Smarter Decisions",
};

export default function RootLayout({ children }) {
  return ( 
    
    <NextProvider> 
       
   

    <html lang="en" data-theme="light">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      > 
       <div className="flex flex-col min-h-screen"> 
        <Navbar></Navbar> 
       <div className="container mx-auto p-2 bg-base-200 flex-1">
           {children}
       </div> 
       <Footer></Footer>

       </div>
       
       
      </body>
    </html> 
     </NextProvider>
  );
}
