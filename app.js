const express = require('express');


const  authRoutes = require('./routes/authRoutes')

const  app = express();

const port = 3030;

app.set('view engine','ejs'); 

app.use(authRoutes);  //here it will automatically consider our routes which are in routes folder in routes.js


// app.get('/showCourses:id',urlencodedParser,(req,res)=>{
//     console.log(req.params.productId);  // how to get id her
//     var sql="SELECT courses.courseName FROM students JOIN student_courses ON students.student_id = student_courses.student_id JOIN courses on student_courses.course_id = courses.course_id JOIN student_department ON students.student_id = student_department.student_id JOIN department ON department.department_id = student_department.department_id JOIN student_sport ON student_sport.student_id = students.student_id JOIN sports ON sports.sport_id = student_sport.sport_id WHERE students.student_id = 1";
//      connection.query(sql,(err, data, fields)=>{
//         if (err) throw err;  
//         console.log(data);
//         res.render('mycourses' ,{ userData: data});
//      })
   
// });

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`)
});






