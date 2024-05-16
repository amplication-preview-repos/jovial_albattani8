import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetUpdateInput = {
  content?: string | null;
  imageUrl?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
  tweetContent?: string | null;
  tweetImageUrl?: string | null;
  tweetUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
