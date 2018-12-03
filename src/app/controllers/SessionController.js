const { User } = require('../models')

class SessionController {
  async create (req, res) {
    return res.render('auth/sigin')
  }

  async store (req, res) {
    const { email, pass } = req.body
    const user = await User.findOne({ where: { email } })
    if (!user) {
      console.log('Usuario não encrontrado!')
      return res.redirect('/')
    }

    if (!(await user.checkPass(pass))) {
      console.log('Senha incorreta')
      return res.redirect('/')
    }

    req.session.user = user

    return res.redirect('/app/dashboard')
  }

  destroy (req, res) {
    req.session.destroy(() => {
      res.clearCookie('root')
      return res.redirect('/')
    })
  }
}

module.exports = new SessionController()
