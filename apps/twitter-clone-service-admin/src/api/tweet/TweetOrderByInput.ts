import { SortOrder } from "../../util/SortOrder";

export type TweetOrderByInput = {
  content?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  tweetContent?: SortOrder;
  tweetImageUrl?: SortOrder;
  tweetUser?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
