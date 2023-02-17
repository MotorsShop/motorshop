import { GlobalStyle } from "../theme";
import type { AppProps } from "next/app";
import Navbar from "@/components/Navbar/Navbar";
import { AuthProvider } from "@/contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
  
      <AuthProvider>
        <GlobalStyle />
        <Navbar />
        <Component {...pageProps} />
      </AuthProvider>

  );
}
