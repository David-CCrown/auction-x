// "use client";
// import { http, createConfig } from "wagmi";
// import { mainnet, sepolia } from "wagmi/chains";
// import { injected, metaMask, safe, walletConnect } from "wagmi/connectors";

// const projectId = process.env.PROJECT_ID || "";

// console.log({ projectId });

// const walletConfig = createConfig({
//   chains: [mainnet, sepolia],
//   connectors: [injected(), metaMask(), walletConnect({ projectId }), safe()],
//   transports: {
//     [mainnet.id]: http(),
//     [sepolia.id]: http(),
//   },
// });

// export default walletConfig;

// src/context/SolanaWalletProvider.tsx
// src/context/SolanaWalletProvider.tsx
"use client";

import { FC, ReactNode, useMemo } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
// Import these with "as" to be clear they are React components
import {
  ConnectionProvider as SolanaConnectionProvider,
  WalletProvider as SolanaWalletProvider,
} from "@solana/wallet-adapter-react";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  AlphaWalletAdapter,
  BitgetWalletAdapter,
} from "@solana/wallet-adapter-wallets";

// Rename the component to avoid conflicts
const SolanaProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new AlphaWalletAdapter(),
      new BitgetWalletAdapter(),
    ],
    []
  );

  // Use the renamed imports to be more explicit
  return (
    <SolanaConnectionProvider endpoint={endpoint}>
      <SolanaWalletProvider wallets={wallets} autoConnect>
        {children}
      </SolanaWalletProvider>
    </SolanaConnectionProvider>
  );
};

export default SolanaProvider;
