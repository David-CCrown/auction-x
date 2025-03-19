// "use client";

// import {
//   useAccount,
//   useDisconnect,
//   useEnsAvatar,
//   useEnsName,
//   useConnect,
//   Connector,
// } from "wagmi";
// import { Button } from "../ui/button";
// import { Wallet2Icon } from "lucide-react";
// import { toast } from "react-toastify";

// const WalletConnectBtn = () => {
//   const { connect, connectors } = useConnect();
//   const { isConnected } = useAccount();

//   if (isConnected) {
//     return <Account />;
//   }

//   const handleConnect = ({ connector }: { connector: any }) => {
//     try {
//       connect({ connector });
//     } catch (error: any) {
//       toast.error(error?.message);
//       console.log("Connection Error: ", error);
//     }
//   };

//   return (
//     <div>
//       {connectors.map((connector) => (
//         <Button key={connector.uid} onClick={() => connect({ connector })}>
//           <Wallet2Icon />
//           Connect with {connector.name}
//         </Button>
//       ))}

//       {/* Fallback for no wallets detected */}

//     </div>
//   );

//   //   return (
//   //     <Button
//   //       className="cursor-pointer"
//   //       title="Connect Your wallet to login"
//   //       onClick={() => handleConnect({ connector: connectors[1] })}
//   //       key={connectors[1].uid}
//   //     >
//   //       <Wallet2Icon />
//   //       Connect Wallet
//   //     </Button>
//   //   );
// };

// export default WalletConnectBtn;

// const Account = () => {
//   const { address } = useAccount();
//   const { disconnect } = useDisconnect();
//   const { data: ensName } = useEnsName({ address });
//   const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

//   return (
//     <div>
//       {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
//       {address && (
//         <div>{ensName ? `${ensName} (${address.substring(10)})` : address}</div>
//       )}
//       <Button
//         className="cursor-pointer"
//         onClick={() => {
//           disconnect();
//           localStorage.removeItem("wagmi.store");
//           sessionStorage.removeItem("wagmi.store");
//         }}
//       >
//         Disconnect
//       </Button>
//     </div>
//   );
// };

// src/components/SolanaConnectButton.tsx
"use client";

import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { Button } from "../ui/button";
import { WalletIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogOverlay,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

export default function SolanaConnectButton() {
  const { select, wallets, publicKey, connected, disconnect } = useWallet();
  const [showWalletList, setShowWalletList] = useState(false);

  if (connected && publicKey) {
    return (
      <div className="flex items-center gap-2">
        <span className="text-sm">
          {publicKey.toString().slice(0, 6)}...{publicKey.toString().slice(-4)}
        </span>
        <Button className="cursor-pointer" onClick={() => disconnect()}>
          Disconnect
        </Button>
      </div>
    );
  }

  // Custom wallet dropdown menu
  return (
    <div className="relative">
      <Dialog>
        <DialogOverlay className="z-[999]" />
        <DialogTrigger asChild>
          <Button
            className="font-[600] text-accent-foreground bg-gradient cursor-pointer"
            // onClick={() => setShowWalletList(!showWalletList)}
          >
            <WalletIcon />
            <span className="hidden lg:inline-block">Connect Wallet</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="z-[999] bg-card/70 backdrop-blur-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">
              Connect Wallet
            </DialogTitle>
          </DialogHeader>
        </DialogContent>
      </Dialog>

      {/* {showWalletList && (
        <div className="absolute top-full mt-2 bg-white dark:bg-gray-800 rounded-md shadow-lg p-2 z-10 min-w-[200px]">
          {wallets.map((wallet) => (
            <div
              key={wallet.adapter.name}
              className="flex items-center p-2 rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={() => {
                select(wallet.adapter.name);
                setShowWalletList(false);
              }}
            >
              {wallet.adapter.icon && (
                <img
                  src={wallet.adapter.icon}
                  alt={`${wallet.adapter.name} icon`}
                  width={24}
                  height={24}
                  className="mr-2"
                />
              )}
              {wallet.adapter.name}
            </div>
          ))}
        </div>
      )} */}
    </div>
  );
}
