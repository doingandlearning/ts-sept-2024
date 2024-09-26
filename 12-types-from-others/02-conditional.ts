type IsString<T> = T extends string ? true : false;
type A = IsString<"Hello">; // true
type B = IsString<1234>; // false

abstract class BBCError {
  abstract status: number;
  abstract message: string;
}

class ServerError extends BBCError {
  status = 500;
  constructor(public message: string, ...rest: any[]) {
    super();
  }
}

type ErrorType<T extends { error: BBCError | Error }> =
  T["error"] extends BBCError ? BBCError : Error;

type error = ErrorType<{ error: ServerError }>;
