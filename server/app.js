const express = require('express');
// const { Router } = require('express');
const cors = require('cors');
const path = require('path');
const config = require('config');
const app = express();
const info_rout = require('./routes/info.routes');

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
  app.use('/',express.static(path.join(__dirname,'..','client','build')))
  app.get('*',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'..','client','build','index.html'))
  })
}

const PORT = config.get('Server.port') || 8080;

app.listen(PORT,()=>{
    console.log(`Start server ${PORT} on port`);
    console.log(`process.env.NODE_ENV = ${process.env.NODE_ENV}`);
});


