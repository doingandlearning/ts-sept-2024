interface Vector3 {
  x: number;
  y: number;
  z: number;
}

type Axis = "x" | "y" | "z";

function getComponent(vector: Vector3, axis: Axis) {
  return vector[axis];
}

{
  let vec = { x: 10, y: 20, z: 30 };
  const axis: Axis = "x";

  getComponent(vec, axis as Axis);
  getComponent(vec, axis);
  getComponent(vec, axis);
}

{
  const arr1 = [1, 2, 3];
  arr1.push(4);

  const arr2: [number, boolean, string] = [1, true, "jayde"];
  arr2[0] = 10;
  arr2[1] = false;
  arr2.push(4);

  const arr3 = [1, true, "jayde"] as const;
  // readonly only applies on the type level!

  const frozenArray = Object.freeze([1, true, "jayde"]);
  // frozenArray.push(5);
}
