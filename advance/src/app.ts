// ** Function **/
// มีการรับค่า
function sayHi(name: string) {
  console.log(`Hello ${name}`)
}
// มีการส่งค่า
function getDiscount(): number { // มีการ return ค่าออกไปกำนด type หลัง function ด้วย
  return 500;
}
// มีการรับและส่งข้อมูล
function checkNumber(num: number): string {
  if (num % 2 == 0) {
    return "เลขคู่"
  } else {
    return "เลขคี่"
  }
}

function total(a: number, b: number): number {
  return a + b
}
// console.log(checkNumber(10))
// console.log(total(10, 20))


// Arrow Function
const totalArrow = (a: number, b: number): number => {
  return a + b
}
// console.log(totalArrow(10, 20))

// Default Parameter
const showEmployee = (name: string, age: number, address: string = "ChaingRai") => { // ค่าเริ่มตั้นจะเป็นค่าที่เท่ากับไว้
  console.log(`ชื่อ = ${name}, อายุ = ${age}, ที่อยู่ = ${address}`)
}
// showEmployee("Gun", 20, "ChaingRai")
// showEmployee("GunZ", 15)

//--------------------------------------------------------------------------------------------------------------------------------

/** Object */
//1.ไม่ระบุชนิดข้อมูล
const person = {
  name: "supakun",
  age: 20
}
//2.ระบุชนิดข้อมูล
const person2: { name: string, age: number } = { name: "Jojo", age: 20 }


// function รับข้อมูลเป็น Object
function showDetail(data: { name: string, age: number }) {
  console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`)
}
// showDetail(person)
// function ส่งข้อมูลเป็น Object
const position: { lat: number, long: number } = { lat: 19, long: 20 }
const randomPosition = (): { lat: number, long: number } => {
  return {
    lat: Math.random(),
    long: Math.random()
  }
}
// console.log(randomPosition())

// Excess Properties Check --> ตรวจสอบ props ที่เข้ามาว่าตรงกับที่กำหนดใน function ไหม
function showData(data: { name: string, age: number }) {
  console.log(`ชื่อ = ${data.name}, อายุ = ${data.age}`)
}
// showData({ name: "supakun", age: 20, address: "กรุงเทพ" })

//--------------------------------------------------------------------------------------------------------------------
// ** Type Aliases ** --> เป็นการสร้างโครงสร้างข้อมูลมาก่อน
type Employee = {
  id: number,
  name: string,
  salary: number,
  phone: string
}

let emp1: Employee = {
  id: 1,
  name: "supakun",
  salary: 50000,
  phone: "062278454"
}
// console.log(emp1)

//Type Aliases --> optional
type Employee2 = {
  id: number,
  name: string,
  salary: number,
  phone?: string //? มีหรือไม่มี type นี้ก็ได้
}

let emp2: Employee2 = {
  id: 1,
  name: "supakun",
  salary: 50000,
}
// console.log(emp2)

//ReadOnly (Type Aliases)
type Employee3 = {
  readonly id: number, //ไม่สามารถแก้ไขได้
  name: string,
  readonly salary: number, //ไม่สามารถแก้ไขได้
  phone: string
}

let emp3: Employee3 = {
  id: 6,
  name: "supakun",
  salary: 50000,
  phone: "053454521"
}
//--------------------------------------------------------------------------------------------------------------------

//** Array **/
//สามารถประกาศได้ 2 แบบ
//1.type[]
const users: string[] = ["gun", "jojo"]
const ages: number[] = [10, 20, 30]
//2.Array<type>
const phone: Array<string> = ["053453455"]

//** Type Aliases Array **
type ArrayEmp = {
  name: string,
  salary: number,
  department?: string
}

const empArry: ArrayEmp[] = []
empArry.push({ name: "gun", salary: 5000, department: "Programer" })

// Function overloading => รับ parameter หลายแบบได้หลายแบบ แต่ต้องมีการกำหนด type ให้ชัด
function sayHi2(): string // ไม่มีการรับค่า return เป็น string
function sayHi2(name: string): string // รับค่าเป็น string
function sayHi2(name?: unknown): unknown { 
  if (!name) {
    return "Hello TypeScript"
  }
  if (typeof name === "string") {
    return `Hello ${name}`
  }
  throw new Error("ชนิดข้อมูลไม่ถูกต้อง");
}

//----------------------------------------------------------------------------------------------------------

//Spread Operator ...
const section: string[] = ["dog", "cat"]
const department: string[] = ["Programer", "maketing"]
department.push(...section)
// console.log(department)

//Rest Parameter
const total2 = (...number: number[]) => {
  return number.reduce((result, value) => {
    return result + value
  })
}
// console.log(total2(100, 200))

//Destructuring
const person3 = {
  fname: "gun",
  age: 20,
  address: "BKK"
}
const { fname, age, address } = person3
// console.log(fname)
// console.log(age)
// console.log(address)

//Tuple --> จะหมือนกับ Array แต่จะสามารถมี type ที่ต่างกันได้
const employee: [number, string, boolean] = [10, "gun", true]
// console.log(employee)


// * ความแตกต่างระหว่าง Array กับ Tuple *
// Array 
// - ขนาดไม่แน่นอน (ยืดหยุ่น)
// - สมชิกใน Array ต้องมีชนิดข้อมูลเดียวกันทั้งหมด

// Tuple
// - ขนาดแน่นอน (ไม่ยืดหยุ่น) 
// - จะมีขนาดที่แน่นอน แต่ Array จะมีขนาดที่ไม่แน่นอน
