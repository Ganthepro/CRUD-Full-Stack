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
      console.log(item);
      return item;
    });
    res.send(items);
  });
});

app.listen(5500, () => console.log("Server started on port 5500"));