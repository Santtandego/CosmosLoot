const server = require('./app')
require('dotenv').config()


server.listen (process.env.PORT, ( err ) => {

    if ( err ) throw new Error(err);

    console.log( 'server running on:' , process.env.PORT);
})