import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class UserDto {
  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  username!: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(20)
  walletAddress!: string;
}
