import { Card, CardContent } from "../ui/card";

const HeroStats = () => {
  const stats = [
    {
      text: "24k+",
      small: "Our Artist",
    },
    {
      text: "40k+",
      small: "Collections",
    },
    {
      text: "1m+",
      small: "Total Sales",
    },
  ];
  return (
    <div className="flex flex-wrap  items-center gap-4">
      {stats.map((stat) => (
        <Card
          className="py-2 bg-card/80 backdrop-blur-md text-center"
          key={stat.small}
        >
          <CardContent>
            <h4 className="font-[500] text-lg">{stat.text}</h4>
            <p>{stat.small}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HeroStats;
