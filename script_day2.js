
// !Easy Going
// for( let i = 1; i <= 20; i++){
//     console.log(i);
// }

// !Get Even
// for( let i = 0; i <= 200; i+=2){
//     console.log(i);
// }

// !Fizz Buzz
// for( let i = 1; i <= 100; i++){
//     if(i%3 === 0 && i%5 === 0){
//         console.log(`FizzBuzz`)
//     }else if (i%5 === 0){
//         console.log(`Fizz`)
//     }else if (i%3 === 0){
//         console.log(`Buzz`)
//     }else{
//         console.log(i)
//     }
// }

// !Wild Wild Life
// const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"];
// const sharky = ["Sharky", "shark", 20, "Left Coast"];
// const plantee = ["Plantee", "plant", 5000, "Mordor"];
// const porgee = ["Porgee", "Porg", 186, "Ahch-To"];
// const dart = ["D'Art", "Demogorgan Dog", 2, "Upside Down"];

// plantee[2]++
// wolfy[3]= "Gotham City";
// dart.push("Hawkins");
// wolfy[0] = "Gameboy";
// console.log(wolfy)

// !Yell at the Ninja Turtles
// const ninjaList = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"]
// let upperCaseArray = [];
// for(const ninja of ninjaList){
//     upperCaseArray.push(ninja.toUpperCase());
// }
// console.log(upperCaseArray);

// !Methods, Revisited
// const favMovies = [
//   "Jaws",
//   "The Fellowship of the Ring",
//   "Howl's Moving Castle",
//   "Django Unchained",
//   "Cloud Atlas",
//   "The Usual Suspects",
//   "Toy Story",
//   "Conan the Barbarian",
//   "Titanic",
//   "Harry Potter",
//   "Fried Green Tomatoes",
//   "Volver",
//   "Oculus",
//   "Seven",
//   "Black Panther",
//   "Harry Potter",
//   "Imitation of Life",
//   "Snatch",
//   "Fast and Furious",
// ];

// console.log(favMovies.indexOf("Titanic"));
// console.log(favMovies.sort());
// favMovies.pop();
// favMovies.push("Guardians of the Galaxy")
// favMovies.reverse()
// favMovies.shift()
// favMovies.unshift("Chewey")
// const myIndex = favMovies.indexOf("Django Unchained")
// favMovies.splice(myIndex,1,"Avatar")
// const halfArray = favMovies.slice(Math.floor(favMovies.length/2));
// console.log(favMovies)
// console.log(halfArray)
// console.log(halfArray.indexOf("Titanic"))


// !Where is Waldo
// const whereIsWaldo = [
//   ["Timmy", "Frank"],
//   "Eggbert",
//   ["Lucinda", "Jacc", "Neff", "Snoop"],
//   ["Petunia", ["Baked Goods", "Waldo"]],
// ];

// whereIsWaldo.splice(1,1);
// whereIsWaldo[1].splice(2,1,"No One");
// console.log(whereIsWaldo)
// console.log(whereIsWaldo[2][1][1])


// !Excited Kitten
const kittyTalk = [
"...human...why you taking pictures of me?...",
"...the catnip made me do it...",
"...why does the red dot always get away..."
]
let meow = 0;
for(let i = 1; i <= 20; i++){
    if(i%2 === 0){
        meow = Math.floor(Math.random() * kittyTalk.length);
        console.log(kittyTalk[meow])
    }else {
        console.log("Love me, pet me! HSSSSSSS!")
    }
}
// !Find the Median
////////////////////////////////
