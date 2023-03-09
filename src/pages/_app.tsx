import { GlobalStyle } from "../theme";
import type { AppProps } from "next/app";
import { ApiProvider } from "@/contexts/ApiContext";
import ContainerMain from "@/patterns/ContainerMain/ContainerMain";
import { ToastContextProvider } from "@/contexts/ModalContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
  
      <ApiProvider>
        <ToastContextProvider>
          <ContainerMain>
            <GlobalStyle />
            <Component {...pageProps} />
          </ContainerMain>
        </ToastContextProvider>
      </ApiProvider>

  );
}
