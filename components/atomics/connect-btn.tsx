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
import { toast } from "react-toastify";

const WalletConnectBtn = () => {
  const { connect, connectors } = useConnect();
  const { isConnected } = useAccount();

  if (isConnected) {
    return <Account />;
  }

  const handleConnect = ({ connector }: { connector: any }) => {
    try {
      connect({ connector });
    } catch (error: any) {
      toast.error(error?.message);
      console.log("Connection Error: ", error);
    }
  };

  //   return (
  //     <div className="flex flex-col">
  //       {connectors.map((connector) => {
  //         <Button
  //           onClick={() => connector({ connector })}
  //           key={connector.uid}
  //         ></Button>;
  //       })}
  //     </div>
  //   );

  return (
    <Button
      className="cursor-pointer"
      title="Connect Your wallet to login"
      onClick={() => handleConnect({ connector: connectors[1] })}
      key={connectors[1].uid}
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
      {address && (
        <div>{ensName ? `${ensName} (${address.substring(10)})` : address}</div>
      )}
      <Button
        className="cursor-pointer"
        onClick={() => {
          disconnect();
          localStorage.removeItem("wagmi.store");
          sessionStorage.removeItem("wagmi.store");
        }}
      >
        Disconnect
      </Button>
    </div>
  );
};
