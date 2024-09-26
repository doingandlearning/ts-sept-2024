// Haskell

// Easier to test
// Pure => same input, same output -> no side effects

// Easier to reason about
// Concurrency
// Caching

// TS -> multi-paradigm language

// class

// functions are first class

// 1. Immutability and Purity (pure functions)
// input -> output
// no side effects

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.log(String(isValidEmail("kevin@kevincunningham.co.uk")));

// 2. Higher Order Functions
// - one of more of the arguments is a function
// - it returns a function

const userArray = [
  { name: "Joanne", id: 1 },
  { name: "Ryan", id: 2 },
  { name: "Ridwan", id: 3 },
];

console.log(userArray.map((people) => people.name.toUpperCase()));
console.log(userArray);

// 3. Composition and Composability
const result = userArray
  .filter((item) => item.name.includes("R"))
  .map((item) => item.name.toUpperCase());

console.log(result);
