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
    const { firstName, lastName, studentid, email, yearOfGraduation } = req.body;
    const newStudent = await pool.query(
      "INSERT INTO student_data (first_name, last_name, studentid, email, yog) VALUES ($1, $2, $3, $4, $5) RETURNING *",
      [firstName, lastName, studentid, email, yearOfGraduation]
    ); //(description) is column name, ($1) is var for [first_name]

    res.json(newStudent.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//get all
app.get("/student", async (req, res) => {
  try {
    const allStudents = await pool.query("SELECT * FROM student_data");
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
      "SELECT * FROM student_data WHERE studentid=($1)",
      [id]
    );
    if (oneStudent.rows.length === 0) {
      res.json(null);
    }
    res.json(oneStudent.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//update
app.put("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, yearOfGraduation } = req.body;
    const updateStu = await pool.query(
      "UPDATE student_data SET first_name = $1, last_name = $2, email = $3, yog = $4 WHERE studentid = $5 RETURNING *",
      [firstName, lastName, email, yearOfGraduation, id]
    );
    res.json(updateStu.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

//delete
app.delete("/student/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const deleteStu = await pool.query(
      "DELETE FROM student_data WHERE studentid=$1",
      [id]
    );
    res.json("Student Deleted");
  } catch (err) {
    console.error(err.message);
  }
});

app.post("/submitted-courses/:id", async (req, res) => {
  
  try {
    const selectedCourses = req.body;
    const { id } = req.params;

    for (const course of selectedCourses) {
      await pool.query(
        "INSERT INTO course_requests (cid, studentid, status, request_date) VALUES ($1, $2, $3, $4)",
        [course.value, id, false, getCurrentDate()]
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

app.get("/submitted-courses/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const studentSubmittedCourses = await pool.query(
      "SELECT * FROM course_requests WHERE studentid=($1)",
      [id]
    );
    res.json(studentSubmittedCourses.rows);
  } catch (err) {
    console.error(err.message);
  }
})

app.listen(5100, () => {
  console.log("server has started on port 5100");
});
