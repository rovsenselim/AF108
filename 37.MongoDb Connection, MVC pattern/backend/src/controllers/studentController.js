import Student from "../models/studentModel.js";

export const getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json({ students });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ student });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const addStudent = async (req, res) => {
    try {
        const { name, surname, age, isStudent } = req.body;

        if (!name || !surname || !age || isStudent === undefined) {
            return res.status(400).json({ message: "Please fill in all fields" });
        }

        const newStudent = new Student({
            name,
            surname,
            age,
            isStudent,
        });

        await newStudent.save();
        res.status(201).json({ message: "Student added", data: newStudent });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const updateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const updatedStudent = await Student.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({ message: "Student details updated", data: updatedStudent });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};

export const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }

        const deletedStudent = await Student.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Student deleted", data: deletedStudent });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
};
