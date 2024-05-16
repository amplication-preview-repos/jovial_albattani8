import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TweetWhereInput = {
  content?: StringNullableFilter;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  tweetContent?: StringNullableFilter;
  tweetImageUrl?: StringNullableFilter;
  tweetUser?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
