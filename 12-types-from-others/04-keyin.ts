type APIResponse = {
  user: {
    userId: string;
    friendList: {
      readonly count?: number;
      friends?: {
        firstName?: string;
        lastName?: string;
        email?: string;
      }[];
    };
  };
};

type FriendList = APIResponse["user"]["friendList"];
type Friends = FriendList["friends"];
