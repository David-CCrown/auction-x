import { IconBrandHackerrank } from "@tabler/icons-react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

const PassPrivateAuction = () => {
  return (
    <Dialog modal>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IconBrandHackerrank /> Private Auction
        </Button>
      </DialogTrigger>

      <DialogContent className="z-[999] bg-card/70 backdrop-blur-md">
        <DialogHeader>
          <DialogTitle>Private Auction</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PassPrivateAuction;
