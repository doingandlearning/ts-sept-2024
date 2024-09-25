import { Circle, Rectangle, Square, RightTriangle, Shape } from "./shape.lib";
const PI = 3.14;

function getCircleArea(circle: Circle) {
  const radius = circle.radius;
  return radius * radius * PI;
}

function getRectangleArea(rectangle: Rectangle) {
  const length = rectangle.length;
  const width = rectangle.width;
  return length * width;
}

function getSquareArea(square: Square) {
  const width = square.width;
  return width * width;
}

function getRightTriangleArea(triangle: RightTriangle) {
  const base = triangle.base;
  const height = triangle.height;
  return (base * height) / 2;
}

function getArea(shape: Shape) {
  switch (shape.type) {
    case "circle":
      shape.area = getCircleArea(shape);
      break;
    case "rectangle":
      shape.area = getRectangleArea(shape);
      break;
    case "square":
      shape.area = getSquareArea(shape);
      break;
    case "rightTriangle":
      shape.area = getRightTriangleArea(shape);
      break;
  }
}

// Client code
const circle: Circle = { type: "circle", radius: 4 };
getArea(circle);
console.log(circle);

const rectangle: Rectangle = { type: "rectangle", length: 7, width: 4 };
getArea(rectangle);
console.log(rectangle);

const square: Square = { type: "square", width: 5 };
getArea(square);
console.log(square);

const rightTriangle: RightTriangle = {
  type: "rightTriangle",
  base: 9,
  height: 4,
};
getArea(rightTriangle);
console.log(rightTriangle);

const triangle: RightTriangle = {
  type: "rightTriangle",
  base: 10,
  height: 5,
};
getArea(triangle);
console.log(triangle);
