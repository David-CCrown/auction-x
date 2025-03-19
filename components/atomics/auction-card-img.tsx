import Image from "next/image";

const AuctionCardImg: React.FC<{
  src?: string;
  width?: number;
  height?: number;
}> = ({
  src = "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  width = 300,
  height = 300,
}) => {
  return (
    <Image
      alt="auction display image"
      className="w-full h-full object-cover"
      src={src}
      width={width}
      height={height}
    />
  );
};

export default AuctionCardImg;
