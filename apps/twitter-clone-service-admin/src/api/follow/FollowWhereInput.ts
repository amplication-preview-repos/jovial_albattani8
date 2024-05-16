import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type FollowWhereInput = {
  follower?: StringNullableFilter;
  followerUser?: StringNullableFilter;
  following?: StringNullableFilter;
  followingUser?: StringNullableFilter;
  id?: StringFilter;
};
