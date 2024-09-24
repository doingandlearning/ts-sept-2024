// 7 Primitive Types
// boolean, number, string, Symbol, undefined, null, BigInt

let num = 3n + 4n;

// Object

{
  let location: string;
  let name = "Kevin";
  let age: number | string = "42";

  location = "Belfast";
}
{
  // any, void, unknown, never
  let name: any = "Kevin";
  name = true;
  name = {};
  name = [];

  function hello(a: string) {
    return a;
  }

  function doSomethingWithAge(age: unknown) {
    age;

    if (typeof age === "string") {
      age;
      return age;
    }
  }

  function doSomethingElse(): void {}

  function example(x: string | number): boolean {
    if (typeof x === "string") {
      return true;
    } else if (typeof x === "number") {
      return false;
    }
    throw new Error("Unhandled type in function.");
  }
}

{
  const enum STATUS_CODE {
    "OK" = 200,
    "NOT_FOUND" = 404,
    "UNAUTHORIZED" = 403,
  }

  console.log(STATUS_CODE.NOT_FOUND);
}
