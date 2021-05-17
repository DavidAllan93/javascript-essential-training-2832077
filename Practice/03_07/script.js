/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

// eslint-disable-next-line no-unused-vars
const car = {
  make: "Volkswagen",
  model: "Golf",
  colour: "white",
  gearbox: {
    manual: "M",
    automatic: "A",
  },
  doors: 5,
  mileage: 5000,
  doorOpen: false,
  toggleDoor: function (doorStatus) {
    this.doorOpen = doorStatus;
  },
  newMileage: function (mileage) {
    this.mileage = mileage;
  },
};

console.log("Mileage before:", car.mileage);

car.newMileage(6000);

console.log("Mileage after:", car.mileage);

