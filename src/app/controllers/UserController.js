const { User } = require('../models')

class UserController {
  login (req, res) {
    return res.render('auth/sigin')
  }

  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
    const { filename: avatar } = req.file
    await User.create({ ...req.body, avatar })
    return res.redirect('/')
  }
}

module.exports = new UserController()
