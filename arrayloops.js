// *1 for loop for of higher order array
// * 2 map object in java script
// *3 for in loops in objects
// *4 for each loops in js
// *5how to retrive the objects data from array using for each loop

// * for loop in arrays
let array=["mani","gani"]
for (const item of array) {
    console.log(item);
    
    
}
// * for lops in strings 
let string="Mani simha"
for (const element of string) {
    console.log(`character is ${element}`);
    
    
}
// * 2 Map concept in java script
let mani = new Map()
mani.set("number","mani")
mani.set("age","narayana")
mani.set("name","devi")
console.log(mani);
// * how to apply loop on maps
// * this syntax is used to print the keys and values of the map
for (const [key,value] of mani) {
    console.log(key, value);
}
// * In programming, **objects** and **maps** are both used to store key-value pairs, 
// but they have key differences in their design and functionality.

// ### **Objects**

// An **object** is a fundamental data type in many programming languages. It's an unordered collection of properties, where each property has a name (a **string** or **symbol**) and a value. Objects are ideal for creating a structured record of data, much like a real-world object's properties.

// * **Key Type:** Keys can only be a **string** or a **symbol**.
// * **Order:** The order of key-value pairs is not guaranteed.
// * **Inheritance:** Objects can inherit properties from their prototype.
// * **Size:** You have to manually count the properties to get the size.
// * **JSON:** They have native support for direct conversion to and from JSON.

// ---

// ### **Maps**

// A **map** is a more modern data structure designed to overcome some of the limitations of objects. It's an ordered collection of key-value pairs that are specifically optimized for data retrieval, storage, and deletion.

// * **Key Type:** Keys can be **any data type**, including objects, functions, or arrays.
// * **Order:** The order of elements is guaranteed to be the order of insertion.
// * **Inheritance:** Maps do not have a prototype chain, which means they do not inherit properties.
// * **Size:** They have a built-in `size` property for easy counting.
// * **JSON:** They do not have native JSON support and must be converted to an object first.

// ---

// ### **Summary**

// Think of an **object** as a simple, structured record for static, known data, like a user profile with `name`, `age`, and `email` properties. 
// A **map** is more like a dynamic, flexible dictionary, better suited for situations where keys aren't simple strings or when you need to frequently add, remove, and iterate over data while maintaining the insertion order.
// * to check if the objects can be looped on or not
// let gani={
//     "phone number":9059224476
// }
// for (const [key,value] of gani) {
//     console.log(key,value);
    
    
// }
// ! TypeError: gani is not iterable this output so we cannot loop on the objects by for of loop
// * for in loops in java scriprt
// * for in Objects
let gani={
    "phone number":9059224476
}
for (const key in gani) {
    console.log(key);
    // * output is phone number
    // * to print the key and the value as well as
    console.log(gani[key]);
    // * this print the value these two can be combined by using backticks and inserting variables

        
    }
    // * for in arrays
    let love=[{},{}]
    for (const key in love) {
        console.log(key);
        // * output is 0 and 1
        // * to print the values in arrays
        console.log(love[key]);
        // 0 {} 1 {}
     
    }
// * but we will use for of loop for more comfortable
// * for in loops doesnot works with maps
// * for each loops
let heroes=["superman","batman","venkat babu"]
function ermiya(item,index,array){
    console.log(item,index,array);
    
}
heroes.forEach(ermiya)
// * this is one type of declaring the for each function
let villans =["whiplash","thanos"]
villans.forEach((index,array,item) =>{
    console.log(index,array,item);
    
})
// * this another type of usage of for each function
// * 5 how to retrive the objects data from array using for each loop
let mobile=[
    {"mobile":"samsung",
        "price":222222,

    },
     {"mobile":"motorolla",
        "price":222222

    }
]
mobile.forEach((item)=>{
    console.log(item.mobile);
    
})
// * first we shuld take the value in parenthesis after that we can access from the function