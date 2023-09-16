//  let val = "HelloW"
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

// function sum(a,b){
//     return a+b;
// }

// let val = sum(2,3);
// console.log("it was "+ val);

// function getYear(years, searchYear) {
//     return years.find(function(secyer){
//         return secyer===searchYear;
//     })}
//     console.log(getYear([2019, 2020, 2021], 2020)); // 2020
//     console.log(getYear([2019, 2020, 2021], 1990)); // undefine


// let language = "something";
//  console.log(`I am learning ${language}`);       //interpolation

// let num = "6_6_6";
// console.log(num);
// console.log(num.toString());
// console.log(Num.parseInt(num,100))

//    const numbers = [9, 5, 14, 3, 11];
//    const numbersAboveTen = numbers.filter(function(number) {
//        return number > 5;
//    });
//    console.log(numbersAboveTen);


// const numbers = [9, 5, 14, 3, 11];
// // works but is NOT recommended
// const numbersAboveTen = numbers.filter(function(x) {
//     return x > 10;
// });
// console.log(numbersAboveTen); // [14, 11]

// const val = ["prem","selfish","grady","brain less"]
// const rel = val.filter(function(val){
// return val.length<7;
// })
// console.log(rel)

// const val = ["prem","selfish","grady","brain less"] 
// const result = val.find(function(val){
//     return val === "grady";
// })
// console.log(result)

// const val = [5,6,5,8,2,3,88,99,3,50];
// const result = val.find(function(val){
//     return val >= 1;
// })
// console.log(result);//only one will come as out put

    // let language = "something";
    // console.log(`I am learning ${language} `+`
    // This is a multiline
    // string that
    // just works!`);

// const numbers = [9, 5, 14, 3, 11];
// // filter() ALWAYS returns an array (even if it's empty)
// const rel = numbers.filter(function(number) {
//     return number >= 10;
// }); // []
// // .find() returns the first match or undefined (when none of the items satisfy the condition)
// const rul = numbers.find(function(number) {
//     return number >= 10;
// }); // undefined
// console.log(rel,rul);

// function getYear(years, searchYear) {
//     return years.find(function(x){
//         return x===searchYear;
//     })}
//     console.log(getYear([2019, 2020, 2021], 2020)); // 2020
//     console.log(getYear([2019, 2020, 2021], 1990)); // undefine

// const numbers = [4, 2, 5, 8];
// const doubled = numbers.map(function(number) {
//     return number * 2;
// });
// console.log(doubled); // [8, 4, 10, 16]

// const names = ["sam", "Alex"];
// const upperNames = names.map(function(name) {
//     return name.toUpperCase();
// });
// console.log(upperNames) 

// const groceries = ["Apple", "Peach", "Tomato"];
// console.log(groceries.includes("Bread"));           //includes
// console.log(groceries.includes("Tomato"));

// function something(val){
// return val+1;
// }
// console.log(something(12))

// const func = function(a,b){
//     return a+b;
// }
// console.log(func(12,13));

// const func = (a,b)=>{
//     return a+b;
// }
// console.log(func(10,100));

// const arr = [10,12,13,14]
// arr.forEach(function(arr){
//     console.log(arr);            //functions
// });
// console.log(arr)

// const arr = [10,12,13,14]
// arr.forEach((arr)=>{
//     console.log(arr);        //arrow functions
// });
// console.log(arr)

// let numbers = [-4, 3, -2, 5];
// const val = numbers.filter(x=> x>= 0);
// console.log(val);

// let nums = [-1,21,-32,343,-64]
// const val = nums.filter( (x) => x>1)
// console.log(val);

// const val = "hellow hey  hi";
// console.log(val.trim());

// const val = "    hellow"
// console.log(val,"\n",val.trim());

// const val = "hey hii"
// console.log(val.startsWith("h"));//true
// console.log(val.endsWith("i"));//true
    
// function funs(pera){
//     return "hey hii"
// }
// console.log(funs())

/*
Math.round(2.6); // 3
Math.floor(2.6); // 2
Math.ceil(2.6); // 3


if (val===""){
    return 0;
} return Number.parseInt(age,10)+1;


const users = []; // empty array
const grades = [10, 8, 13, 15]; // array of numbers
const attendees = ["Sam", "Alex"]; // array of strings
const values = [10, false, "John"]; // mixed

function useApp(apps, app) {
    apps.push(app);
return apps;
}
// Sample usage - do not modify
console.log(useApp(["Clock", "Twitter"], "Firefox")); // ["Clock", "Twitter", "Firefox"]
console.log(useApp([], "Safari")); // ["Safari"]


const grades = [10, 8, 13];
grades.forEach(function(grade) {
    // do something with individual grade
    console.log(grade);
});


elements.forEach(function(element) {
    console.log(element);
});


function sumPositiveNumbers(numbers) {
    let sum = 0;
    numbers.forEach(function(number) {
        if (number >= 0) {
            sum = sum + number;
        }
    });
    return sum;
}
// Sample usage - do not modify
console.log(sumPositiveNumbers([15, -5, 10])); // 25
console.log(sumPositiveNumbers([-3, 4, -2, 1])); // 5


function sumOddNumbers(numbers) {
    let sum = 0;
       numbers.forEach(function(number) {
           if (number % 2 !== 0) {
               sum = sum + number;
           }
       });
       return sum;
    }
   // Sample usage - do not modify
   console.log(sumOddNumbers([15, 5, 10])); // 20
   console.log(sumOddNumbers([2, 3, 4, 5, 6])); // 8
   console.log(sumOddNumbers([-2, -3, 4, 5, 6])); // 2
   */

   
//    const val = "I Am Happy!"
//    console.log(val.includes("sad"))//flase
//    console.log(val.includes("I"))//true

// const content = "1,2,3,4,5,6"
// console.log(content.split(","))

    // const message = "You are welcome.";
    // val1 = message.replace(" ", "_"); // "You_are welcome."; (only the first occurrence has been replaced)
    // console.log(val1); 
    // val2 = message.replaceAll(" ", "_"); // "You_are_welcome";
    // console.log(val2); 

// let answer = 42;
// console.log(answer.toString()); //"42"

// let str = "42";
// console.log(Number.parseInt(str, 10)); //42

// const numbers = [10, 8, 13, 15];
// numbers.push(20); // returns 5 (the new length of the array)
// console.log(numbers); // [10, 8, 13, 15, 20];

// const users = ["Sam", "Alex", "Charley"];
// console.log(users.at(1)); //"Alex"
// console.log(users.at(-2)); //"Alex"

// function Elements(elements) {
//     elements.forEach(function (elements){
//         console.log(elements)
//     })
//     }
// Elements(["Sam", "Charlie", "Alex"]);    

// const grades = [10, 14, 15]; // array (plural)
// grades.forEach(function(grade) { // array item (singular)
//     console.log(grade);
// });

// const people = ["Sam", "Alex"]; // array (plural)
// people.forEach(function(person) { // array item (singular)
//     console.log(person);
// });

// const groceries = ["Apple", "Peach", "Tomato"];
// console.log(groceries.join("; ")); // "Apple; Peach; Tomato"
// console.log(groceries.join(" . ")); // "Apple . Peach . Tomato"

// const users = [{
//     id: 1,
//     name: "Sam Doe"
// }, {
//     id: 2,
//     name: "Alex Blue"
// }];
// const userNamesArray = users.map(user => user.name);
// console.log(userNamesArray); // ["Sam Doe", "Alex Blue"];
// const csv = userNamesArray.join(", ");
// console.log(csv); // "Sam Doe, Alex Blue"
// console.log(users)

// const arr = [{id:1,name:"prem",gender:"M"},{id:2,name:"sagar",gender:"M"},{id:3,name:"kumari",gender:"f"}]
// console.log(arr);
// const str = arr.map(x=>x.name)
// console.log(str);
// const las = str.join(",")
// console.log(las); 
// const html = `<ul>${arr.map(user => `<li>${arr.name}</li>`).join(",")}</ul>`;
// console.log(html);//used in html

// const some = [99,88,77,66,1,2,3,4,5,6]
// console.log(some);
// const ome = some.every(x=>x<=100)
// console.log(ome);                            //every"or"some
// const me = some.some(x => x <0)                  
// console.log(me);
// console.log(some,"\n",ome,"\n",me);

// const items = ["Pen", "Paper","book"];
// items.splice(1,2)//[ 'Pen' ]                  //splice
// console.log(items)
// items.length = 0                              //deleting array
// console.log(items); // []


// const grades = [10, 15, 5];
// const grades = [5, 15, 2];
// const ades = grades.reduce((x,y)=>{
//     return x*y;                              //reduce multiplication
// })
// console.log(ades)
// const sum = grades.reduce((tundr,current) => { 
//     return x-y;                               //reduce
// }, 0);
// console.log(sum);
// const mus = sum*-1
// // console.log(mus)
// const sum = grades.reduce((total, current) => { 
//     return total + current
// }, 0);                                       //reduce addition
// console.log(sum);


// const dimensions = [20, 5]
// // create variables in normal way
// const width = dimensions[0];
// const height = dimensions[1];            
// console.log(width,"\n",height)
// // create variables 
// const [widthD, heightD] = dimensions;
// console.log(widthD); //20
// console.log(heightD); //5

// const lat = [5,2,3,4];
// const lng = [1,4,1,2];                   
// const point = [...lat,...lng];
// console.log(point); // [5.234, 1.412];

// const user = {id:1,name:"prem",gender:"M"}
// console.log(user.name)
// const change = "gender"
// console.log(user[change])

// function users(val1,val2){
//     return val1[val2]
// };
// console.log(users({id:1,name:"prem",gender:"M"},"gender"));
// const something = Object.keys(user)
// console.log(something)

// const settings = {
//     theme: "Dark",
//     version: "2.4.1",
//     beta: false
// };

// const keys = Object.keys(settings);
// console.log(keys); // ["theme", "version", "beta"]
// keys.forEach(key => {
//     // log the value of every key dynamically
//     console.log(settings[key]);
// });

// const person = {
//     id: 1,
//     firstName: "Sam",
//     gender: "F"
// };
// console.log(`Hello ${person}`); // "Hello [object Object]"

// const val = {id:1,name:"prem",gender:"M"}
// console.log(val);
// const values = Object.values(val)
// console.log(values);//[ 1, 'prem', 'M' ]
// const entries = Object.entries(val);
// console.log(entries)//[ [ 'id', 1 ], [ 'name', 'prem' ], [ 'gender', 'M' ] ]

// const config = {id: 1,isAdmin: false,theme: { dark: false,accessibility: true}};
// const id0 = config.id;
// const isAdmins = config.isAdmin;
// const themes = config.theme;
// console.log(id0,"\n",isAdmins,"\n",themes);
// const {id1, isAdmin2, theme3} = config;
// const {isAdmin:id, theme} = config;
// console.log(id);

// const getFullName = user => {
//     const val = user.info?.name?.toLowerCase();
//     return val}
// console.log(getFullName({info: {name: "ALEX"}})); // "alex"             //optional changes
// console.log(getFullName({info: null})); // undefined
// console.log(getFullName({})); // undefined

// const someval = funs =>{
//     return funs ?? "undefined"
// }
// console.log(someval("prem"));
// console.log(someval(null));

// const getPlaceholder = () => {
//     console.log("getPlaceholder called");
//     return "N/A";
// }                                                                        
// const sayHello = name => {
//     return `Hello ${name ?? getPlaceholder()}`;
// }
// console.log(sayHello("prem"));
// console.log(sayHello("Sam")); // "Hello Sam"



//     const messages = {
//         received: "Restaurant started working on your order.",
//         prepared: "Driver is picking up your food.",
//         en_route: "Driver is cycling your way!",
//         arrived: "Enjoy your food!"
//     };
// console.log(messages.received);

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
// console.log(somename)

// const val = {user:1,name:"prem"}
// const chg = {...val,user:val.user+1}
// console.log(chg);

// class Person {
//     constructor(firstName, lastName) {
//         console.log(firstName + " " + lastName);
//     }
// }
// const person = new Person("Sam", "Green");//Sam Green

// class randamgay {
//     constructor(firstName,lastName,age,prifix){
//             this.prifix=prifix;
//             this.firstName = firstName;
//             this.lastName = lastName;
//             this.age=age;
//     }
//     namegay() {
//         return `${this.firstName} ${this.lastName}`;
//     }

//     // pname(){
//     //     return `${this.prifix}.${this.firstName} ${this.lastName} ${this.age}`
//     // }
// }
// const person = new randamgay("vidya", "sagar");
// console.log(person.namegay()); // vidyasagar
// console.log(new randamgay("prem","sagar",18,"Mrs"));
// console.log(new randamgay("sagar","ips",22,"mis"));
// console.log(new randamgay("self","fish",18,"Mrs"));
/*vidya sagar
randamgay {
  prifix: 'Mrs',
  firstName: 'prem',
  lastName: 'sagar',
  age: 18
}
randamgay {
  prifix: 'mis',
  firstName: 'sagar',
  lastName: 'ips',
  age: 22
}
randamgay {
  prifix: 'Mrs',
  firstName: 'prem',
  lastName: 'sagar',
  age: 18
}*/

// class User {
//     set age(value) {
//         console.log("age setter");
//         this._age = Number.parseInt(value, 10);
//     }
// }                                           //setter
// console.log(new User())//User {}
// const user = new User();
// user.age = "18";
// console.log(user)

// class User {
//     get age() {
//         console.log("age getter");
//         return this._age;
//     }

//     set age(value) {
//         console.log("age setter");             //getter
//         this._age = Number.parseInt(value, 10);
//     }
// }
// const user = new User();
// user.age = "20"; // calls set age(value)
// console.log(user.age); // calls get age(), returns 20 (number)

// class User {
//     constructor(age) {
//         this.age = age; // calls set age(value)
//     }
//     get age() {
//         console.log("age getter");
//         return this._age;
//     }
//     set age(value) {
//         console.log("age setter");
//         this._age = Number.parseInt(value, 10);
//     }
// }
// const user = new User("30");
// console.log(user.age); // 30 (number)
// user.age = "31";
// console.log(user.age); // 31 (number)

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
// class Manager {
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
//     sendPerformanceReview() {
//         console.log(`Sent performance review for current quarter`);
//     }   
// }
// console.log(new Employee("prem","sagar"));
// console.log(new Manager("sin","lies"));

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

// class Forms{
//     submit(){
//         console.log(this.name + " submited");
//     }
//     cancled(){
//         console.log(this.name + " Form cancled")
//     }
//     Name(name){
//         this.name = name;
//     }
// }
// const prem = new Forms()
// prem.Name("Prem")
// const sagar = new Forms()
// sagar.Name("Sagar")
// console.log(prem.submit());
// console.log(sagar.cancled());
// console.log(prem.cancled());

class Forms{
    constructor(name,number){
        console.log("hola")
            this.name = name;
            this.TrainNumber = number;       
        }
    submit(){
        console.log(this.name + " submited "+this.TrainNumber);
    }
    cancled(){
        console.log(this.name + " Form cancled " + this.TrainNumber)
    }
}
let Prem = new Forms("prem",121212);
let sagar = new Forms("Sagar",1437)
console.log(Prem.submit());
console.log(sagar.cancled())
 
