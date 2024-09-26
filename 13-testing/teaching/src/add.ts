export function add(num1: number, num2: number) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    throw new TypeError("Both arguments should be numbers.");
  }
  return num1 + num2;
}
