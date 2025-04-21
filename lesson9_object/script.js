// Bài 1:

// const student = {
//     name: "John",
//     age: 20,
// }
// student.major = "Computer Science"
// console.log(student)


// // Bài 2:
// const person = {
//     name: "Alice",
//     age: 25,
//     job: "Developer",
// }
// delete person.job
// console.log(person)


// Bài 3:
// let car = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2020,
// }
// console.log(Object.keys(car).length)

// // Bài 4:
// let product = {
//     name: "Laptop",
//     price: 1000,
// }


// let keyValue = Object.keys(product)
// let value = Object.values(product)

// let l1 = [keyValue[0], value[0]]
// let l2 = [keyValue[1], value[1]]



// Bài 5:
// let array = [
//     {name: "Phone", price: 500},
//     {name: "Camera", price: 300},
//     {name: "Tablet", price: 700},
// ]

// let object = array.find(o => o.name === "Camera");
// console.log(object);

// Bài 6:

// let products = [{name: "Phone", price: 50},{name:"Camera",price: 300},{name:"Tablet",price:700}]
// for(let i = 0; i < products.length; i++){
//     if(products[i].price>100){
//         console.log(products[i])
//     }
// }

// Bài 7:
// let person = {name: "Bob", age:25, job: "Developer"};
// person.age = 30;
// console.log (person);

// Bài 8:
// let object1 = {a:1, b:2};
// let object2 = {c:3, d:4};
// let obj = Object.assign({}, object1, object2);
// console.log(obj);

// Bài 9:
// let animal = {type:"Dog", name: "Buddy", age: 3};
// for (let key in animal ){
//     console.log(key + ": " + animal[key]);
// }

// Bài 10:
let car = {brand: "BMW", model: "X5"};
if (car.color === undefined) {
    console.log(car.color)
}
console.log(car);








