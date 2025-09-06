// * important topic
// *1 continuation of for each loop 
// * 2 filter concept
// * 3 map
// * 4 chaining
// *1 continuation of for each loop 
let villans =["whiplash","thanos"]
let mani=villans.forEach((index,array,item) =>{
    console.log(index,array,item);
     return index,array,item
})
console.log(mani);
// * undefined output 

//* 2 filter concept
let numbers=[1,2,3,4,5,6,7,8,9]
let gani=numbers.filter((item)=>item>4)
console.log(gani);
// * output by using this we can return the value in the variable [ 5, 6, 7, 8, 9 ]
// ! if we use declare the scope we must use return item>4
// * more use cases of filter
const users = [
  { id: 1, name: 'Alice', isActive: true, location: 'NewYork' },
  { id: 2, name: 'Bob', isActive: false, location: 'Los Angeles' },
  { id: 3, name: 'Charlie', isActive: true, location: 'NewYork' },
  { id: 4, name: 'Diana', isActive: true, location: 'London' },
  { id: 5, name: 'Eve', isActive: false, location: 'NewYork' }
];
// * if we want to know the user is active or not
let active=users.filter((item)=>item.isActive===true)
console.log(active);
// * if we want to know the location of user
let location=users.filter((item)=> item.location==="NewYork")
console.log(location);
// * to check two conditions we use &&
// *3 map function also returns the value
let numbers2=[1,2,3,4,5,6,7,8,9,10]
let add10=numbers2.map((item)=>item+10)
console.log(add10);
// * output returned
// [
//   11, 12, 13, 14, 15,
//   16, 17, 18, 19, 20
// ]
// * 4 chaining
let numbers3=[1,2,3,4,5,6,7,8,9,10]
let modified=numbers3.map((item)=>item*5).map((item)=>item-1).filter((item)=>item>5)
console.log(modified);
// * output
// [
//    9, 14, 19, 24, 29,
//   34, 39, 44, 49
// ]