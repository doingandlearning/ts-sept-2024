import { test, expect } from "vitest";
import { add } from "./add";

test("adds numbers correctly", () => {
  // Arrange - Given
  // Act - When
  const result = add(2, 3);
  // Assert - Then
  expect(result).toBe(5);
  expect(result).to.be.equal(5);
});

const testCases = [
  { a: -1, b: 0, result: -1 },
  { a: 0.3, b: 0.2, result: 0.5 },
  { a: -10, b: 3, result: -7 },
  { a: -4, b: -4, result: -8 },
];

for (let testCase of testCases) {
  test(`adds numbers correctly: ${testCase.a} + ${testCase.b} = ${testCase.result}`, () => {
    // Arrange - Given
    // Act - When
    const result = add(testCase.a, testCase.b);
    // Assert - Then
    expect(result).toBe(testCase.result);
    expect(result).to.be.equal(testCase.result);
  });
}

test("error if i try to add non-numbers", () => {
  expect(() => add(true as any, {} as any)).toThrowError(TypeError);
  expect(() => add(true as any, {} as any)).toThrowErrorMatchingInlineSnapshot(
    `[TypeError: Both arguments should be numbers.]`
  );
  expect(() => add(true as any, {} as any)).toThrowErrorMatchingSnapshot();
});
