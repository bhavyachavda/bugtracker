const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express());
app.use(express.json());

// app.get('/mess', (req, res) => {
//     res.json({ mess: "Hello from server" })
// });

app.get("/display", (req, res) => {
  const sql = "select * from bug19";
  con.query(sql, (err, result) => {
    if (err) {
      throw err;
    } else {
      result = result.map((item) => {
        console.log(item.date);
        const date = new Date();
        return item;
      });
      res.json(result);
    }
  });
});

app.listen(9000, () => {
  console.log(`server is running on 9000.`);
});

var mysql = require("mysql");
var con = mysql.createConnection({
  host: "192.168.2.8",
  user: "trainee",
  password: "trainee@123",
  database: "trainee",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Database Connected");
});

app.post("/addbug", (req, res) => {
  const date = new Date();
  const Title = req.body.Title;
  const Description = req.body.Description;
  let Time = date.toLocaleTimeString();
  let CurrDate = date.toJSON().slice(0, 10);
  const Assignee = req.body.Assignee;

  console.log(Time);

  const sql = `insert into bug19 values ("${Title}","${Description}", "${Time}","${CurrDate}" ,"${Assignee}")`;
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result); //    resolve(result);
    console.log("inserted");
  });
});
