module.exports = (sequelize, Datatypes) => {
  const User = sequelize.define('User', {
    name: Datatypes.STRING,
    email: Datatypes.STRING,
    avatar: Datatypes.STRING,
    pass_hash: Datatypes.STRING,
    provider: Datatypes.BOOLEAN
  })

  return User
}
