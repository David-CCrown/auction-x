"use client";

import {
  useAccount,
  useDisconnect,
  useEnsAvatar,
  useEnsName,
  useConnect,
  Connector,
} from "wagmi";
import { Button } from "../ui/button";
import { Wallet2Icon } from "lucide-react";

const WalletConnectBtn = () => {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

  if (isConnected) {
    return <Account />;
  }
  return (
    <Button
      onClick={() => connect({ connector: connectors[0] })}
      key={connectors[0].uid}
    >
      <Wallet2Icon />
      Connect Wallet
    </Button>
  );
};

export default WalletConnectBtn;

const Account = () => {
  const { address } = useAccount();
  const { disconnect } = useDisconnect();
  const { data: ensName } = useEnsName({ address });
  const { data: ensAvatar } = useEnsAvatar({ name: ensName! });

  return (
    <div>
      {ensAvatar && <img alt="ENS Avatar" src={ensAvatar} />}
      {address && <div>{ensName ? `${ensName} (${address})` : address}</div>}
      <Button onClick={() => disconnect()}>Disconnect</Button>
    </div>
  );
};
