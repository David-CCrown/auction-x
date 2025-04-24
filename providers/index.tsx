"use client";

import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProviderProps } from "next-themes";
import { WagmiProvider } from "wagmi";
import walletConfig from "@/providers/wallet";
import { SessionProvider } from "next-auth/react";
import SolanaProvider from "@/providers/wallet";

const queryClient = new QueryClient();

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <SessionProvider>
      <SolanaProvider>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
        <ToastContainer />
      </SolanaProvider>
    </SessionProvider>
  );
};

export default Providers;
