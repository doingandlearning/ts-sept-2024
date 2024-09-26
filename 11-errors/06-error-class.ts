class BBCError extends Error {
  constructor(message: string, public code = "BBC_API_ERROR") {
    super(message);
  }
}

try {
  throw new BBCError("Something wrong", "BBC_HOMEPAGE_ERROR");
} catch (error) {
  if (error instanceof BBCError) {
    console.log(error);
    console.log("This was definitely my fault!!!");
  } else {
    console.log("Somehing unexpected went wrong!!");
  }
}
