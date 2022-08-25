// Try playing around with modifying properties and adding ones to see what happens
const car1: {type: string, model: string, year: number} = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};

console.log(car1);


//Type Inference
// TypeScript can infer the types of properties based on their values.
const car2 = {
    type: "Toyota",
};
car2.type = "Ford"; // no error

car2.type = 2; // Error: Type 'number' is not assignable to type 'string'.

console.log(car2);



// Optional properties are properties that don't have to be defined in the object definition.

// no error on optional property, remove it ("?") and see what happens:
// Error: Property 'mileage' is missing in type '{ type: string; }' but required in type '{ type: string; mileage: number; }'.
const car3: {type: string, mileage?: number} = {
    type: "Toyota"
}
car3.mileage = 2000;
console.log(car3);



// Index signatures can be used for objects without a defined list of properties.
const nameAgeMap: {[index: string]: number} = {};
nameAgeMap.Jack = 25; // no error
nameAgeMap.Mark = "Fifty"; // Error: Type 'string' is not assignable to type 'number'.
console.log(nameAgeMap);

