//Program-1
//file not found error

var url= require('url');
var http=require('http');
var fs=require('fs');
http.createServer( function(request, response){
    if(request.method=='GET'){
        response.writeHead(200,{'Content-type':'text/html'});
        var myurl=url.parse(request.url)
        var pathname=myurl.pathname;
   //response.write('Welcome to my domain!!!');
        fs.readFile(pathname.substr(1),function(err,data){
            if(err){
                
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
            
            response.write(data);
            response.end();
            }
        })
    }
    
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");



//Program 2
//serverget.js
// Execute Server program serverget.js, then execute client program clientget.js


var url= require('url');
var http=require('http');
var fs=require('fs');
http.createServer( function(request, response){
    if(request.method=='GET'){
        response.writeHead(200,{'Content-type':'text/html'});
        var myurl=url.parse(request.url)
        var pathname=myurl.pathname;
        if(pathname=='/'){
            pathname="/index.html"
        }
   // response.write('Welcome to my domain!!!');
        fs.readFile(pathname.substr(1),function(err,data){
            if(err){
                
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
            
            response.write(data);
            response.end();
            }
        })
    }
    
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");



//Program 2.1
//clientget.js
// Execute Server program serverget.js, then execute client program clientget.js

var http = require('http');
var options = {
	host:'localhost',
	port:'8080',
	path:'/index.html',
	method:'GET'
};
var callback = function(response){
	var body = '';
	response.on('data',function(data){
		body+=data;
	})
	.on('end',function(){
		console.log(body);
	});
}
var req = http.request(options,callback);
req.end();




//Program 3
//serverpost.js
//execute serverpost.js first, then execute clientpost.js in another command terminal

var fs = require('fs');
var http=require('http');
var url=require('url');
http.createServer(function(request,response){
    if(request.method=="POST"){
        var myurl=url.parse(request.url);
        var pathname=myurl.pathname;
        let body=[];
        request.on('data',(chunk)=>{
            body.push(chunk);
            console.log(chunk.toString());
        })
        .on('end',()=>{
            body=Buffer.concat(body).toString();
            //console.log(body);
            fs.writeFile(pathname.substr(1),body, (err,res)=>{
                response.writeHead(200,{'Content-type':'text/plain'});
                response.end("Message saved");
            })
        })
    }

}).listen(8080);
console.log("server is up and Running");





//Program-3.1
//clientpost.js
//execute serverpost.js first, then execute clientpost.js in another command terminal

var http=require('http');
var fetch=require('node-fetch') //third party module
fetch('http://localhost:8080/sample.txt',{
    method:'POST',
    Headers:{'Content-type':'application/json'},
    body:JSON.stringify({"name":"Raj","srn":"12345"})
})
.then((res)=>res.text())
.then((res)=>console.log(res))




//Program-4
//serverjson1.js
//getting part of data from the file sample.txt by specifying it on the browser

/*create a file sample.txt with the following data 

{"srn":"1234", "name":"Alice"}
{"srn":"5678", "name":"Bob"}
{"srn":"9101", "name":"Charlie"}

*/

//run serverjson1.js code on the terminal

// enter - http://localhost:8080/sample.txt?srn=12345 on the address bar of the browser

// output = Alice (on the browser), you can change srn value to 5678 and 9101 to get Bob and Charlie.

var url= require('url');
var http=require('http');
var fs=require('fs');
var qs=require('querystring') //core module
http.createServer( function(request, response){
    if(request.method=='GET'){
        response.writeHead(200,{'Content-type':'text/html'});
        var myurl=url.parse(request.url)
        var pathname=myurl.pathname;
        if(pathname=='/'){
            pathname="/index.html"
        }
  
   
        fs.readFile(pathname.substr(1), 'utf-8',function(err,data){
            if(err){
                
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
                
                var lines=data.split(/\r?\n/);
                      
                var query=myurl.query; //?srn=1234&& dept=cse
                var qobj= qs.parse(query) //{"srn":"1234"}
                for(var i in lines){
                      var obj=JSON.parse(lines[i]);
             // response.write(data);
                     if(obj.srn==qobj.srn)
                      response.write("<h1>"+obj.name+"</h1>");
                }
                 response.end();
                }
        })
    }
    
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");

 

//Program 5
//serverjson2.js
//getting a part of data from the file sample1.txt by specifying it on the browser
//make sure sample1.txt has only one object for making this code work
//enter - http://localhost:8080/sample1.txt?srn=1234 on the browser  
//{"srn":"1234","name":"Alice"} data in sample1.txt(one object)
//output - Alice


var url= require('url');
var http=require('http');
var fs=require('fs');
var qs=require('querystring') //core module

http.createServer( function(request, response){
    if(request.method=='GET'){
        response.writeHead(200,{'Content-type':'text/html'});
        var myurl=url.parse(request.url)
        var pathname=myurl.pathname;
        if(pathname=='/'){
            pathname="/index.html"
        }
  
   
        fs.readFile(pathname.substr(1),'utf-8', function(err,data){
            if(err){
                
                response.write("<h1> File not found</h1>")
                response.end();
            }
            else {
                
                var obj=JSON.parse(data);                     
                var query=myurl.query; //?srn=1234&& dept=cse
                var qobj= qs.parse(query) //{"srn":"1234"}
                 if(obj.srn==qobj.srn)
                      response.write("<h1>"+obj.name+"</h1>");
                
                 response.end();
                }
        })
    }
    
}).listen(8080);
console.log("Server is up and running on http://localhost:8080");