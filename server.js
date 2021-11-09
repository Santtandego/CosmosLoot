const server = require('./app')


server.listen (8312, ( err ) => {

    if ( err ) throw new Error(err);

    console.log( 'server running on:' , 8312);
})