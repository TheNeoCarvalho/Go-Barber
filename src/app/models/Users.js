const bcrypt = require('bcryptjs')

module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define(
    'User',
    {
      name: Datatypes.STRING,
      email: Datatypes.STRING,
      avatar: Datatypes.STRING,
      pass: Datatypes.VIRTUAL,
      pass_hash: Datatypes.STRING,
      provider: Datatypes.BOOLEAN
    },
    {
      hooks: {
        beforeSave: async user => {
          if (user.pass) {
            user.pass_hash = await bcrypt.hash(user.pass, 8)
          }
        }
      }
    }
  )

  return User
}
