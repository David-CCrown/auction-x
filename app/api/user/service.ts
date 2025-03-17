import { UserDto } from "../(dtos)/user.dto";
import User from "../(schemas)/user.schema";

export const createUser = async (userDto: UserDto) => {
  const userExists = await User.findOne({
    walletAddress: userDto.walletAddress,
  });
  if (userExists) {
    return { error: "User account already exists" };
  }

  const newUser = await User.create(userDto);
  return newUser;
};
