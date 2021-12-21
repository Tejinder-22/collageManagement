# collageManagement
1> dependencies - npm install express body-parser ejs mysql 
2> db name - practice2
3> http://localhost:3030/
4> add dummy data to students table , student_course, student_department, courses and department
5> you can add dummy data to students by clicking add_student button first 
6> then add dummy data to student_course by clicking st_course button in project  ( add student id = 1 and course id = 2), then (1, 3), (1,6) respectively 
7> add dummy data to student department by running query = INSERT INTO `student_department`(`student_id`, `department_id`) VALUES (1,1);
8> add dummy data to courses = INSERT INTO `courses`( `courseName`) VALUES ('accounts','node','math','java' );
              
              IF INCASE  ABOVE POINTS NOT WORKED I HAD UPDATED MY DATABASE AS (practice2.sql) CODE  IN GIT REPO ABOVE 
 
9> TESTING 
  1> click on display_st_info button and enter name = Tejinder 
  2> output must be all details of student plus student courses with department assigned 
