const bcrpyt = require('bcrypt');

const saltRounds = 10
const Sequelize = require("sequelize")
const {index,Comentarios,Post,Usuario} = require ('../models')


const AuthController = {
    
    showLogin: (req,res) => {
        let err = (req.query.error == 1);
        res.render('auth/login',{err});
    },

    showRegistro: (req,res)=>{

        
              res.render('auth/register');    
    },
    Registrar: async (req,res) =>  {
        let {senha, email, nome , usuario} = req.body;
        const salt = bcrpyt.genSaltSync(saltRounds)
        const hash = bcrpyt.hashSync(senha, salt)
            console.log(hash+ "**************")
          
    
      
         
              
        let addUsuario = await Usuario.create({
            nome:nome,
            usuario:usuario,
            senha:hash,
            email:email
        })
        res.render('auth/register');    }
    ,

    showHome: (req,res) => {


        res.render('index');
    },

    login: async (req,res) => {

        // Capturar o email e a senha que usuário mandou no form
        let {senha, email} = req.body;

        // Tentar carregar o usuário do bd a partir do email
        let usuario = await Usuario.findOne({where:{email}});
        
        // se o usuário não existir, direcionar o visitante para o login
        if(!usuario){
            return res.redirect('/?error=1');
        }

        // se o usuário existir, verificar a senha
        // se senha não conferir, direcionar para /login
        if(!bcrpyt.compareSync(senha, usuario.senha)){
            return res.redirect('/?error=1');
        }

        // se chegou até aqui, usuário tá ok e senha tmb
        // setar session e direcionar para o /home
        // req.session.usuario = usuario;
        return res.redirect('/home');

    }


}

module.exports = AuthController;