import mysql from "mysql";

// create the connection to database

const db = mysql.createConnection({
  host: "127.0.01",
  user: "root",
  password: "",
  database: "db_restaurant"
});


// db.connect(error => {
//   if (error) throw error;
//   console.log("Successfully connected to the database.");
// });

export default db;