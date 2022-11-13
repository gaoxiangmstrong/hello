//oop (x, y) => (3,4)
// class Coordination {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
// }

// let coordi1 = new Coordination(4, 5);
// console.log(coordi1);
// console.log(coordi1.x, coordi1.y);

// filght  capacity
class Filght {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  addPassenger(passenger) {
    if (!this.openSeats()) {
      console.log("There is no enough space");
      return false;
    } else {
      this.passengers.push(passenger);
      console.log(`${passenger} has been added to the list`);
    }
  }
  openSeats() {
    return this.capacity - this.passengers.length;
  }
}

let airLine1 = new Filght();
airLine1.capacity = 5;
let people = [
  "gaoxiang1",
  "gaoxiang2",
  "gaoxiang3",
  "gaoxiang4",
  "gaoxiang5",
  "gaoxiang6",
];
people.map((n) => {
  airLine1.addPassenger(n);
});
console.log(airLine1.passengers);
