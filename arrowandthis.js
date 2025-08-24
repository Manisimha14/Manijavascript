// todo ARROW FUNCTION and THIS
// ******Usage of This Function*****
// ? First we will take a function and an object
let globalscope ="this is global scope"
let mani = {
    username: "gani",
    age: 19,
    greet: function () {
        console.log(`${this.username}, hello`);
    }
};

mani.greet();
// output gani, hello
mani.username ="devi"
// output devi, hello
let username="narayana"
mani.greet();
// output error 
// * usage of this is to refer the current context in our case the current context is inside mani
console.log(this);
// output {}
// * as there is nothing present in the global scope the output is {}
// ! this is only used in object but not in functions
// ! this refers to the object currently calling the function
// ! this refers how the value of function called not where the function is defined
// ! this refers to scope of function when it is a arrow function

function chaiaurcode (){
    let a ="mani"
    console.log(this.a);
    
}
chaiaurcode()
// output undefined
// ****ARROW FUNCTIONS****
// how to declare them 
// nothing remove the function keyword 
const add = (num1, num2) => num1 + num2;
console.log(add(3,12521545215));
// output 12521545218
// difference between arrow function and normal function
// no need to use return keyword 
// Normal Functions: Can be used as constructors with the new keyword to create new objects. They can have a prototype property and be used for object-oriented programming.
// Arrow Functions: Cannot be used as constructors and will throw an error if you try to use them with the new keyword. They do not have a prototype property.
// *Important questions in interview from this and arrow functions
// difference of behaivour between this keyword in normal function and arrow function


var doubt = {
    age: 23,
    devi: function() {
        console.log(this.age);  // This will work - outputs 23
        
        function greet2() {
            console.log(this.age);  // This will be undefined
        }
        
        greet2();  // Call greet2 from inside devi
    }
}

doubt.devi();  
// output 23 undefined 
// * it means the "this" depends on the object which calls the function in the case of grret 2 object is undefined so the this returns undefined
// in the case of arrow functions
var doubt2 = {
    age: 23,
    devi: function() {
        console.log(this.age);  // This will work - outputs 23
        
        const greet2 = () => {
            console.log(this.age);  // This will be 23 because arrow functions inherit 'this' from the enclosing scope
        };
        
        greet2();  
    }
}
doubt2.devi()
// output 23 23 
// * it means in the case of arrow function this depends on the scope of the function but not the obect
// ! this question is important for every js interview
// for more information on this you can refer https://youtu.be/dWZIPIc3szg?si=tdI3mRTQzfGBqaIA
// * and in the case of arrow function if we use curly braces we should use return keyword and this is called explicit return
// *in the case of arrow function we do not use curly braces no need to use return keyword and this is called implicit return

