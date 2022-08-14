// Explict Type - writing out the type:
let firstName: string = "Bob"; // type string
console.log(typeof firstName);


// Implicit Type - TypeScript will "guess" the type, based on the assigned value:
let lastName = "Dylan";
console.log(typeof lastName);


// TypeScript will throw an error if data types do not match.
let actorName: string = "Brad Pitt"; // type string
actorName = 33; // attempts to re-assign the value to a different type
console.log(actorName);


// Implicit type assignment would have made actressName less noticeable as a string, but both will throw an error:
let actressName = "Angelina Jolie"; // inferred to type string
actressName = 33; // attempts to re-assign the value to a different type
console.log(actressName);


// TypeScript may not always properly infer what the type of a variable may be. In such cases, it will set the type to any which disables type checking:
// Implicit any as JSON.parse doesn't know what type of data it returns so it can be "any" thing... 
const json = JSON.parse("55");
// Most expect json to be an object, but it can be a string or a number like this example
console.log(typeof json);
// This behavior can be disabled by enabling noImplicitAny as an option in a TypeScript's project tsconfig.json. That is a JSON config file for customizing how some of TypeScript behaves.