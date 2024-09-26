{
  // Exercise 1: the return type should be the same as the input type

  const returnWhatIPassIn = <T>(t: T) => {
    return t;
  };

  const one = returnWhatIPassIn(1);
  const kevin = returnWhatIPassIn("kevin");
}

{
  // Exercise 2: the return type should be the input type but only a string
  const returnWhatIPassIn = <T extends string>(t: T) => t;

  const one = returnWhatIPassIn(1); // should error
  const kevin = returnWhatIPassIn("kevin");
}

{
  // Exercise 3: Return an object with the same keys as the input object
  // with the correct types.
  function returnBothOfWhatIPassIn<P1, P2>(a: P1, b: P2) {
    return {
      a,
      b,
    };
  }

  const result = returnBothOfWhatIPassIn(true, 1); // Type of result should be
  // {
  //  a: string,
  //  b: number,
  // }
}

{
  // Exercise 4: Return an object which extracts a and b from the object passed
  // in maintaining the types.
  const returnBothOfWhatIPassIn = <P1, P2>(params: { a: P1; b: P2 }) => {
    return {
      first: params.a,
      second: params.b,
    };
  };

  const result = returnBothOfWhatIPassIn({
    a: "a",
    b: 1,
  });
}

{
  // Exercise 5: Add types to this function so that the types of
  // the uses in the test cases is correct and not any.
  interface User {
    username: string;
    email: string;
  }

  function filterItems<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    return arr.filter(predicate);
  }

  // Test cases

  const mixedArray = [
    1,
    "hello",
    { username: "kevin", email: "kevin@kevincunningham.co.uk" },
    2,
    "world",
  ];

  function testAsNumber(item: unknown): item is number {
    return typeof item === "number";
  }
  function testAsString(item: unknown): item is string {
    return typeof item === "string";
  }

  function testAsUser(item: unknown): item is User {
    if (!item) return false;
    return typeof item === "object" && "username" in item && "email" in item;
  }

  const numbers = filterItems(mixedArray, testAsNumber);
  const strings = filterItems(mixedArray, testAsString);
  const users = filterItems(mixedArray, testAsUser);

  // Output the results
  console.log("Numbers: ", numbers); // Expected: [1, 2]
  console.log("Strings: ", strings); // Expected: ['hello', 'world']
  console.log("Users: ", users); // Expected: [{ username: 'kevin', email: 'kevin@kevincunningham.co.uk' }]
}
