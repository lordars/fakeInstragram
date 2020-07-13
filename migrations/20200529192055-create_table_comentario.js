'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.createTable(
          'comentario',
             { 
            id: 
             {
              type: Sequelize.INTEGER,
              primaryKey:true,
              autoIncrement:true,
              allowNull:false
            
             },
            texto:{
              type: Sequelize.STRING(256),
              allowNull: false
             },
            usuarios_id:{
              type: Sequelize.INTEGER,
              references:{
                model:"usuarios",
                key:"id",
              },
              onDelete: 'SET NULL',
              onUpdate: 'CASCADE', },
               
            posts_id:{
                type: Sequelize.INTEGER,
                  references:{
                  model:"posts",
                  key:"id"
                  },
                   onDelete: 'SET NULL',
                  onUpdate: 'CASCADE', 
              
               }
              
            },
             {
              timestamps: true 
             });
             
            },

  down: (queryInterface, Sequelize) => {
  
   
      return queryInterface.dropTable('comentario');
  
  }
};
