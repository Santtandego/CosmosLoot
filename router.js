const Router = require('express')
const path = require('path');


const router = Router()
const publicPath = path.resolve( 'template', 'index.html' );

router.get('/', function(req, res) {
    res.sendFile(publicPath)
})

module.exports = router
