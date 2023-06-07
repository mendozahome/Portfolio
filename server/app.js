const Sequelize = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'portfolio.db'
  });

class Portfolio extends Sequelize.Model{} 
Portfolio.init({
full_name: Sequelize.STRING,
email: Sequelize.STRING,
phone: Sequelize.INTEGER,
email_subject: Sequelize.STRING,
message: Sequelize.STRING
}, { sequelize });





  (async () => {
    await sequelize.sync({ force: true });

try{ 
    const portfolio = await Portfolio.create({
        full_name: 'Homero mendoza',
        email: 'homerito1@yahoo.com',
        phone: '12122121',
        email_subject: 'your hired',
        message: 'Your hot'
    });
    console.log(portfolio.toJSON())
}catch(error){
console.log('no connection', error);
}

  })();