"use client";

import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import useQueryDialogDisclosure from "@/hooks/use-query-dialog-disclosure";

const AuctionRulesDialog = () => {
  const { isOpen, toggle, open } = useQueryDialogDisclosure({
    searchParam: "auction-rule",
  });

  //   useEffect(() => {
  //     open();
  //   }, []);

  return (
    <Dialog open={isOpen} onOpenChange={toggle}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Auction Viewer Rules</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <b>View-Only Access:</b> You are currently viewing this auction as
              a spectator. You cannot place bids or participate in the auction
              directly.
            </li>
            <li>
              <b>Real-Time Updates:</b> The auction information, including the
              current highest bid and remaining time, will be updated in
              real-time.
            </li>
            <li>
              <b>No Bidding:</b> As a viewer, you do not have the ability to bid
              on any items in this auction.
            </li>
            <li>
              <b>Refresh for Updates:</b> While the page updates automatically,
              you can refresh your browser to ensure you are seeing the most
              up-to-date information.
            </li>
            <li>
              <b>Respectful Viewing:</b> Please be respectful of the auction
              participants and refrain from any disruptive behavior.
            </li>
            <li>
              <b>Auctioneer's Discretion:</b> The auctioneer has the final say
              in all matters related to the auction.
            </li>
            <li>
              <b>No Guarantees:</b> We strive to provide accurate and timely
              information, but we cannot guarantee the accuracy or completeness
              of all data displayed.
            </li>
            <li>
              <b>Technical Issues:</b> In the event of technical difficulties,
              the auctioneer may pause or adjust the auction as needed.
            </li>
            <li>
              <b>Contact Support:</b> If you encounter any issues or have
              questions, please contact our support team.
            </li>
          </ul>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default AuctionRulesDialog;
