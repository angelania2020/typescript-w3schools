enum CardinalDirections {
    North,
    East,
    South,
    West,
}

let currentDirection = CardinalDirections.North;

// North is the first value so it logs '0'
console.log(currentDirection);

// throws error when commented in as 'North' is not a valid enum
// currentDirection = 'North';
// Error: "North" is not assignable to type 'CardinalDirections'.



// You can set the value of the first numeric enum and have it auto increment from that:
enum CardinalDirections2 {
    North = 1,
    East,
    South,
    West
};

// logs 1 since we initialized the first value to something other than '0'
console.log(CardinalDirections2.North);

// logs 4 as it continued on from the initial '1' value
console.log(CardinalDirections2.West);



// You can assign unique number values for each enum value. Then the values will not be incremented automatically:
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
};

// logs 404
console.log(StatusCodes.NotFound);

// logs 200
console.log(StatusCodes.Success);



// Enums can also contain strings. This is more common than numeric enums, because of their readability and intent.
enum CardinalDirections3 {
    North = "North",
    East = "East",
    South = "South",
    West = "West"
};

// logs "North"
console.log(CardinalDirections3.North);
// logs "West"
console.log(CardinalDirections3.West);


// Technically, you can mix and match string and numeric enum values, but it is recommended not to do so.
