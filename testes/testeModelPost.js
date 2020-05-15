const { sequelize, Usuario, Post, Comentario } = require('../models');

Post.findByPk(1,
    {include:
        [
            {
                model: Usuario,
                as: "autor",
                include: "posts",
                attributes:{
                    exclude:['senha']
                }
            },
            {
                model:Comentario,
                as:'comentarios',
                include:'autor'
            }
        ]
    }).then(
    data => {
        console.log(data.toJSON());
        sequelize.close();
    }
)
/**
 * Levantar todos os POST. De Cada post trazer os comentários e
 * de cada comentário, trazer o seu autor
 * Também trazer os posts do autor do post em questão
 */
/**
 * Levantar todos os POST. De Cada post trazer os comentários e
 * de cada comentário, trazer o seu autor
 * */
