import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import BackToTop from "@/components/ui/BackToTop";
import TranstackQueryProvider from "@/providers/TranstackQueryProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <TranstackQueryProvider>
      <div className="relative">
        <Navbar />
        <Component {...pageProps} />
        <Footer />

        {/* scroll to top  */}
        <BackToTop />
        <Toaster />
      </div>
    </TranstackQueryProvider>
  );
}
