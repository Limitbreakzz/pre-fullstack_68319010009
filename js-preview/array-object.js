// อาร์เรย์ และ ออบเจคต์

// Array
const students = ["Earth", "Tho", "Silapakorn", "Ood", "Matus"];

console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้อมูลใหม่ทำการแสดงผลลัพธ์ที่อัพเดท ${students} จำนวนรายชื่อ ${students.length} คน`);

// Object
const student = {
    id: 101,
    name: "Ice",
    age: 18,
    major: "Information Technology",
};
console.log(`name ${student.name}`);
console.log(`major ${student.major}`);

// Arroy and Object
const studentList = [
    {id: 101, name: "Ice", age: 20, major: "IT"},
    {id: 102, name: "Ball", age: 19, major: "CG"},
    {id: 103, name: "Korn", age: 30, major: "IT"},
];

// map : แปลงทุกตัว ให้ได้ array ใหม่ในการแสดงผล
const names = studentList.map((s) => `รหัส ${s.id} ชื่อ ${s.name} อายุ ${s.age} สังกัด ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map ${names}.`);

// filter : คัดกรองเฉพาะตัวที่เลือกและตรงเงื่อนไข
const isStudents =  studentList.filter((s) => s.major === "IT");
console.log(`กรองข้อมูล ${isStudents.length}`);

// find : หาตัวแรก(ตัวอักษร, ตัวเลข)ที่ตรงเงื่อนไข
const found = studentList.find((s) => s .id === 103);
console.log("ผลการค้นหา", found);
console.log(`ผลการค้นหา ${found.name}`);

// ค้นหาจากชื่อ ไม่สนพิมพ์เล็กพิมพ์ใหญ๋
const keyword = "ba";
const searchResult = studentList.filter((s) => s.name.toLowerCase().includes(keyword.toLocaleLowerCase()));
console.log(`ผลการค้นหา : ${keyword}`, searchResult.map((s) => s.name));
// ที้นี้ นศ. ปรับให้ลองค้นหาชื่อสาขา และให้แสดงข้อมูลทั้งหมดที่ตรงกับการพิมพ์ชื่อสาขาแค่บางอักขระ (keyword: i)
const keyword_2 = "i";
const searchResult_2 = studentList.filter((s) => s.major.toLowerCase().includes(keyword_2.toLocaleLowerCase()));
console.log(`ผลการค้นหา : ${keyword_2}`, searchResult_2.map((s) => s.major));
