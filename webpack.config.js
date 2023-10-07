const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv){
    const config = await createExpoWebpackConfigAsync(env, argv)

    //config de webpack para android- lo que hacemos es agregar unas reglas para forzar a que compile react router native
    config.module.rules.push({
        test: /\.js$/,  //para archivos que terminan en .js
        loader: 'babel-loader', //quiero usar un loader en concreto, en este caso, babel loader, para actualizar esos ficheros. no lee archivos JSX
        include: [ //e incluye, 
            path.join(__dirname, 'node_modules/react-router-native') //todos aquellos ficheros que esten en ...(eso es __dirname,) en este caso, nodemodules/reactrouternative
        ]

    })

    return config
}