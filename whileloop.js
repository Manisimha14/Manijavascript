// * while loops in java script
// Hey there, JavaScript ninja! 🥷 Let's dive into while loops in JavaScript - your new best friend for repeating tasks!What's a While Loop in JavaScript?
//  🔄Think of it as your digital "keep doing this until..." command!Basic Structure:
// javascript
// while (condition) {
    // do this action
    // update something to eventually make condition false
// }
// ! objectives
// ! 1 print some numbers
// ! 2 print the value of arrays
// ! 3 do while loop
// *1 print numbers upto 10
let i=1
while(i<=10){
    console.log(i);
    i=i+1

}
// here inside while we wrote the codition that only if i value is less than or equal to ten
// the loop executes and at last we  update something to eventually make condition false(i=i+1)
// *2 print the value of arrays
let family=["mani","gani"]
let j=0
while(j<family.length){
    console.log(family[j]);
    j=j+1;
}
// *3 Do while loop
let l=1;
do {
    console.log(l);
    l=l+1
    
    
} while (l<=10);
// output 1 to 10
// ! special case of do while loop if we take l value as 12 guess what will be the output
let m=12;
do {
    console.log(m);
    m=m+1
    
    
} while (m<=10);
// * output is 12 because first the do executes after then the condition is checked
