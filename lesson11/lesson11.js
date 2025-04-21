// // Bài 1
// let names = ["John", "Alice"];
// names.push ("Tom");
// console.log(names);

// *name.pop () : thêm đuôi
// *name.shift (): thêm đầu


// Bài 2
// let numbers = [1, 2, 3, 4];
// let newNumbers = numbers.map((item)=>{
//     return item * item;
// });
// console.log(newNumbers);

// Bài 3:
// let numbers = [5, 10, 15, 20, 25];
// let filterNumbers = numbers.filter((item)=>{
//     return item % 2 === 0;
// });
// console.log(filterNumbers);

// Bài 4:
// let students = [{name: "John", score: 7}, {name:"Alice", score: 9}, {name:"Tom", score: 10}]
// let findStudents = students.find ((item) => {
//     return item.score > 8;
// });
// console.log(findStudents);

// Bài 5:

// let numbers = [3, 5, 8, 12, 15];
// let index = numbers.findIndex ((item) => {
//     return item > 10;
// });
// console.log(index);
// 
// // Bài 6:
// let array = ['a', 'b', 'c', 'd', 'e'];
// array.splice(3, 1, "f" );
// console.log(array);


// // Bài 7:
// let obj = {name: 'Tom', age: 21, major: 'Computer Science'};
// console.log(Object.keys(obj));


// Bài 8:
// let obj = { name: 'Tom', age: 21, major: 'Computer Science' };
// console.log(Object.values(obj));

// Bài 9:
// let obj1 = { a: 1, b: 2 };
// let obj2 = { c: 3, d: 4 };
// let rs = Object.assign (obj1, obj2);
// console.log (rs);

// Bài 10
// let arr1 = [1, 2, 3];
// let arr2 = [4];
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);


// Bài 11:
// let obj1 = {name: 'Alice', age: 25};
// let obj2 = { job: 'Developer' };
// let obj3 = {...obj1, ...obj2};
// console.log(obj3);

// Bài 12:
// let names = ["john", "alice", "tom"];
// let newNames = names.map ((item)=>{
//     return item.toUpperCase ();
// });
// console.log (newNames);

// Bài 13:
// let arr = [1, 2, 3, 4, 5, 6];
// let arrChan = arr.filter((item) => {
//     return item % 2 == 0;
// });
// let rs = arrChan.reduce ((acc, item) => {
//     console.log(acc);
//     return acc + item;
// },0);
// console.log (rs);


// Bài 15:
// let arr = ['a', 'b', 'a', 'c', 'b', 'a'];
// let rs = {}
// for (let i = 0; i< arr.length; i++){
//     if(rs[arr[i]]){
//         rs[arr[i]] ++
//     } else {
//         rs[arr[i]] = 1
//     }

// }
// console.log(rs);