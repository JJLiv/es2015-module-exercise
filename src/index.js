import {choice, remove} from "./helpers.js"
import fruits from "./fruits.js"

let fruit = choice(fruits);

console.log(`Id like a ${fruit} please`);
console.log(`Here is your ${fruit}.`);
console.log(`Delicious! Can I have another one?`);

let remaining = remove(fruits, fruit);

console.log(`Sorry we only have ${remaining.length} left`);