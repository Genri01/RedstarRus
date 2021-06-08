const sendmail = require('sendmail')();

const UserController = {
  sendEmail:(req,res,next) => {
    const { formForgot } = req.body
    sendmail({
      from: `${formForgot}`,
      to: 'Spmain@mail54.ru',
      subject: `Запрос на восстонавление пароля от <${formForgot}>`,
      html: `Пользователь с ником ${formForgot.bold()} запрашивает пароль`,
    }, function(err, reply) {
      res.status(200).send({msg: "Email succes"})
    })
  },
}

module.exports = UserController;