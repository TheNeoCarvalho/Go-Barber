class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }
}

module.exports = new UserController()
