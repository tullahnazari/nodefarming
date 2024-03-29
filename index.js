//filesystem module to get access to those functions
const fs = require('fs');
const http = require('http');
const url = require('url');


/////////////////////////////////////////////////////////
////        FILES         //////////////



// //Blocking way, synchronous
// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
// console.log(textIn);

// const textOut = 'this is what we know abt the avacado ${textIn}.\nCreated on ${Date.now()}';
// fs.writeFileSync('./txt/output.txt', textOut);
// console.log('FIle written boy!!!')

//Non-blockin, asynchronous way
//an example with error handling
// fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
//   if (err) return console.log('Error!!! NOOOO');

//   fs.readFile(`./txt/${data1}.txt`,'utf-8', (err, data2) => {
//   console.log(data2);
//     fs.readFile('./txt/append.txt', 'utf-8', (err, data3) => {
//       console.log(data3);

//       fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
//         console.log('your file has been written :)')
//       });
//     });
//   });
// });
//   console.log('Will read file!');


/////////////////////////////////////////////////////////
////        Server        /////////////


const server = http.createServer((req, res) => {

  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the OVERVIEW');
  } else if (pathName === '/product') {
    res.end('This is the PRODUCT');
  } else
    res.writeHead(404, {
      'content-type': 'text/html',
      'my0own-header': 'hello-world'
    });
  res.end('<h1>Page Not Found</h1>');
});

server.listen(8000, 'localhost', () => {
  console.log('Do you hear me callin?');
});