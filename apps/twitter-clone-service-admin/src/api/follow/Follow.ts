export type Follow = {
  createdAt: Date;
  follower: string | null;
  followerUser: string | null;
  following: string | null;
  followingUser: string | null;
  id: string;
  updatedAt: Date;
};
