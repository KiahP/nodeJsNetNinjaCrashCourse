const http = require('http');
const { runInNewContext } = require('vm');
const fs = require('fs');
const _ = require('lodash');

// const server = http.createServer();

const server = http.createServer((req, res) =>{
    console.log(req.url, req.method);
    res.setHeader('Content-type', 'text/html');

      // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });
  greet();
  greet();

    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-blah':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
            break;

    }

    //send an html file
    fs.readFile(path,(err, data) =>{
        if(err){
            console.log(err);
            res.end();
        }else{
        //     res.write(data);
            // res.statusCode = 200;
            res.end(data);
        }
    }
    )

// res.write('<p>hello, ninjas</p>');
// res.write('<p>hello again, ninjas</p>');
// res.write('<head><link rel="stylesheet" href="#"></head>');
// res.end();
});



server.listen(3000, 'localhost', () =>{
    console.log('listening for requests on port 3000')
});