import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type UserWhereInput = {
  bio?: StringNullableFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  likes?: LikeListRelationFilter;
  password?: StringNullableFilter;
  profileImageUrl?: StringNullableFilter;
  tweets?: TweetListRelationFilter;
  username?: StringNullableFilter;
};
