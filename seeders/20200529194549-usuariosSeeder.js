'use strict';
const bcrypt= require("bcrypt")

module.exports = {
  up: (queryInterface, Sequelize) => {
   
      return queryInterface.bulkInsert(
        'usuarios',
       [{
        id: 1,
        nome: 'John Doe',
        email:"pepe@gmai.com",
        senha: bcrypt.hashSync("123456",10)
      }, 
      {
        id: 2, 
        nome: 'John soi',
        email:"sela@gmai.com",
        senha: bcrypt.hashSync("123456",10)
      },
      {
        id: 3,
        nome: 'petunha',
        email:"bla@gmai.com",
        senha: bcrypt.hashSync("123456",10)
      },
      {
        id: 4,
        nome: 'Don pepe',
        email:"pdklasd@gmai.com",
        senha: bcrypt.hashSync("123456",10)
      }],
      
      {});
   
  },

  down: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkDelete('usuarios', null, {});
    
  }
};
