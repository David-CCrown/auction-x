import { PublicKey, Connection } from "@solana/web3.js";
import { useState } from "react";

export function useCustomWallet() {
  const [publicKey, setPublicKey] = useState(null);
  const [wallets, setWallets] = useState(null);
  const connection = new Connection("https://api.devnet.solana.com");

  
}
