import { StarsIcon } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Card, CardContent } from "../ui/card";

const NewsLetter = () => {
  return (
    <div className="w-[85%] py-8 mx-auto mt-8">
      <div className="flex flex-wrap gap-4  items-center justify-between">
        <section className="w-full lg:w-[40%] flex flex-col items-start">
          <div className="flex items-center gap-2 px-4 py-1 rounded-full border text-sm w-fit">
            <StarsIcon size={20} />
            Our Newsletter
          </div>
          <div>
            <h2 className="mt-4 text-xl lg:text-3xl font-[600]">
              Make It Yours Personalize Your Work Today.
            </h2>
            <p className="mt-4">
              Our platform offers a range of tools and features to help you
              customize every aspect of your creation.
            </p>
          </div>
        </section>
        <section className="w-full lg:w-[50%] flex flex-col items-end">
          <Card className="w-full lg:w-[80%] bg-card/70 backdrop-blur-md">
            <CardContent>
              <form className="flex flex-col gap-6 items-end">
                <div className="w-full">
                  <Label>Email</Label>
                  <Input
                    className="mt-2"
                    placeholder="Enter your personal email"
                  />
                </div>
                <div className="w-full">
                  <Label>Anything we should know?</Label>
                  <Input className="mt-2" placeholder="Extra details" />
                </div>
                <Button>Subscribe</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default NewsLetter;
