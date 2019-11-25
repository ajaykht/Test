var express = require('express');
var app = express();  
var bodyParser = require('body-parser');
//app.use(bodyParser);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var mysql = require('mysql');   // mysql connection
var con = mysql.createConnection({  
  host: "localhost",  
  user: "root",  
  password: "",
  database: "nodejs"   
});  
con.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
});  



app.get('/', function (req, res) {  
  res.send('Welcome to JavaTpoint!');  
});  

app.post('/process_get', function (req, res) {  
    //console.log(req.body);
    response = {  
                    Name:req.body.name,  
                    Email:req.body.email  
                 };  
       console.log(response);        
        var sql = "INSERT INTO test_tbl (name,email) VALUES (response.Name,response.Email)";  
        console.log(sql)
        con.query(sql);  
        res.end(JSON.stringify(response)); 
    })  

var server = app.listen(3000, function () {  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://localhost:', host, port); 

}); 
