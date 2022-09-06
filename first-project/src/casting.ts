// Casting is the process of overriding a type.

// A straightforward way to cast a variable is using the as keyword, which will directly change the type of the given variable.
let xx: unknown = 'hello';
console.log((xx as string).length); //5



// Casting doesn't actually change the type of the data within the variable, for example the following code with not work as expected since the variable y still holds a number.
let yy: unknown = 4;
console.log((yy as string).length); // prints undefined since numbers don't have a length



// TypeScript will still attempt to typecheck casts to prevent casts that don't seem correct, for example the following will throw a type error since TypeScript knows casting a string to a number doesn't makes sense without converting the data:
console.log((4 as string).length); // Error: Conversion of type 'number' to type 'string' may be a mistake because neither type sufficiently overlaps with the other. If this was intentional, convert the expression to 'unknown' first. // undefined

// The Force casting section below covers how to override this.



// Using <> works the same as casting with as.
let zz: unknown = 'hello';
console.log((<string>zz).length); // 5
// ! This type of casting will not work with TSX, such as when working on React files.



// To override type errors that TypeScript may throw when casting, first cast to unknown, then to the target type.
let newOne = 'hello';
console.log(((newOne as unknown) as number).length); // Property 'length' does not exist on type 'number'. // 5