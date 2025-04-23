// Array set up

let fruits = ["apple", "strawberry", "cherry", "orange"];
console.log(fruits);


// Selecting a specific data item inside an array
console.log(fruits[0]);


// Variables can work as index numbers
var three = 3;
console.log(fruits[three]);


// Updating an array
fruits[1] = "Blueberry";
console.log(fruits);


// Adding a new item to the end of an array
fruits.push("strawberry");
console.log(fruits);


// Remove last item in an array
fruits.pop();
console.log(fruits);


// .length = give us the total number of items in an array
console.log(fruits.length);




// Objects

//Comparable to arrays just more detailed

// Syntax for objects

let favoriteCharacter = {
    fName: "Bob",
    lName: "Ro",
    hobbies: ["painting", "Animal Caring"],
    age: 52
};

// Calls entire object data
console.log(favoriteCharacter);

// Calling one of the property values
console.log(`My favorite character's first name is ${favoriteCharacter.fName}`);

// Calling a property that has an ARRAY data value
console.log(`One of my favorite character's hobbies is ${favoriteCharacter.hobbies[1]}`);

// Updating a property value
favoriteCharacter.lName = "Ross";
console.log(favoriteCharacter);

// Adding a new property value
favoriteCharacter.paintingSkills = 100;
console.log(favoriteCharacter);