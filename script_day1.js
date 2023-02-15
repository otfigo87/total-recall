

// !I. Variables & Data Types
// ?A. Q + A

// 1. With the = symbol (assignment operator)
// 2. By selecting the variable and typing a new value
// 3. by using the assignment operator between the two variables
// 4. Declare: create a variable name with no value, Assign: giving that variable a value, Define: means initialize a variable(declaring and assigning).
// 5. Pseudocode is describing the process of writing code using simple words to explain what the code should do.
// 6. For my opinion I would say 60% of the time to think about and understand the problem and 40% to actually typing the code.


// ? B. 
// let firstVariable = "Hello World";
// firstVariable = 100;
// let secondVariable = firstVariable;
// secondVariable = "Hi!";
// console.log(firstVariable); //100
// let yourName="Adam";
// console.log(`Hello, my name is ${yourName}!`)


// ? C. Booleans
//   const a = 4;
//   const b = 53;
//   const c = 57;
//   const d = 16;
//   const e = 'Kevin';
//   console.log(a < b);
//   console.log(c > d);
//   console.log('Name' === 'Name');
//   // FOR THE NEXT TWO, USE ONLY && OR ||
//   console.log(true || false);
//   console.log(false || false || false || false || false || true);
//   console.log(false === false)
//   console.log(e === 'Kevin');
//   console.log(a + b == c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
//   console.log(a * a == d); // note: the answer is a simple arithmetic equation, not something "weird"
//   console.log(48 == '48');


//? D. The Farm
// let animal = "cow";
// if(animal === "cow"){
//     console.log("Mooooooo")
// }else {
//     console.log("Hey! You're not a cow")
// }


//? E. Driver's Ed
// let age = 26;
// if (age >= 16){
//     console.log("Here are the Keys!")
// }else {
//     console.log("Sorry, you're too young.")
// }
//_____________________________________________________________






// ! II. Loops
// ? A. The Basics
// for (let i = 0; i <= 10; i++){
//     console.log(i)
// }
// for (let i = 10; i <= 400; i++) {
//   console.log(i);
// }
// for (let i = 12; i < 4000; i+=3) {
//   console.log(i);
// }


// ? B. Get even
// for (let i = 1; i < 100; i++) {
//   if(i%2 === 0){
//       console.log(`${i} is an even number`)
//     }else {
//       console.log(i);
//   }
// }


// ? C. Give me Five
// for (let i = 1; i <= 100; i++) {
//     if (i % 5 === 0 && i % 3 === 0) {
//         console.log(`I found a ${i}. High Five!`);
//         console.log(`I found a ${i}. Three is a crowd`);
//     } else if (i % 5 === 0) {
//       console.log(`I found a ${i}. High Five!`);
//     } else if (i % 3 === 0) {
//       console.log(`I found a ${i}. Three is a crowd`);
//     }
// }


// ? D. Savings account
// let bank_account = 0;
// for( let i = 0; i <= 10; i++){
//     bank_account += i
// }
// console.log(bank_account)
// for( let i = 0; i <= 100; i++){
//     bank_account += i*2
// }
// console.log(bank_account);
//_____________________________________________________________








// ! III. Arrays & Control Flow
// A. Talk about it:
// 1. Elements.
// 2. Yes every element has his own index.
// 3. list of members


// ? B. Easy Does It

// const quotes = [
//   "Simplicity is the ultimate sophistication.",
//   "Every man dies. Not every man lives",
//   "We need much less than we think we need.",
// ];


// ? C. Accessing elements

// const randomThings = [1, 10, "hello", true]
// console.log(randomThings[0])
// randomThings[2] = "World";
// console.log(randomThings);


// ? D. Change values

// const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"];
// console.log(ourClass[2])
// ourClass[4] = "Octocat";
// ourClass.push("Cloud City")
// console.log(ourClass)

// ? E. Mix It Up

// const myArray = [5, 10, 500, 20];
// myArray.splice(4, 0, "Aegon", "Cloud")
// console.log(myArray);
// myArray.shift(5);
// myArray.unshift("Bob Marley");
// myArray.pop();
// myArray.reverse()
// console.log(myArray);
//Yes the method reverse() mutates the array and returns the reference to the same array reversed

// ? F. Biggie Smalls
// let number = 100;
// if( number < 100){
//     console.log("little number")
// }else {
//     console.log("big number")
// }


// ? G. Monkey in the Middle

// let number = 8;
// if(number < 5){
//     console.log("Little number")
// }else if(number > 10){
//      console.log("Big number");
// }else {
//      console.log("Monkey");
// }


// ? H. What's in Your Closet?
// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];
// const thomsCloset = [
//   [
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],
//   [
//     "grey jeans",
//     "jeans",
//     "PJs",
//   ],
//   [
//     "wool mittens",
//     "wool scarf",
//     "raybans",
//   ],
// ];

// console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`);
// kristynsCloset.splice(6, 0, "raybans")
// console.log(kristynsCloset);
// kristynsCloset[5] = "stained knit hat";
// console.log(kristynsCloset);
// console.log(`Thom is rocking that ${thomsCloset[0][2]} today!`);
// console.log(`Thom is rocking that ${thomsCloset[1][1]} today!`);
// console.log(`Thom is rocking that ${thomsCloset[2][2]} today!`);
// console.log(
//   `Thom is looking fierce in a ${thomsCloset[0][1]}, ${thomsCloset[1][1]} and ${thomsCloset[2][0]} `
// );
// thomsCloset[1][2] = "Footie Pajamas"
// console.log(thomsCloset)

    
//_____________________________________________________________ 








//! IV. Functions
//? A.
// const printGreeting = (name) => {
//     console.log(`Hello ${name}!`)
// }
// printGreeting("Adam")

//? B.
// const printCool = (name) => {
//     return `${name} is cool!`
// }
// console.log(printCool("John"))

//? C.
// const calculateCube = (a) => {
//     return a*a*a
// }
// console.log(calculateCube(5));

//? D.
// const vowelList = ["a", "e", "i", "o", "u"]
// const isVowel = (a) => {
//     if (vowelList.includes(a.toLowerCase())) {
//       return true;
//     } else {
//       return false;
//     }
// }
// console.log(isVowel("A"));

//? E.
// const getTwoLengths = (a, b) => {
//   return [a.length, b.length];
// }
// console.log(getTwoLengths("Hello", "Hi"));

//? F.
// const getMultipleLengths = (...x) => {
//   let lengthsArray = []
//   for (let i = 0; i < x.length; i++) {
//     lengthsArray.push(x[i].length)
//   }
//   return lengthsArray;
// }
// console.log(getMultipleLengths("Hello", "Hi","A"));

//? G.
// const maxOfThreeLengths = (a, b, c) => {
//   if (a === b && b === c){
//     return b
//   } else if( a >= b && a >= c ){
//     return a
//   } else if ( a <= b && b >= c){
//     return b
//   }else {
//     return c
//   }
// }
// console.log(maxOfThreeLengths(6,9,1))

//? H.
// const printLongestWord = (...arg) => {
//   let longestWord = "";
//     for (let i = 0; i < arg.length; i++) {
//       if (arg[i].length > longestWord.length){
//         longestWord = arg[i];
//       }
//     }
//     return longestWord;
// }
// console.log(printLongestWord("apple", "banana", "kiwi", "hahahaha"));



// _____________________________________________________________






// //! V. Objects
// //? A.
// const user = {
//     name: "Adam",
//     email: "adam@gmail.com",
//     age: "30",
//     purchased: []
// }

// //? B.
// user.email = "adam2023@gmail.com";
// user.age++;
// console.log(user)

// //? C.
// user.location = "NYC";
// console.log(user)

// //? D.
// user.purchased.push("carbohydrates")
// user.purchased.push("peace of mind");
// user.purchased.push("Merino jodhpurs");
// console.log(user.purchased[2])

// //? E.
// user.friend = {
//     name: "Grace Hopper",
//     age: 85,
//     location: "Texas",
//     purchased: []
// }
// console.log(user)
// console.log(user.friend.name);
// console.log(user.friend.location);
// user.friend.age = 50;
// user.friend.purchased.push("The One Ring");
// user.friend.purchased.push("A latte");
// console.log(user.friend.purchased[1])


// //? F.
// for (let i = 0; i < user.purchased.length; i++){
//     console.log(user.purchased[i]);
// }
// for (let i = 0; i < user.friend.purchased.length; i++) {
//   console.log(user.friend.purchased[i]);
// }


// //? G.
// const updateUser = () => {
//     user.age++;
//     user.name = user.name.toUpperCase();
// }
// updateUser()
// console.log(user);

// const oldAndLoud = (person) => {
//     person.name = person.name.toUpperCase();
//     person.age++
// }
// oldAndLoud(user)
// console.log(user)


//_____________________________________________________________


// Extra


