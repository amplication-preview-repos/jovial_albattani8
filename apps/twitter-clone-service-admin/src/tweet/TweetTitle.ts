import { Tweet as TTweet } from "../api/tweet/Tweet";

export const TWEET_TITLE_FIELD = "imageUrl";

export const TweetTitle = (record: TTweet): string => {
  return record.imageUrl?.toString() || String(record.id);
};
