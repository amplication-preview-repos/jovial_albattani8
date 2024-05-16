import { Like } from "../like/Like";
import { Tweet } from "../tweet/Tweet";

export type User = {
  bio: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  likes?: Array<Like>;
  password: string | null;
  profileImageUrl: string | null;
  tweets?: Array<Tweet>;
  updatedAt: Date;
  username: string | null;
};
