const { Router } = require('express');
const sendmail = require('sendmail')();
const infoRouter = Router()

infoRouter.post('/sendMail',(req,res) => {
  const { formForgot } = req.body
  if(formForgot !== undefined) {
    sendmail({
      from: `${formForgot}`,
      // to: 'webdev170291@yandex.ru',
      to: 'Spmain54@mail.ru',
      subject: `Запрос на восстонавление пароля от <${formForgot}>`,
      html: `Пользователь с ником ${formForgot.bold()} запрашивает пароль`,
    }, function(err, reply) {
      res.status(200).send({msg: "Email succes"})
      
    })
  }else {
    res.status(200).send({msg: "Sorry blank page :("})
  }

});

module.exports = infoRouter;
