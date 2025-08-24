// global and local scope in js
// {} is called scope
var b =322
if(true){
 let a= 10
 var b=20
 const c=12
}
// console.log(a); output error
// console.logc(c); output error
console.log(b);
// otput 20
// difference between global and local scope 
// the thing written in global scope works every where but the thing written in locale scope doesnot work in global
// ******* Important Concept*******
console.log(addone(9));
function addone (num){
    return num+1
}
// * output 10
console.log(addTwo(9));
let addTwo = function(num) {
    return num+2
}
// ! output ERROR Cannot access 'addTwo' before initialization
