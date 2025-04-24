import { Card, CardContent } from "../ui/card";

interface AuctionCountdownProps {
  title: string;
}

const AuctionCountdown: React.FC<AuctionCountdownProps> = ({ title }) => {
  return (
    <div className="border-b border-accent-foreground pb-4">
      <h3 className="font-bold text-gradient">{title}</h3>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {/* days */}
        <CountDownCard label="days" value={0} />
        {/* hours */}
        <CountDownCard label="hours" value={0} />
        {/* minutes */}
        <CountDownCard label="minutes" value={0} />
        {/* seconds */}
        <CountDownCard label="seconds" value={0} />
      </div>
    </div>
  );
};

const CountDownCard: React.FC<{ label: string; value: number }> = ({
  label,
  value,
}) => {
  return (
    <Card className="p-0">
      <CardContent className="flex flex-col items-center justify-between p-2">
        <h1 className="text-2xl font-bold">{value}</h1>
        <p>{label}</p>
      </CardContent>
    </Card>
  );
};

export default AuctionCountdown;
