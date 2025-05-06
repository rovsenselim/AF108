import express from "express";
import fs from "fs";
import { json } from "stream/consumers";
import { v4 as uuidv4 } from 'uuid';




const app = express();
const port = 3000;




app.get("/", (req, res) => {
    res.send("AF108");
});

let Students = JSON.parse(fs.readFileSync("db.json"))





app.get("/api/Students", (req, res) => {
    try {
        res.status(200).send({ message: "Success", data: Students })

    } catch (error) {
        res.status(500).send({ message: "Internal server error" })


    }
})





app.get("/api/Students/:id", (req, res) => {
    const { id } = req.params.id
    res.send(id)
    try {
        const Students = Students.find((Students) => id == id)
        if (!Students) {
            res.status(404).send({ message: "Student not found" })

        }
        res.status(200).send({ message: "Success", data: Students })

    } catch (error) {

        res.status(500).send({ message: "Internal server error" })

    }
})




app.post("/api/Students", (req, res) => {
    try {
        const newStudent = req.body;

        if (!newStudent.name || !newStudent.age) {
            return res.status(400).send({ message: "Bad request" });
        }

        const studentWithId = { id: uuidv4(), ...newStudent };

        Students.push(studentWithId);

        fs.writeFileSync("db.json", JSON.stringify({ Students }, null, 2));

        res.status(201).send({ message: "Success", data: studentWithId });

    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Internal server error" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});





app.delete("/api/Students.:id", (req, res) => {

    let { id } = req.params

    try {
        const StudentsIndex = Students.findIndex((Students) => Students.id == id)

        if (StudentsIndex == -1) {
            res.status(404).send({ message: "Student no found" })

        }
        Students.splice(StudentsIndex, 1)
        fs.writeFileSync("db.json0", JSON.stringify({ Students }))
        res.status(200).send({ message: "Student delete" })


    } catch (error) {
        res.status(500).send({ message: "Internal server error" })

    }
})




app.put("/api/Students/:id", (req, res) => {

    let { id } = req.params
    let updatedStudent = req.body

    try {
        const studentIndex = Students.findIndex(student => student.id == id)

        if (studentIndex == -1) {
            return res.status(404).send({ message: "Student not found" })
        }

        Students[studentIndex] = { id, ...updatedStudent }

        fs.writeFileSync("db.json", JSON.stringify({ Students }))
        res.status(200).send({ message: "Student replaced", data: Students[studentIndex] })

    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})



app.patch("/api/Students/:id", (req, res) => {

    let { id } = req.params
    let updateData = req.body

    try {
        const studentIndex = Students.findIndex(student => student.id == id)

        if (studentIndex == -1) {
            return res.status(404).send({ message: "Student not found" })
        }

        Students[studentIndex] = { ...Students[studentIndex], ...updateData }

        fs.writeFileSync("db.json", JSON.stringify({ Students }))
        res.status(200).send({ message: "Student partially updated", data: Students[studentIndex] })

    } catch (error) {
        res.status(500).send({ message: "Internal server error" })
    }
})




app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});