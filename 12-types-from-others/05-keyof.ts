{
  type APIResponse = {
    user: {
      userId: string;
      friendList: {
        readonly count: number;
        friends: {
          firstName?: string;
          lastName?: string;
        }[];
      };
    };
  };

  type ResponseKeys = keyof APIResponse;
  type UserKeys = keyof APIResponse["user"];

  type FriendList = {
    [K in keyof APIResponse["user"]["friendList"]]?: APIResponse["user"]["friendList"][K];
  };
}
