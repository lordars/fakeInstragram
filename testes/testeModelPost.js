const { sequelize, Post } = require('../models');

Post.findAll({include:'autor'}).then(
    data => {
        console.log(data.map( u => u.toJSON()));
        sequelize.close();
    }
)

/**
 * Levantar todos os POST. De Cada post trazer os comentários e
 * de cada comentário, trazer o seu autor
 * */
