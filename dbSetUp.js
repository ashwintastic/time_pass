var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "ashwinik",
    password: "reset-123",
    database: "10gags"
});

// con.connect(function(err) {
//     if (err) throw err;
//     console.log("Connected!");
//     /*Create a table named "customers":*/
//     var sql = "CREATE TABLE contents(id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY," +
//         " type varchar(30), " +
//         "path varchar(30))";
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log("Table created", exit);
//     });
// });


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a table named "customers":*/
    var sql = "CREATE TABLE users (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, " +
        " name varchar(30), " +
        " email varchar(30), " +
        " token varchar(255), " +
        " fbID INT(6), " +
        " userName varchar(30) )";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table created");
    });
});