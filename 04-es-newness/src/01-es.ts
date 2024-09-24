// ECMAScript => JavaScript

// ESM

// 1. Default parameters

function areaOfRect(length: number = 1, width = length) {
  return length * width;
}

const rect1 = areaOfRect(3, 4);
console.log(rect1);
const rect2 = areaOfRect(2);
console.log(rect2);

// 2. Template Literal

console.log(
  "Hello, rect1 you have an area of " +
    rect1 +
    " units squared.\n Try getting a longer side.\n\n"
);

console.log(`Hello, rect1 you have an area of ${JSON.stringify({})} units.
	
	Try getting a longer side.
	
	`);

// 3. Object Literals

const coffee = "Nero";
const pencilCase = "Kingfishers";

const newObject = {
  coffee,
  pencilCase,
};

console.log(JSON.stringify(newObject));

// 4. Arrow Functions

function perimeterOfRect(length: number, width: number) {
  return 2 * (width + length);
}

let greet = function (name: string): string {
  return `Hello ${name}`;
};

console.log(greet("Ollie"));

let greet1 = (name: string): string => `Hello ${name}`;

console.log(greet1("Ollie"));

let greet2 = (name: string): string => {
  const newName = name.toUpperCase();
  return `Hello ${newName}`;
};

console.log(greet2("Ollie"));

let greet3 = new Function("name", 'return "Hello " + name');
console.log(greet3("Ollie"));

// 5. var/let/const
function simulateDom() {
  var pseudoDom = {
    button1: {},
    button2: {},
    button3: {},
  };

  for (let i = 1; i <= 3; i++) {
    var element = pseudoDom[`button${i}`];
    element.click = function () {
      return `Item ${i} is clicked.`;
    };
  }

  console.log(pseudoDom.button1.click());
  console.log(pseudoDom.button2.click()); // error! / "4,4,4"
  console.log(pseudoDom.button3.click()); // 1,2,3 / 3,3,3 / 1,1,1 / undefined, undefined, undefined
}

simulateDom();

// var =>

const arr: Array<number> = [];

arr.push(1);
