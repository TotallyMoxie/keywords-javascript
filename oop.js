class Player { // class is a blueprint for creating objects, this is a class constructor
  constructor(name, hp, mp, items) {
    this.name = name;
    this.hp = hp;
    this.mp = mp;
    this.items = items;
  }

  speak (phrase) {  //this is a class method
    console.log(`${this.name} says "${phrase}"`);
  }
}

class Player {}

const hanSolo = new Player("Han Solo", 100, 10, ["blaster"]);
hanSolo.speak("Never tell me the odds!") //Han Solo says "Never tell me the odds!"  connects with the class method above
console.log(hanSolo);
console.log(Object.getOwnPropertyNames(hanSolo));
console.log(Object.getOwnPropertyNames(hanSolo.__proto__));
const nader = new Player ("Nader", 10, 5, ["computer"]);
console.log(nader);
console.log(Object.getOwnPropertyNames(nader));
console.log(Object.getOwnPropertyNames(nader.__proto__));

function AnotherPlayer(name, hp, mp, items) { //this is also a class constructor
  this.name = name;
  this.hp = hp;
  this.mp = mp;
  this.items = items;
}

const darthVader = new AnotherPlayer("Darth Vader", 200, 50, ["lightsaber"]);
console.log(darthVader);
console.log(Object.getOwnPropertyNames(darthVader));
console.log(Object.getOwnPropertyNames(darthVader.__proto__));

