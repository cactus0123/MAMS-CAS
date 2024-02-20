const fs = require("fs");
const { Client } = require("pg");

// Database connection parameters
const client = new Client({
  host: "localhost",
  database: "PERNtut",
  user: "vishal",
  password: "password",
});

// JSON file path
const jsonFile = "../client/src/Components/Courses_v1.json";

// Table name in PostgreSQL
const tableName = "courses";

async function importJsonData() {
  try {
    await client.connect();

    const jsonData = fs.readFileSync(jsonFile, "utf-8");
    const data = JSON.parse(jsonData);

    let sql = "";

    for (const course of data) {
      sql = `INSERT INTO ${tableName}
      ("#N", CID, TITLE, DEPT, CN, CAT, Approver, Appr_User, Appr_Init, PTerms, Show, Contract, "MAMS Prerequisites", CATID) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`;

      const values = [
        course["#N"],
        course.CID,
        course.TITLE,
        course.DEPT,
        course.CN,
        course.CAT,
        course.Approver,
        course.Appr_User,
        course.Appr_Init,
        course.PTerms,
        course.Show,
        course.Contract,
        course["MAMS Prerequisites"],
        course.CATID,
      ];

      await client.query(sql, values);
    }
    console.log("Data import successful");
  } catch (err) {
    console.error("Error importing data: ", err);
  } finally {
    await client.end();
  }
}

importJsonData();
