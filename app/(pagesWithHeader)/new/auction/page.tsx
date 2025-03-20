import { Metadata } from "next";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const metadata: Metadata = {
  title: "New Auction",
};

export default function CreateNewAuctionPage() {
  const schema = z.object({
    title: z.string({ message: "Give your auction a nice title" }),
  });

  const { control } = useForm({
    resolver: zodResolver(schema),
  });

  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Basic Information</CardTitle>
        </CardHeader>
        <CardContent>
          <Controller
            control={control}
            name="title"
            render={({ field }) => (
              <div>
                <Label htmlFor="title">Title</Label>
                <Input id="title" {...field} />
              </div>
            )}
          />
        </CardContent>
      </Card>
    </div>
  );
}
