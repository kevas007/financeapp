const Sequelize = require('sequelize')
require('dotenv').config();

const host = (`${process.env.NODE_ENV}` === "dev") ? `${process.env.HOST2}` : `${process.env.HOST}`;//private field
const user = (`${process.env.NODE_ENV}` === "dev") ? `${process.env.USER2}` : `${process.env.USER}`;//private field
const pass = (`${process.env.NODE_ENV}` === "dev") ? `${process.env.PASS2}` : `${process.env.PASS}`;//private field
const database = (`${process.env.NODE_ENV}` === "dev") ? `${process.env.DB2}` : `${process.env.DB}`;//private field

console.log(host, user, pass, database);

//database: database connection via pool
const pool = new Sequelize(
    database,
    user,
     pass,
    {
        host: process.env.host,
        dialect: "mysql",
        port: 3306,
    }
);



// pool.on('acquire', function (connection) {
//     console.log('Connection %d acquired', connection.threadId);
// });

// pool.on('release', function (connection) {
//     console.log('Connection %d released', connection.threadId);
// });


//pool.connect((e) => {
  //   if (e) {
  //       console.log("conection failed! error: " + e.message);
  //       return;
 //    }
  //   console.log("conection success");
// });

module.exports = pool