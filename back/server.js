const express = require("express");
const mysql = require("mysql");

const konekcija = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "users",
});

konekcija.connect(function (err) {
  if (err) throw err;

  console.log("konektovali ste se na bazu");
});

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("konektovan je server!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//CORS
app.use((req,res,next)=>{
  res.append("Access-Control-Allow-Origin",["*"]);
  res.append("Acces-control-Allow-Methods","GET,POST,PUT,PATCH,DELETE");
  res.append("Access-Control-Allow-Headers","Content-Type");
  next();
});

app.post("/register", function (req, res) {
  const { username, imePrezime, email, password } = req.body;
  const rola = 0;

  konekcija.query(
    "SELECT * from user where username=?",
    [username],
    function (err, result, field) {
      if (err) throw err;

      console.log(result);

      if (result.length > 0) {
        res.json({
          message: "Korisnik vec postoji",
        });
      } else {
        //konekcija na bazu
        konekcija.query(
          "INSERT INTO user (username, imePrezime, email, password, rola) VALUES (?,?,?,?,?);",
          [username, imePrezime, email, password, rola],
          function (err, result, field) {
            if (err) throw err;
          }
        );

        res.json({
          message: "ubacen korisnik",
        });
      }
    }
  );
});

