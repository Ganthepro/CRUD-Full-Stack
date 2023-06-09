const express = require("express")
const app = express()
const mysql = require("mysql")
const cors = require('cors')

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

app.use(cors());

app.get('/', (req, res) => {
  const sql = `SELECT * FROM mytable2`;
  connection.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
      return;
    }
    const items = result.map((item) => {
      return item;
    });
    res.send(items);
  });
});

app.get('/apply/:data',(req,res) => {
  const data = req.params.data
  const sql = `INSERT INTO mytable2 (name) VALUES (?);`
  connection.query(sql, [data], (err) => {
    if (err) throw err;
    console.log("insert successfully!");
  })
  res.send(null)
})

app.get('/delete/:id',(req,res) => {
  const id = req.params.id
  const sql = `DELETE FROM mytable2 WHERE id = ${id}`
  connection.query(sql, (err) => {
    if (err) throw err;
    console.log("delete successfully!");
  })
  res.send(null)
})

app.get('/update/:id/:data',(req,res) => {
  const id = req.params.id
  const data = req.params.data
  const sql = "UPDATE mytable2 SET name = ? WHERE id = ?"
  connection.query(sql,[data,id],(err) => {
    if (err) throw err;
    console.log("update successfully!");
  })
  res.send(null)
})

app.listen(5500, () => console.log("Server started on port 5500"));