"use strict";
// ** Function **/
// มีการรับค่า
function sayHi(name) {
    console.log(`Hello ${name}`);
}
// มีการส่งค่า
function getDiscount() {
    return 500;
}
// มีการรับและส่งข้อมูล
function checkNumber(num) {
    if (num % 2 == 0) {
        return "เลขคู่";
    }
    else {
        return "เลขคี่";
    }
}
function total(a, b) {
    return a + b;
}
// console.log(checkNumber(10))
// console.log(total(10, 20))
// Arrow Function
const totalArrow = (a, b) => {
    return a + b;
};
// console.log(totalArrow(10, 20))
// Default Parameter
const showEmployee = (name, age, address = "ChaingRai") => {
    console.log(`ชื่อ = ${name}, อายุ = ${age}, ที่อยู่ = ${address}`);
};
// showEmployee("Gun", 20, "ChaingRai")
// showEmployee("GunZ", 15)
//--------------------------------------------------------------------------------------------------------------------------------
/** Object */
//1.ไม่ระบุชนิดข้อมูล
const person = {
    name: "supakun",
    age: 20
};
//2.ระบุชนิดข้อมูล
const person2 = { name: "Jojo", age: 20 };
// function รับข้อมูลเป็น Object
function showDetail(data) {
    console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`);
}
// showDetail(person)
// function ส่งข้อมูลเป็น Object
const position = { lat: 19, long: 20 };
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random()
    };
};
// console.log(randomPosition())
// Excess Properties Check --> ตรวจสอบ props ที่เข้ามาว่าตรงกับที่กำหนดใน function ไหม
function showData(data) {
    console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`);
}
let emp1 = {
    id: 1,
    name: "supakun",
    salary: 50000,
    phone: "062278454"
};
let emp2 = {
    id: 1,
    name: "supakun",
    salary: 50000,
};
let emp3 = {
    id: 6,
    name: "supakun",
    salary: 50000,
    phone: "053454521"
};
//--------------------------------------------------------------------------------------------------------------------
//** Array **/
const users = ["gun", "jojo"];
const ages = [10, 20, 30];
const empArry = [];
empArry.push({ name: "gun", salary: 5000, department: "Programer" });
function sayHi2(name) {
    if (!name) {
        return "Hello TypeScript";
    }
    if (typeof name === "string") {
        return `Hello ${name}`;
    }
    throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}
//----------------------------------------------------------------------------------------------------------
//Spread Operator ...
const section = ["dog", "cat"];
const department = ["Programer", "maketing"];
department.push(...section);
// console.log(department)
//Rest Parameter
const total2 = (...number) => {
    return number.reduce((result, value) => {
        return result + value;
    });
};
// console.log(total2(100, 200))
//Destructuring
const person3 = {
    fname: "gun",
    age: 20,
    address: "BKK"
};
const { fname, age, address } = person3;
// console.log(fname)
// console.log(age)
// console.log(address)
//Tuple --> จะหมือนกับ Array แต่จะสามารถมี type ที่ต่างกันได้
const employee = [10, "gun", true];
console.log(employee);
