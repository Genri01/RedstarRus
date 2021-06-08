const { Router } = require('express');
const sendmail = require('sendmail')();
const infoRouter = Router()

infoRouter.post('/sendMail',(req,res) => {
  const { email, msg } = req.body
  if(email !== undefined && msg !== undefined) {
    sendmail({
      from: `${email}`,
      to: 'info@redstarbaltic.com',
      subject: `Запрос на обратную связь от <${email}>`,
      html: `Пользователь с ником ${email.bold()} запрашивает обратную связь. Прислал сообщение с текстом: " ${msg} "`,
    }, function(err, reply) {
      res.status(200).send({msg: "Email success"})

    })
  }else {
    res.status(200).send({msg: "Sorry blank page :("})
  }

});

module.exports = infoRouter;


