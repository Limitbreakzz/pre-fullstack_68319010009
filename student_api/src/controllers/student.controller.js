const prisma = require("../prisma");


// ดึงข้อมูลทั้งหมด และ ค้นหาจากชื่อ
exports.getAllStudents = async (req, res) => {
    try {
        const search = req.query.search || "";
        const students = await prisma.student.findMany({
            where: {
                name: {
                    contains: search
                }},
                orderBy: {
                    id: "asc"
                },
        });
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}
// ดึงข้อมูลตามไอดี
exports.getStudentsById = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const student = await prisma.student.findUnique({
            where : {id}
        });
        if (!student) {
            res.status(404).json({
                message : "Student Not Found"
            });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({
            message : "Internal Server Error"
        });
    }
}
// เพิ่มข้อมูลใหม่
exports.createStudent = async (req, res) => {
    try {
        const { name, age, major } = req.body;
        if (!name || !age || !major) {
            return res.status(400).json({
                message : "Please Field Information"
            });
        }
        const newStudent = await prisma.student.create({
            data : {
                name,
                age : Number(age),
                major
            },
        });
        res.status(201).json(newStudent)
    } catch {
        res.status(500).json({
            message : "Internal Server Error"
        });
    }
}
// แก้ไขข้อมูล
exports.updateStudent =  async (req, res) => {
    try {
        const id = Number(req.params.id)
        const { name, age, major } = req.body;
        if (!name || !age || !major) {
            return res.status(400).json({
                message : "Please Field Information"
            });
        }
        const updateStudent = await prisma.student.update({
            where : {id},
            data : {
                name,
                age : Number(age),
                major
            },
            
        });
        res.status(200).json(updateStudent);
    } catch {
        res.status(404).json({
            message : "Student Not Found"
        });
    }
}
// ลบข้อมูล
exports.deleteStudent = async (req, res) => {
    try {
        const id = Number(req.params.id)
        const deleteStudent = await prisma.student.delete({
            where: { id }
        })
        res.status(200).json({
            message : `ลบนักศึกษารหัส ${id} สำเร็จ`,
            data : deleteStudent
        });
    } catch {
        res.status(404).json({
            message : "Student Not Found"
        });
    }
}