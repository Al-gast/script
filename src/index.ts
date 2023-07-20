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

//! INTERFACE
console.log("");
console.log("---------- INTERFACE ----------");
console.log("");

type CoreCounter = 2 | 4 | 6 | 8 | 12;
type CoreName = "DualCore" | "QuadCore" | "OctaCore" | "SuperCore"
type Core = CoreCounter | CoreName;
interface IProsessor {
  brand: string;
  baseModel: string;
  modelName: string;
  coreTotal: Core;
}

interface Intel extends IProsessor {
  turboBoost?: boolean; // null safety
}
interface AMD extends IProsessor {
  precisionBoost?: boolean; // null safty
}

function createIntel (prosessor: Intel) : void {
  console.log(
    `Brand = ${prosessor.brand},
     baseModel = ${prosessor.baseModel},
     modelName = ${prosessor.modelName},
     coreTotal = ${prosessor.coreTotal},
     turboBoost = ${prosessor.turboBoost ? prosessor.turboBoost : ""},
    `
  );
}

function createAmd (prosessor: AMD) : void {
  console.log(
    `Brand = ${prosessor.brand},
     baseModel = ${prosessor.baseModel},
     modelName = ${prosessor.modelName},
     coreTotal = ${prosessor.coreTotal},
     turboBoost = ${prosessor.precisionBoost ? prosessor.precisionBoost : ""},
    `
  );
}

