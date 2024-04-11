import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import BackToTop from "@/components/ui/BackToTop";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="relative">
      <Navbar />
      <Component {...pageProps} />
      <Footer />

      {/* scroll to top  */}
      <BackToTop />
    </div>
  );
}
