const nums: Array<number> = [1, 2, 3, 4];

const newArray: (0 | 1)[] = nums
  .map<boolean>((num) => num > 3)
  .map<0 | 1>((num) => (true ? 1 : 0));

const newNums = [...nums]; // assignment by value or reference?
newNums.push(5);

console.log(nums);
console.log(newNums);

const people = [{ name: "Joanne" }, { name: "Ridwan" }];
// const newPeople = [...people];
// const newPeople = JSON.parse(JSON.stringify(people));
const newPeople = structuredClone(people);

newPeople[0].name = "Richard";

console.log(people);
console.log(newPeople);
