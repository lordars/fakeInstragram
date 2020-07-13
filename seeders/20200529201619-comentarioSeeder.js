'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkInsert('comentario',
       [{
        id: 1,
        texto: 'Lorem ips',
        usuarios_id: 1,
        posts_id:2

      },{
        id: 2,
        texto: 'Lorem ips',
        usuarios_id: 1,
        posts_id:1

      },{
        id: 3,
        texto: 'Lorem ips',
        usuarios_id: 1,
        posts_id:3

      }
    ], {});
    
  },

  down: (queryInterface, Sequelize) => {
   
     
      return queryInterface.bulkDelete('comentario', null, {});
    
  }
};
