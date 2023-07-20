//! BASIC

console.log("");
console.log("---------- BASIC ----------");
console.log("");

let myName: string = "Ata"
let username: number = 1234
let isDead: boolean = false

// basic array
let myGirlFriend: string[]
myGirlFriend = ["ada", "satu"]

// tuple array
let myOtherGirlFriend: [string, number, boolean]
myOtherGirlFriend = ["ada lagi", 1, true]

console.log({myName});
console.log({username});
console.log({isDead});

//! CUSTOM DATA TYPE

console.log("");
console.log("---------- CUSTOM DATA TYPE ----------");
console.log("");

type FriendType = {
  name: string,
  isKampret: boolean,
  hutang?: number // null safety
}

let temanKita : FriendType = {
  name: "ragil",
  isKampret: true,
  hutang: 50_000
}

console.log({temanKita});

//! FUNCTION

console.log("");
console.log("---------- FUNCTION ----------");
console.log("");

function createNumber() : number {
  return 2
}

const createString = () : string => "Hello You"

console.log(createNumber(), createString());

function add(x: number, y: number) : void {
  console.log(`${x} + ${y}` + " Hasilnya adalah ", x + y);
  
}

function less(x : number, y : number) : string {
  const result : number = x - y;
  return `${x} - ${y} Hasilnya adalah ${result}`
}

add(10, 11)
const response = less(11, 10)
console.log(response);



