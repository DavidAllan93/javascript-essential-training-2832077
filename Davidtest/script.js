import Car from "./Car.js";
import Van from "./Van.js";

const firstVehicle = new Car(
  "Seat",
  "Ibiza",
  "White",
  5,
  "Hatchback",
  true,
  false,
  true,
  false,
  false,
  10000
);

const secondVehicle = new Car(
  "Ford",
  "Fiesta",
  "Blue",
  3,
  "Hatchback",
  true,
  false,
  true,
  false,
  false,
  14000
);

const thirdVehicle = new Van(
  "Ford",
  "Transit",
  "Black",
  3,
  "Compact",
  true,
  false,
  false,
  true,
  false,
  14000
);

const vehicles = [firstVehicle, secondVehicle, thirdVehicle];

console.log(vehicles);

const vehicleMakes = vehicles.map((vehicle) => vehicle.make);

console.log(vehicleMakes);

document.getElementById("main").innerHTML = vehicleMakes;
