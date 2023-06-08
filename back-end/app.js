const express = require("express");
const app = express()
const mysql = require("mysql")

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "ganza112",
    database: "mydb",
  });
  
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL database!");
});

app.get('/',(req,res) => {
    const sql = `SELECT * FROM mytable2 WHERE id = 1`;
    connection.query(sql, (err, result) => {
        result.map((item) => {
            console.log(item.name);
        })
    })
    res.send(null);
})

app.listen(5500, () => console.log("Server started on port 5500"));