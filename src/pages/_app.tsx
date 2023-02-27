import { GlobalStyle } from "../theme";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";
import { ApiProvider } from "@/contexts/ApiContext";
import Footer from "@/components/Footer/Footer";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApiProvider>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ApiProvider>
    </AuthProvider>
  );
}
