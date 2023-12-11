const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES

//create
app.post("/student", async (req, res) => {
  try {
    const { fName } = req.body;
    const newStudent = await pool.query(
      "INSERT INTO students (fName) VALUES($1) RETURNING *",
      [fName]
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
    console.log(err.message);
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
    res.json("Student Deletes");
  } catch (err) {
    console.log(err.message);
  }
});

app.listen(5100, () => {
  console.log("server has started on port 5100");
});
