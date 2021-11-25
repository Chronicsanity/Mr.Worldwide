//Adding SQL connection to console

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "password",
    database: "sra_db",
  });

/*C@pst0n3*/
app.post("/register", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const access = req.body.access;

    db.query(
        "INSERT INTO users (username, pass, email, access) VALUES (?,?,?,?)",
        [username, password,"hello","whatsup"],
        (err, result) => {
          console.log(err);
        }
      );
});

app.listen(3001, () => {
    console.log("running server");
  });

//Test to see date to make sure there is SQL connection to app

/*var q = 'SELECT CURTIME() as time, CURDATE() as date, NOW() as now';

connection.query(q, function(error, results, fields){
    if(error) throw error;
    console.log(results[0].time);
}); 
//Need this to close database connection
connection.end();*/
