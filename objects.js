// *******objects in java script*********
// object literals
// creation of objects
let object ={
    name : "mani",
    age  : 19,
    "fullname" : "redddy mani simha"
}
// here name is called key and mani is called value
// ****** How to access objects *******
console.log(object.name);
// output mani
console.log(object["name"])
// output mani
// why we should we use only the first method 
console.log(object["fullname"])
// we cannot acess it from the first method
// how to use symbol as key value in key value
let symbol =  Symbol(1)
let obj ={
    [symbol] : "one ",
}
console.log(obj[symbol])
console.log(typeof [symbol])
// this is important in js
// how to update data in java script
object.age= 18
console.log(object);
// output { name: 'mani', age: 18, fullname: 'redddy mani simha' }
// how to freeze the object
// Object.freeze(object)
// this disables from updating the data in the object
// about adding functions in objects
object.greetings =function()
{console.log(`hello user, ${this.name}`); 
}
console.log(object.greetings());
// output hello user, mani
// undefined
// summary backticks are youse to combine variable from the string
// *************More on Objects************
// abot single ton object 
let newobject =new Object
// this is single ton object
console.log(newobject)
// {}
let aobject ={}
console.log(aobject);
// {}
// therefore there is no change in the output but only there is only change that is first is singelton and second is not singelton
// object inside the object
let nestedobject ={
    name : "mani",
    userfullname :{
        firstname :"reddy",
        secondname:"simha",

    }
}
// how to access the nested object
console.log(nestedobject.userfullname);
// output { firstname: 'reddy', secondname: 'simha' }
// how to merge two objects
let obj1 ={
    1 : "a"
}
let obj2 ={
    2 :"b"
}
// first method
console.log({obj1,obj2})
// output { obj1: { '1': 'a' }, obj2: { '2': 'b' } }
// second method
let obj3 = Object.assign({}, obj1,obj2)
console.log(obj3);
// this is one of the most used way 
// understanding of syntax
// Object.assign({}, obj1,obj2) here first place is target and second palce is source in our case we have given the target as empty object for clear understanding
// third method (spread method)
let obj4 ={...obj1,...obj2}
console.log(obj4)
// output { '1': 'a', '2': 'b' }
// ******Imporatnt methods in objects*******
// first
let methods ={
    name : "reddy mani simha",
    age  :19,
    haslinkedin:"yes ",
}
console.log(Object.keys(methods));
console.log(Object.values(methods));
console.log(Object.entries(methods));
// we use this most if the object contains the key or value 
console.log(methods.hasOwnProperty(`haslinkedin`));

