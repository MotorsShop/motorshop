import { GlobalStyle } from "../theme";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/contexts/AuthContext";
import { ApiProvider } from "@/contexts/ApiContext";
import ContainerMain from "@/patterns/ContainerMain/ContainerMain";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <ApiProvider>
        <ContainerMain>
        <GlobalStyle />
          <Component {...pageProps} />
        </ContainerMain>
      </ApiProvider>
    </AuthProvider>
  );
}
