const mysql = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'practice2'  //nodetraining
});
 connection.connect((err) => {
    if(err) throw err;
    // console.log('Connected to MySQL Server!');
    // connection.query('select * from student where st_id = 3',(err,result, fields)=>{
    //     if(err) throw err;
    //     // console.log(result);
    // });
});

module.exports.connection = connection;



