// **********Function*********
// how to create functions
function mani (){
    console.log("this is my first function");
    
}
// here mani is called reference and console part is called the scope of the function
// HOW TO EXECUTE IT
mani()
// simple function to add numbers
function sum (n1,n2){
    console.log(n1+n2);
    
}
sum(32,45644556)
// here n1 and n2 are called arguments or parameters
function gani (m1,m2){
    let result= m1+m2
    return result
    
}
// Store the returned value in a variable
let answer=gani(23,25)

console.log(answer);
// note: after the return the function stops executing
// just simple function to greet user
function greet (username)
{
    if(username === undefined){
        console.log("enter user name")
        return
        // to stop the function from executing
    }
    else{
        console.log("thank you for entering the user name");
        
    }
    console.log(`hello ${username}`)
}
console.log(greet());
