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

console.clear();

let { fname, lname, ...rest } = { fname: "Ugra", lname: "UV", location: "Bangalore" };
fname; //"Hemanth"
lname; //"HM"
rest; // {location: "Earth", type: "Human"}

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>ES7 / ECMAScript 2016  Examples</h1>`;