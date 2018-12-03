module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define('Appointment', {
    date: DataTypes.DATE
  })

  Appointment.associate = models => {
    Appointment.belongsTo(models.User, { foreignKey: 'user.id' })
    Appointment.belongsTo(models.User, { foreignKey: 'provider.id' })
  }

  return Appointment
}
