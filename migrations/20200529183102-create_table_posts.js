'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
 
      return queryInterface.createTable(
        'posts',
       {
        id: {
          type: Sequelize.INTEGER,
          primaryKey:true,
          allowNull: false,
          autoIncrement: true
      },
      texto: {
          type: Sequelize.STRING(256),
          allowNull: false
      },
      img:{
          type: Sequelize.STRING(256),
          allowNull: true
      },
      usuarios_id:{
          type: Sequelize.INTEGER,
          references:{
            model:"usuarios",
            key:"id",
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE', 
      },
      n_likes: {
          type: Sequelize.INTEGER,
          defaultValue: 0
      }
        },
        {
          timestamps: true
        }
        );
   
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('post');
    
  }
};
