/**
 * Working with arrays
 * @link https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays
 */

let item = "flashlight";
let figure = "batman";

const collection = ["Piggy", item, 5, true, figure];

collection[collection.length] = "Hello";
collection[9] = "at the end";
collection[2] = "camera";

console.log(collection);
