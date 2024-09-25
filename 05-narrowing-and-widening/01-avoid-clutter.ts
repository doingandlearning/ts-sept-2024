interface WhereWhen {
  where: string;
  when: string;
}
interface Person {
  name: string;
  age?: number;
  born: WhereWhen;
  died: WhereWhen;
}

const person: Person = {
  name: "John Doe",
  born: { where: "Belfast", when: "1st January, 1990" },
  died: { where: "Moon", when: "31st December 2050" },
};

person.age = 61; // excess property check
person.name = "Jane Doe";

// function doSomething(person: Person) {
//   person.location = "London";
//   console.log(person);
// }

// doSomething(person);
