// define our tuple
let ourTuple: [number, boolean, string];

// initialize correctly
ourTuple = [5, false, 'Coding God was here'];

console.log(ourTuple);


// initialize incorrectly throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
// Even though we have a boolean, string, and number the order matters in our tuple and will throw an error.
// console.log(ourTuple);

// Tuples only have strongly defined types for the initial values:
// We have no type safety in our tuple for indexes 3+
ourTuple.push('Something new and wrong');

console.log(ourTuple);

// instead use our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];

// throws error as it is readonly.
ourReadonlyTuple.push('Coding God took a day off');


// If you have ever used React before you have worked with tuples more than likely.
// useState returns a tuple of the value and a setter function.
// const [firstName, setFirstName] = useState('Dylan') is a common example.
// Because of the structure we know our first value in our list will be a certain value type in this case a string and the second value a function.


// Named tuples allow us to provide context for our values at each index.
const graph: [x: number, y: number] = [55.2, 41.3];
// Named tuples provide more context for what our index values represent.

// Destructuring Tuples
// Since tuples are arrays we can also destructor them:
const [a, b] = graph;
console.log(a, b);


