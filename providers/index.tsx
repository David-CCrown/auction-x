"use client";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProviderProps } from "next-themes";
import { WagmiProvider } from "wagmi";
import walletConfig from "@/config/wallet";

const queryClient = new QueryClient();

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <WagmiProvider config={walletConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      <ToastContainer />
    </WagmiProvider>
  );
};

export default Providers;
