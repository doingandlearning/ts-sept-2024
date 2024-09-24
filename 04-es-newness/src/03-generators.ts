function* generatorFunction() {
  yield "🍑"; // pause
  yield "🍉";
  yield "🍋";
  yield "🥭";
}

const fruitGenerator = generatorFunction();

const result = fruitGenerator.next();
for (let fruit of fruitGenerator) {
  console.log(fruit);
}
console.log("loop again");
for (let fruit of fruitGenerator) {
  console.log(fruit);
}

// console.log(1, fruitGenerator.next());
// console.log(fruitGenerator.next());
// console.log(fruitGenerator.next());
// console.log(fruitGenerator.next());
// console.log(fruitGenerator.next());
// console.log(fruitGenerator.next());
// console.log(fruitGenerator.next());
// console.log(fruitGenerator.next());
// console.log(fruitGenerator.next());

function* fibon(): Generator<string> {
  let first = 1;
  let second = 1;
  // 1, 2, 3, 5, 8, 13, 21,
  while (true) {
    let sum = second + first;
    if (sum > 1000) {
      console.log("I have been run");
      return;
    }
    yield `The next value is ${sum}`;
    first = second;
    second = sum;
  }
}

const sequence = fibon();
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
console.log(sequence.next());
