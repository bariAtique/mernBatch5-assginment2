/**
 * This is assignment for mernstack batch-5, module 10;
 * Author: Md Atiqul Bari
 * Cell: 01622179668
 */



var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req,res){

  if(req.url=="/"){
   let data = fs.readFileSync('home.html', 'utf8'); 
   res.end(data);


  }
  else if(req.url=="/about"){
    let data = fs.readFileSync('about.html', 'utf8'); 
   res.end(data);

  }
  else if(req.url=="/terms"){
    let data = fs.readFileSync('terms.html', 'utf8'); 
   res.end(data);
    
  }
  else if(req.url=="/contact"){
    let data = fs.readFileSync('contact.html', 'utf8'); 
   res.end(data);
    
  }
  else if(req.url=="/file-write"){
    fs.writeFile('demo.txt','Hello, This is Atique', function(error){
      if(error){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('File Write Failed');
        res.end();
      }
      else{
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write('File Write Success');
        res.end();

      }
    })
    
  }






});
server.listen(5500);
console.log('server running')