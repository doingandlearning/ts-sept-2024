interface AllApiResponse {
  statusCode: number;
  status: string;
}

interface UserApiResponse extends AllApiResponse {
  body: {
    username: string;
    email: string;
  };
}

interface FavouriteAPIResponse extends AllApiResponse {
  body: {
    name: string;
    episode: string;
  };
}

interface FavouriteAPIResponse extends AllApiResponse {
  body: {
    // put the right fields!!
  };
}

interface BBCApiResponse<BodyData> {
  statusCode: number;
  status: string;
  error?: string;
  body: {
    ok: boolean;
    data: BodyData;
  };
}

const response: BBCApiResponse<{ user: string; email: string }> = null; //await fetch(). ...response.
