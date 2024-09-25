export type ShapeType = "circle" | "rectangle" | "rightTriangle" | "square";

export interface IShape {
  type: "circle" | "rectangle" | "rightTriangle" | "square";
  area?: number;
}

export type Shape = Circle | Rectangle | Square | RightTriangle;

export interface Circle extends IShape {
  type: "circle";
  radius: number;
}

export interface Rectangle extends IShape {
  length: number;
  width: number;
  type: "rectangle";
}
export interface Square extends IShape {
  width: number;
  type: "square";
}

export interface RightTriangle extends IShape {
  base: number;
  height: number;
  type: "rightTriangle";
}
