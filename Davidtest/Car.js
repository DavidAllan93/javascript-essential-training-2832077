// Creat a class:
class Car {
  constructor(
    // Define paramaters:
    make,
    model,
    colour,
    doors,
    bodytype,
    gearboxM,
    gearboxA,
    petrolTypeP,
    petrolTypeD,
    doorOpen,
    mileage
  ) {
    // Define properties:
    this.make = make;
    this.model = model;
    this.colour = colour;
    this.doors = doors;
    this.bodytype = bodytype;
    this.gearbox = {
      manual: gearboxM,
      automatic: gearboxA,
    };
    this.petrol = {
      petrol: petrolTypeP,
      diesel: petrolTypeD,
    };
    this.doorOpen = doorOpen;
    this.mileage = mileage;
  }
  // Add methods:
  toggleDoor(doorstatus) {
    this.doorOpen = doorstatus;
  }
  newMileage(mileage) {
    this.mileage = mileage;
  }
  getMake() {
    console.log(this.make);
  }
}

export default Car;
