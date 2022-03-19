const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodemvc5', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
})

try {
    sequelize.authenticate();
    console.log('Conectamos ao mysql com sucesso')
} catch(err) {
    console.log(err)
}

module.exports = sequelize