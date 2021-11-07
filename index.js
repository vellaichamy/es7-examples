// Import stylesheets
import './style.css';

// [1, 2, 3].includes(-1)                   // false
// [1, 2, 3].includes(1)                    // true
// [1, 2, 3].includes(3, 4)                 // false
// [1, 2, 3].includes(3, 3)                 // false
// [1, 2, NaN].includes(NaN)                // true
// ['foo', 'bar', 'quux'].includes('foo')   // true
// ['foo', 'bar', 'quux'].includes('norf')  // false
// ==============================================

// es9  Async iterators
function asyncIterator() {
  const array = [1, 2];
  return {
    next: function() {
      if (array.length) {
        return Promise.resolve({
          value: array.shift(),
          done: false
        });
      } else {
        return Promise.resolve({
          done: true
        });
      }
    }
  };
}

var iterator = asyncIterator();

(async function() {
    await iterator.next().then(console.log); // { value: 1, done: false }
    await iterator.next().then(console.log); // { value: 2, done: false }
    await iterator.next().then(console.log); // { done: true }
})();


// Object rest properties =================================

// console.clear();

let { fname, lname, ...rest } = { fname: "Ugra", lname: "UV", location: "Bangalore" };
fname;
lname; 
rest;

// ============================================================

console.clear();
var fruits = {
  
  apple: 10,
  orange: 20,
  grapes: 30,
  pineapple: 40

}

var totalVegetables = Object.values(fruits).reduce((a, b) => a + b);

console.log(totalVegetables);

// =============================
var list = [

  "one",

  "two",

  "three",   // It is valid

]

var obj = {

  one: "1",

  two: "2",

  three: "3", //  It is valid

}

function add(

  one,

  two,

  three, // It is valid

) {

}


for (var [key, val] of Object.entries(fruits)) {

  console.log(key, val);

}

// Array.prototype.includes()
console.clear();
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

const arr = [1, 2, 3, -1, NaN];
const arr01  = ['1', '2', '3'];

console.log(arr.includes(2))       // true
console.log(arr.includes(4) )        // false
console.log(arr.includes(3, 3)  )    // false
console.log(arr.includes(3, -1) )    // true
console.log(arr.includes(NaN)   )  // true
console.log(arr01.includes(3) )  // false


// ES9 Features ====== Rest/Spread properties =================
console.clear();

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

console.log(sum.apply(null, numbers));
// expected output: 6

function sum(x, y, z, n) {
  return x + y + z + n;
}

let numberStore = [0, 1, 2];
let newNumber = 12;
numberStore = [...numberStore, newNumber];


console.log(numbers);


function myFunction(x, y, z) { }
let args = [0, 1, 2];
myFunction.apply(null, args);
console.log(myFunction());

// 

let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

arr1 = [...arr1, ...arr2];
//  arr1 is now [0, 1, 2, 3, 4, 5]
console.log(arr1);

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };
const merge = ( ...objects ) => ( { ...objects } );

let mergedObj1 = merge (obj1, obj2);
// Object { 0: { foo: 'bar', x: 42 }, 1: { foo: 'baz', y: 13 } }

let mergedObj2 = merge ({}, obj1, obj2);
// Object { 0: {}, 1: { foo: 'bar', x: 42 }, 2: { foo: 'baz', y: 13 } }

// ES10 Features =================================

var arr02 = [1, 2, 3, 4];

arr02.flatMap(x => [x, x * 2]);
// is equivalent to
arr02.reduce((acc, x) => acc.concat([x, x * 2]), []);
// [1, 2, 2, 4, 3, 6, 4, 8]
console.log('arr02',arr02);

console.clear()

let arr3 = [1, 2, 3, 4];



console.log('arr3',...arr3.map(x => [x * 2]));
// [[2], [4], [6], [8]]

// [2, 4, 6, 8]
console.log('arr3',arr3.flatMap(x => [x * 2]));
// only one level is flattened

// [[2], [4], [6], [8]]
console.log('arr3',...arr3.flatMap(x => [[x * 2]]));



let arr4 = ["it's Sunny in", "", "Bangalore"];

console.log('arr4',arr4.map(x => x.split(" ")));
// [["it's","Sunny","in"],[""],["Bangalore"]]

console.log('arr4',arr4.flatMap(x => x.split(" ")));
// ["it's","Sunny","in", "", "Bangalore"]

const entries = new Map([
  ['foo', 'bar'],
  ['baz', 42]
]);

const obj04 = Object.fromEntries(entries);

console.log(obj04);
// expected output: Object { foo: "bar", baz: 42 }


const map = new Map([ ['foo', 'bar'], ['baz', 42] ]);
const obj05 = Object.fromEntries(map);
console.log(obj05); // { foo: "bar", baz: 42 }


const object1 = { a: 1, b: 2, c: 3 };

const object2 = Object.fromEntries(
  Object.entries(object1)
  .map(([ key, val ]) => [ key, val * 2 ])
);

console.log(object2);
// { a: 2, b: 4, c: 6 }




const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>ES7 / ES8 / ES9 / ES10  Examples</h1>`;