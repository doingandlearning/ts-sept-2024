// <>

{
  function mergeObjects(obj1: any, obj2: any) {
    return { ...obj1, ...obj2 };
  }

  const objA = { role: "Grad Developer" };
  const objB = { location: "Glasgow" };

  const objC = mergeObjects(objA, objB);
}
{
  function genericMerge<TObj1, TObj2>(obj1: TObj1, obj2: TObj2): TObj1 & TObj2 {
    return { ...obj1, ...obj2 };
  }

  const objA = { role: "Grad Developer" };
  const objB = { location: "Glasgow" };
  const objC = genericMerge(objA, objB);
}

{
  function getElement<InputArray>(arr: InputArray[], index: number) {
    return arr[index];
  }

  const myArray = [1, "two", { three: 3 }];
  const element = getElement(myArray, 0);

  const arrayNum = [1, 2, 3];
  const element1 = getElement(arrayNum, 0);
}
