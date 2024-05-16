import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { TweetCreateNestedManyWithoutUsersInput } from "./TweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  bio?: string | null;
  email?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password?: string | null;
  profileImageUrl?: string | null;
  tweets?: TweetCreateNestedManyWithoutUsersInput;
  username?: string | null;
};
