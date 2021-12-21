const { connection } = require('../models/db');

exports.getAllInfo = (req,res)=>{   // task to make database queries in diffrent file
    var sql="SELECT students.student_id, students.first_name,students.address,students.email,courses.courseName,department.departmentName,sports.sportsName FROM students JOIN student_courses ON students.student_id = student_courses.student_id JOIN courses on student_courses.course_id = courses.course_id JOIN student_department ON students.student_id = student_department.student_id JOIN department ON department.department_id = student_department.department_id JOIN student_sport ON student_sport.student_id = students.student_id JOIN sports ON sports.sport_id = student_sport.sport_id WHERE first_name = '"+req.body.name+"'";
    connection.query(sql, function (err, data, fields) {  
    if (err) throw err; 
    res.render('displayInfo', { userData: data});
  });

};


exports.addCourse = (req,res)=>{
    var sql= "INSERT INTO student_courses (student_id, course_id) VALUES ("+req.body.sid+","+req.body.cid+")";
    connection.query(sql, function (err, data, fields) {  
        if (err) throw err; 
        console.log('data inserted succesfully');
      });
      res.render('course');
}

exports.addStudent = (req,res)=>{
  
    console.log(req.body.sname);
  
    var sql1="INSERT INTO students ( first_name, last_name, email, phone, gender, dob, address, state, country, pincode) VALUES (' "+req.body.sname+"  ','"+req.body.lname+"', '"+req.body.email+"','"+req.body.phone+"','"+req.body.gender+"','"+req.body.dob+"','"+req.body.address+"','"+req.body.state+"','"+req.body.country+"','"+req.body.pincode+"')";
    connection.query(sql1, function (err, data, fields) {
    if (err) throw err;  
   console.log('1 student inserted'); 
  }); 
  res.render('form');  

}
