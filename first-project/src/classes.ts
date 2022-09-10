// The members of a class (properties & methods) are typed using type annotations, similar to variables.
class Person {
    name: string;
}

const person = new Person();
person.name = "Jane";
console.log(person); // Person { name: 'Jane' }



// Class members also be given special modifiers which affect visibility.

// There are three main visibility modifiers in TypeScript.
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
class Person2 {
    private name: string;

    public constructor(name: string) {
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}
const person2 = new Person2("Bob");
// person2.name = "Judith"; // person.name isn't accessible from outside the class since it's private
console.log(person2.getName());  // Bob



// TypeScript provides a convenient way to define class members in the constructor, by adding a visibility modifiers to the parameter.
class Person3 {
    // ! name is a private member variable
    public constructor(private name: string) { }

    public getName(): string {
        return this.name;
    }
}
const person3 = new Person3("John");
console.log(person3.getName()); // John



// Similar to arrays, the readonly keyword can prevent class members from being changed.
// Read-only properties may have initializers and may be assigned to in constructors within the same class declaration, but otherwise assignments to read-only properties are disallowed.
class Person4 {
    private readonly name: string;

    public constructor(name: string) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }

    public getName(): string {
        return this.name;
    }
}
const person4 = new Person4("Philip");
console.log(person4.getName()); // Philip



// Interfaces can be used to define the type a class must follow through the implements keyword.
interface Shape {
    getArea: () => number;
}

class Rectangle implements Shape {
    // using protected for these members allows access from classes that extend from this class, such as Square
    public constructor(protected readonly width: number, protected readonly height: number) { }

    public getArea(): number {
        return this.width * this.height;
    }

    public toString(): string {
        return `Rectangle[width=${this.width}, height=${this.height}]`;
    }
}
const myRect = new Rectangle(10, 20);
console.log(myRect.getArea()); // 200
// A class can implement multiple interfaces by listing each one after implements, separated by a comma like so: class Rectangle implements Shape, Colored {



// Classes can extend each other through the extends keyword. A class can only extends one other class.
class Square extends Rectangle {
    public constructor(width: number) {
        super(width, width);
    }
    // getArea gets inherited from Rectangle

    // this toString replaces the toString from Rectangle
    public override toString(): string {
        return `Square[width=${this.width}]`;
    }
}
const mySq = new Square(20);
console.log(mySq.getArea()); // 400



// When a class extends another class, it can replace the members of the parent class with the same name.
// Newer versions of TypeScript allow explicitly marking this with the override keyword.
// By default the override keyword is optional when overriding a method, and only helps to prevent accidentally overriding a method that does not exist. Use the setting noImplicitOverride to force it to be used when overriding.
console.log(mySq.toString()); // Square[width=20]



// Classes can be written in a way that allows them to be used as a base class for other classes without having to implement all the members. This is done by using the abstract keyword. Members that are left unimplemented also use the abstract keyword.
// Abstract classes cannot be directly instantiated, as they do not have all their members implemented.
abstract class Polygon {
    public abstract getArea(): number;

    public toString(): string {
        return `Polygon[area=${this.getArea()}]`;
    }
}

class Rectangle2 extends Polygon {
    public constructor(protected readonly width: number, protected readonly height: number) {
        super();
    }

    public getArea(): number {
        return this.width * this.height;
    }
}
const myRect2 = new Rectangle2(10, 20);
console.log(myRect2.getArea()); // 200
console.log(myRect2.toString()); // Polygon[area=200]