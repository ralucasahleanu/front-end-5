var person = {
  name:"John Doe", 
  gender:"M", 
  weight: 75.76,
  height: 1.8
};
var BMI = weight / (height * height)
 if (BMI < 18.5) {
        result = "Underweight";
    } else if (BMI < 25) {
        result = "Normal Weight";
    } else if (BMI < 30) {
        result = "Overweight";
    } else {
        result = "Obese";
    }
console.log(person.name + "|" + person.gender + "|" + bmi + "|" + result);

var person1 = {
  name:"Marry Anne", 
  gender:"F", 
  weight: 67.5,
  height: 1.5
};
var BMI = weight / (height * height)
 if (BMI < 18.5) {
        result = "Underweight";
    } else if (BMI < 25) {
        result = "Normal Weight";
    } else if (BMI < 30) {
        result = "Overweight";
    } else {
        result = "Obese";
    }
console.log(person1.name + "|" + person1.gender + "|" + bmi + "|" + result);