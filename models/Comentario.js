const Comentario = (sequelize,DataTypes) => {
    let c = sequelize.define(
        'Comentario',
        
        {
            id:{
                type: DataTypes.INTEGER,
                primaryKey:true,
                allowNull: false,
                autoIncrement: true
            },
            texto:{
                type: DataTypes.STRING,
                allowNull: false
            },
            usuarios_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            },
            posts_id:{
                type: DataTypes.INTEGER,
                allowNull: false
            }

        },

        {
            tableName:"comentarios",
            timestamps: true
        }
    );
    
    c.associate= (models)=> {
        c.belongsTo(models.Usuario,{foreignKey:"usuarios_id", as:"autor" });
        c.belongsTo(models.Post,{foreignKey:"posts_id", as:"post" });
    } 

    return c;

}

module.exports = Comentario;