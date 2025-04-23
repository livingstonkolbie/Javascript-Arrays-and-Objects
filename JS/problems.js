
// Arrays problems

// problem 1
console.log('Array Problems')
console.log('Problem 1');

let favoriteBooks = ["Outwitting the Devil", "The Alchemist", "The Giver", "A Series of Unfortunate Events", "Be More Chill"];
console.log(favoriteBooks);

favoriteBooks.push("Steal Like an Artist");
console.log(favoriteBooks);

favoriteBooks.pop();
console.log(favoriteBooks);

favoriteBooks.unshift("It's All In Your Head");
console.log(favoriteBooks);

favoriteBooks.shift();
console.log(favoriteBooks);



// problem 2
console.log('Problem 2');

let colors = ["green", "blue", "yellow", "orange"];
console.log(colors);

let removedColor = colors.pop()
console.log(removedColor);

console.log(colors);


// problem 3
console.log('Problem 3');

let names = ["Kolbie", "Conner", "Jordan", "Nick", "Kolton"];
console.log(names);

for(i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]} !`);
}    


// Object Problems

console.log('Object Problems')
console.log('Problem 1');

let student = {
    fName: "Jack",
    age: 17,
    grade: "A",
}

console.log(student.fName, student.grade);

console.log(student);


// Problem 2
console.log('Problem 2');

student.grade = "A+";
console.log(`Student's new grade is ${student.grade}`);

student.university = "MSU";
console.log(`The student goes to ${student.university}`);

console.log(student);


// Problem 3
console.log('Problem 3');

let car = {
    make: "Toyota",
    model: "Corolla",
    year: 2022,
}
console.log(car);

let propertyName = "model";


car["color"] = "silver"

console.log(car[propertyName]);
console.log(car);
