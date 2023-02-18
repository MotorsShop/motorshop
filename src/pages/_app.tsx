import { GlobalStyle } from "../theme";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";
import Footer from "@/components/Footer/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
  
      <AuthProvider>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
        <Footer/>
      </AuthProvider>

  );
}
