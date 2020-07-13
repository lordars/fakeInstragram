'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('posts', 
      [
        {
          id: 1,
        texto: 'John Doe e lalalala mentiroso...',
        img:null,
        usuarios_id:"1",
        n_likes:"2"
        
      },{
        id: 2,
        texto: 'aksdfjaslçkjdflaskjfo...',
        img:null,
        usuarios_id:"2",
        n_likes:"66"
        
      },{
        id: 3,
        texto: 'sdafasdfasdfasdfsaroso...',
        img:null,
        usuarios_id:"3",
        n_likes:"5"
        
      },
    ], {});
  
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('posts', null, {});
    
  }
};
