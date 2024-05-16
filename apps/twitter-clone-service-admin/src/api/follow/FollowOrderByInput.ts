import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  createdAt?: SortOrder;
  follower?: SortOrder;
  followerUser?: SortOrder;
  following?: SortOrder;
  followingUser?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
