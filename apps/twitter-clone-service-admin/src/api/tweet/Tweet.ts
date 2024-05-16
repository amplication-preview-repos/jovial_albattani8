import { Like } from "../like/Like";
import { User } from "../user/User";

export type Tweet = {
  content: string | null;
  createdAt: Date;
  id: string;
  imageUrl: string | null;
  likes?: Array<Like>;
  tweetContent: string | null;
  tweetImageUrl: string | null;
  tweetUser: string | null;
  updatedAt: Date;
  user?: User | null;
};
