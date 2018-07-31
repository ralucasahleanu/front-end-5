const numbers = [5, 7, -2, 4, 8, 13]
let evens = [] // afiseaza nr pare din array-yul de mai sus


for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 0) {
    evens.push(numbers[i]); //adds numbers[i] at the end of the array
  }
}

console.log('after for', evens);

evens = [];
numbers.forEach(function(currentElement) {
  if (currentElement % 2 === 0) {
    evens.push(currentElement);
  }
});

console.log('after forEach', evens);

evens = [];
numbers.forEach(currentElement => {
  if (currentElement % 2 === 0) {
    evens.push(currentElement);
  }
});

console.log('after forEach with arrow function', evens);

//Lexical this
window.onload = function() {
  const button = document.getElementById("myelement");
  
  this.clicked = 0;
//  button.addEventListener("click", function() {
//    console.log('this inside event handler', this);
 //   this.clicked++;
    // same as this.clicked = this.clicked + 1;
 //   console.log("button clicked" + this.clicked + " times");
//  });
  
 // const that = this;
 // button.addEventListener("click", function() {
  //  console.log('this inside enet handler', this);
  //  that.clicked++;
  //  console.log("button clicked " + that.clicked + " times");
  //});
  
  button.addEventListener("click", () => {
    // same this as in the surrounding scope
    this.clicked++;
    console.log("button clicked " + this.clicked + " times");
  });
};



console.log("---------------- CLASSES -----------------");

class Animal {
  // special method used for object creation and initialization
  //only one per class
  // this is the one that's called when using "new"
  constructor(options) {
    options = options || {};
    
    this.name = options.name;
    this.color = options.color;
    this.weight = options.weight;
    this.height = options.height;
    this.legs = options.legs;
  }
  
  eat() {
    console.log("nom nom, animal is eating");
  }
  
  speak() {
    console.log("hello, animal is speaking");
  }
  
  //define getter method (dar o folosesc ca proprietate)
  get biometricData() {
    return "This animal is " + this.height + " tall and weights " + this.weight + "and the color is " + this.color;
  }
  
  //define setter methods
  set biometricData(data) {
    //data will have the format [height, weight];
    this.height = data[0];
    this.weight = data[1];
    this.color = data[2];
  }
  
  //static method
  static SIT() {
    console.log("Sitting from a static method");
  }
}

const fulga = new Animal ({
  name: "Fulga",
  color: "purple",
  weight: "200kg",
  height: "1.80m",
  legs: 4
});
console.log("Fulga", fulga);

//invoke class method
fulga.eat();
fulga.speak();

//use getter
// nu e metoda, e proprietate
//the value assigned should be in the format expected by the setter
console.log(fulga.biometricData); 

fulga.biometricData = ["2m", "250kg", "pink"]
console.log(fulga);

//calling a static method
//static methods are available on the class directly, not on the instance
Animal.SIT(); // !!!!! NOT Fulga.SIT(); !!!!!

console.log("---------INHERITANCE----------");

//define child class
// it extends Animal super slass / parent class
class Dog extends Animal {
  // constructor function is optional in child class
  constructor(options) {
    //need to call super method
    // it calls the constructor of the parent class
  super(options);
    this.legs = 4;
    this.breed = "Ciobanesc Bucovinean";
  }
  //method overriding
  speck() {
    console.log("Ham Ham");
  }
}

const nero = new Dog({
  name: "Nero",
  color: "white and brown",
  height: "50cm",
  weight: "50kg",
  breed: "Ciobanesc Bucovinean",
});

console.log("Nero", nero);
nero.speak();
nero.eat();








