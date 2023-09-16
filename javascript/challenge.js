//clock capable to vote
// let val = "HelloW"
// console.log("hellow".length);//6
// console.log(val.length);//6
// console.log(val.length-1)//5
// console.log(val[0]);//H
// console.log(val.charAt(0))//H
// console.log(val[val.length-1])//"W" the length of a string to get another character in another position.
// console.log(val.at(-1));//"W" gives last letter
// console.log(val.toLowerCase());//hellow
// console.log(val.toUpperCase());//HELLOW
// console.log(val.substring(3,10))//3
// console.log(val.substring(3))//3
// console.log(val[0].toUpperCase() + val.substring(1).toLowerCase()) //first letter capital and rest small

// const numbers = [9, 5, 14, 3, 11];                                   //difference between filter and find 
// // filter() ALWAYS returns an array (even if it's empty)
// const rel = numbers.filter(function(number) {
//     return number >= 10;
// }); // []
// // .find() returns the first match or undefined (when none of the items satisfy the condition)
// const rul = numbers.find(function(number) {
//     return number >= 10;
// }); // undefined
// console.log(rel,"\n",rul);


// function getYear(years, searchYear) {
//     return years.find(function(secyer){
//         return secyer===searchYear;                                  //find's the second value from first value
//     })}
//     console.log(getYear([2019, 2020, 2021], 2020)); // 2020
//     console.log(getYear([2019, 2020, 2021], 1990)); // undefine

// function sum(a,b){
//     return a+b;
// }                                                                     //concatination of value to a string
// let val = sum(2,3);
// console.log("it was "+ val);

// const lat = [5,2,3,4];
// const lng = [1,4,1,2];                                                
// const point = [...lat,...lng];                                          //concatination of array using ...spread
// const lon = [...lng,1];
// console.log(point); // [5,2,3,4, 1,4,1,2];
// console.log(lon)

// const number = 2//or const number = prompt("Enter a number: ");
// const result = (number % 2  == 0) ? "even\n" : "odd\n";
// const res = (number % 2  == 1)+" odd" ;
// console.log(result,res)
// //with if else                                                       //odd or even
// if(number % 2 == 0) {
//     console.log("The number is even.");//check if the number is even
// }
// else {
//     console.log("The number is odd.");// if the number is odd
// }

// const arr = [{id:1,name:"prem",gender:"M"},{id:2,name:"sagar",gender:"M"},{id:3,name:"kumari",gender:"f"}]
// console.log(arr);
// const str = arr.map(x=>x.name)
// console.log(str);                                                    //array to string
// const las = str.join(",")
// // console.log(las);
// const html = `<ul>${arr.map(user => `<li>${arr.name}</li>`).join(",")}</ul>`;
// console.log(html);//used in html

// const someobj = {id:1,name:"prem",gender:"M"};
// console.log(someobj)
// const somekeys = Object.keys(someobj)
// console.log(somekeys)
// somekeys.forEach(function(soem){
//     console.log(someobj[soem])
// })
// somekeys.forEach(key =>{
//     console.log(someobj[key])
// })
// const chg = {...someobj,id:someobj.id+1}
// console.log(chg);
// //with object and array
// const someobj = [{id:1,name:"prem",gender:"M"},{id:2,name:"sagar",gender:"M"},{id:3,name:"kumari",gender:"f"}];
// console.log(someobj)
// const somekeys = Object.keys(someobj)    //object.keys
// console.log(somekeys)
// somekeys.forEach(key =>{
//     console.log(someobj[key])
// })
// const something = someobj.map(obj=>{
//     return obj.name
// })
// console.log(something)//[ 'prem', 'sagar', 'kumari' ]
// const objfill = someobj.filter(x=>{
//     return x.gender==="f";         //filter
// })
// console.log(objfill);//[ { id: 3, name: 'kumari', gender: 'f' } ]
// const objfind = someobj.find(x=>{
//     return x.id===2;
// })
// console.log(objfind);//{ id: 2, name: 'sagar', gender: 'M' }
// console.log(someobj.some(x=>x.gender==="M"));//true
// console.log(someobj.every(x=>x.gender==="M"));//flase
// const somename = someobj.map(obj=>{
//    if(obj.gender==="M"){
//     return obj.name;
// }
// }).join("")
// console.log(somename)//premsagar

// function date(){
//     const date = new Date();
//     return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
//     }
//     console.log(date())//get's date

// class Employee {
//     constructor(firstName, lastName) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getFullName() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     getInitials() {
//         return this.firstName[0] + this.lastName[0];
//     }
// }

// class Manager extends Employee {
//     sendPerformanceReview() {
//         console.log(`Sent performance review for current quarter`);
//     }   
// }
// const manager = new Manager("Sam", "Green");
// console.log(manager.sendPerformanceReview()); // logs "Sent performance review for current quarter"
// console.log(manager.getFullName()); // "Sam Green"
// console.log(manager.getInitials()); // "SG"

// setTimeout(() => {
//    console.log("time is 2 seconds")  //time out
// }, 5000);

