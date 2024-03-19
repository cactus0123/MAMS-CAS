const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

const { getCurrentDate } = require("./util");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES

//create
app.post("/student", async (req, res) => {
  try {
    const { first, last, yog } = req.body;
    const newStudent = await pool.query(
      "INSERT INTO students (first, last, yog) VALUES($1, $2, $3) RETURNING *",
      [first, last, yog]
    ); //(description) is column name, ($1) is var for [fName]

    res.json(newStudent.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all
app.get("/student", async (req, res) => {
  try {
    const allStudents = await pool.query("SELECT * FROM students");
    res.json(allStudents.rows);
  } catch (err) {
    console.error(err.message);
  }
});

//get
app.get("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const oneStudent = await pool.query(
      "SELECT fName FROM students WHERE studentpk=($1)",
      [id]
    );
    res.json(oneStudent.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update
app.put("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { fName } = req.body;
    const updateStu = await pool.query(
      "UPDATE students SET fName = $1 WHERE studentpk = $2",
      [fName, id]
    );
    res.json("Student Updated");
  } catch (err) {
    console.error(err.message);
  }
});

//delete
app.delete("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteStu = await pool.query(
      "DELETE FROM students WHERE studentpk=$1",
      [id]
    );
    res.json("Student Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/submitted-courses", async (req, res) => {
  
  try {
    const selectedCourses = req.body;

    for (const course of selectedCourses) {
      await pool.query(
        "INSERT INTO course_requests (cid, studentid, status, request_date) VALUES ($1, $2, $3, $4)",
        [course.value, 3, false, getCurrentDate()]
      );
    }

    res.json("Courses Submitted");
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/submitted-courses", async (req, res) => {
  try {
    const allSubmittedCourses = await pool.query("SELECT * FROM course_requests");
    res.json(allSubmittedCourses.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5100, () => {
  console.log("server has started on port 5100");
});
