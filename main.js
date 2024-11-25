// function* generatorFunction() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

// const o = generatorFunction();
// const o2 = generatorFunction();
// console.log(o.next());
// console.log(o.next());
// console.log(o2.next());
// console.log(o2.next());

// function* generateId() {
//   let id = 1;
//   while (true) {
//     yield id;
//     id++;
//   }
// }

// const o = generateId();
// while (o.next().done === false) {
//   console.log(o.next());
// }

// function* generatorFunction(array) {
//   for (let i = 0; i < array.length; i++) {
//     yield array[i];
//   }
// }

// const o = generatorFunction([1, 2, 5, 7]);
// console.log(o.next());
// // console.log(o.return(11));
// console.log(o.throw(new Error("Hi err")));
// console.log(o.next());
// console.log(o.next());

function* generateId() {
  let id = 1;
  while (true) {
    const inc = yield id;
    if (inc != null) {
      id += inc;
    } else {
      id++;
    }
  }
}

const o = generateId();

console.log(o.next());
console.log(o.next());
console.log(o.next());
console.log(o.next());
console.log(o.next(11));
console.log(o.next());
