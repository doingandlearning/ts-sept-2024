function getValue(obj: string): string;
function getValue(obj: number): number;
function getValue<T>(obj: T[], index: number): T;
function getValue(obj: any, index?: number): any {
  if (typeof obj === "string" || typeof obj === "number") {
    return obj;
  } else if (Array.isArray(obj) && typeof index === "number") {
    return obj[index];
  }
  return null; // Fallback case
}

const strVal = getValue("hello"); // Should return "hello"
const numVal = getValue(42); // Should return 42
const arrVal = getValue([10, 20, 30], 1); // Should return 20

export {};
