const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database:'student',
    password: 'root',
});

app.set('view engine','ejs');
app.set('views','./views');

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/student/data',(req,res)=>{
    // let sql = 'SELECT * FROM students;';
    // pool.execute(sql , (err,result)=>{
    //     if(err){
    //         console.log(`Error fetching students : ${err.message}`);
    //     }
    //     else{
    //         let string = JSON.stringify(result);
    //         console.log(`Result : ${string}`);
    //         let jsonOBJ = JSON.parse(string);
    //         console.log(`JSON OBJECT : ${jsonOBJ}`);
    //         res.render('viewStudent',{Students : jsonOBJ});
    //     }
    // });
    
    res.render('viewStudent',{Students : result});
});

app.get('/student',(req,res)=>{
    res.render('createStudent');
});

app.post('/student',(req,res)=>{
    console.log(req.body);
    let sql = `INSERT INTO students(roll_no,name,address) VALUES (${req.body.rollno},'${req.body.name}','${req.body.address}');`
    pool.execute(sql,(err,result) =>{
        if(err){
            console.log(`err ${err.message}`);
        }
        else{
            console.log(`Result : ${result}`)
        }
    })
    res.send('Added student successfully');
});

app.get('/student/update',(req,res) => {
    res.render('update');
});

app.post('/student/update',(req,res)=>{
    let id = req.body.rollno;
    let updatedName = req.body.name;
    let updatedAddress = req.body.address;

    let sql = `UPDATE students 
                SET name = '${updatedName}',address = '${updatedAddress}'
                WHERE roll_no = ${id};` ;
    pool.execute(sql,(err) => {
        if(err){
            console.log(`Error in updating database err:${err.message}`);
        }

        res.send('Student data updated Successfully !');
    })
});


app.get('/student/delete',(req,res)=>{
    res.render('deleteStudent');
});

app.post('/student/delete/',(req,res)=>{
    let id = req.body.rollno;
    sql = `DELETE FROM students WHERE roll_no = ${id};`;
    pool.execute(sql,(err)=>{
        if(err){
            console.log(`error in deleting student data from database : ${err.message}`);
        }
        res.send('Student data deleted successfully');
    });
});



app.listen(port, ()=>{
    console.log(`Listening on ${port}`);
});