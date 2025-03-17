import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from "class-validator";

export class AuctionDto {
  @IsNotEmpty()
  @IsString()
  title!: string;

  @IsNotEmpty()
  @IsString()
  description!: string;

  @IsNotEmpty()
  @IsString()
  seller!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(20)
  sellerWalletAddress!: string;

  @IsNotEmpty()
  @IsString()
  startTime!: string;

  @IsNotEmpty()
  @IsString()
  endTime!: string;

  @IsNotEmpty()
  @IsEnum({ Active: "Active", Ended: "Ended", Cancelled: "Cancelled" })
  status!: "Active" | "Ended" | "Cancelled";

  @IsOptional()
  category?: string;
}
