var person1  = {
  name: "Ana",
  gender: "F",
  height: 1.75,
  weight: 55
};
var person2  = {
  name: "Ion",
  gender: "M",
  height: 1.85,
  weight: 95
};
//list of persons
var persons = [person1, person2];
console.log("Persons", persons)

for(var i = 0; i < persons.length; i++) {
  var person = persons[i];
//  console.log("Person =", persons[i]);
//  console.log("Height =", persons[i].height);
  var bmi = person.weight / (person.height * person.height);
  var result =  "";
  
  if (bmi < 18.5) {
        result = "underweight";
    } else if (bmi < 25) {
        result = "Normal Weight";
    } else if (bmi < 30) {
        result = "Overweight";
    } else {
        result = "Obese";
    }
  
  console.log(person.name + "|" + person.gender + "|" + bmi + "|" + result);
}