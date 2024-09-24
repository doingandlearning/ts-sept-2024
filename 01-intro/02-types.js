// 7 Primitive Types
// boolean, number, string, Symbol, undefined, null, BigInt
var num = 3n + 4n;
// Object
{
    var location_1;
    var name_1 = "Kevin";
    var age = "42";
    location_1 = "Belfast";
}
{
    // any, void, unknown, never
    var name_2 = "Kevin";
    name_2 = true;
    name_2 = {};
    name_2 = [];
    function hello(a) {
        return a;
    }
    function doSomethingWithAge(age) {
        age;
        if (typeof age === "string") {
            age;
            return age;
        }
    }
    function doSomethingElse() { }
    function example(x) {
        if (typeof x === "string") {
            return true;
        }
        else if (typeof x === "number") {
            return false;
        }
        throw new Error("Unhandled type in function.");
    }
}
{
    console.log(404 /* STATUS_CODE.NOT_FOUND */);
}
