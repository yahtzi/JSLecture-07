//1. Write a function that outputs a greeting. It should take an argument "name: and greet the individual//
const greetMe = (myName) => {
    let myGreeting = "Howdy, ";
    return myGreeting + myName + "!";
};

console.log(greetMe("Partner"));

//2. Write a function that give the approximate circumference of a circle given the diameter//
let diameter = 6;
if (diameter > 0) {
    let pi = 3.14;
    let circumference = pi * diameter;
    console.log("The circumference is " + circumference);
}

//Write one function that calls another function//
const greeting = () => {
    sayInsult();
}

const sayInsult = () => {
    return "Fool!";
}

greeting();