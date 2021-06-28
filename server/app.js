const express = require('express');
// const { Router } = require('express');
const cors = require('cors');
const path = require('path');
const config = require('config');
const app = express();
const info_rout = require('./routes/info.routes');

const http = require('http');
const https = require('https');
var fs = require('fs');


app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
  res.header('Access-Control-Allow-Credentials', true);
  next();
},express.json());
app.use(cors());

app.use('/api',info_rout);
// app.use('/server',Router().get('/getdata',(req,res,next) => {
//   res.status(200).send(oldData)
// }));
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
if (process.env.NODE_ENV === 'production') {
  app.use('/',express.static(path.join(__dirname,'..','build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'..','build','index.html'))
  })
}

const PORT = config.get('Server.port') || 8080;

// var options = {
//   key: fs.readFileSync('certificates/private.key'),
//   cert: fs.readFileSync('certificates/certificate.crt'),
//   ca: fs.readFileSync('certificates/ca_bundle.crt')
// };

http.createServer(app).listen(PORT,()=>{
  console.log(`Start server ${PORT} on port`);
  console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
});

// https.createServer(options, app).listen(443,()=>{
//   console.log(`Start server 443 on port`);
//   console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
// });





// app.use(function(req,resp,next){
//   if (req.headers['x-forwarded-proto'] == 'http') {
//       return resp.redirect(301, 'https://' + req.headers.host + '/');
//   } else {
//       return next();
//   }
// });

