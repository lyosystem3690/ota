var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "1centdream"
});



con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "insert into stak1cents (account_metamask,time,porcent,wincrytpo,stakincrytwin) values ('4234','324','23423','432423','423');";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });