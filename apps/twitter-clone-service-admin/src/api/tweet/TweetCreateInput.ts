import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetCreateInput = {
  content?: string | null;
  imageUrl?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
  tweetContent?: string | null;
  tweetImageUrl?: string | null;
  tweetUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
