'use strict';

module.exports=( req, res,next) =>{

        res.status(500);
        res.statusMessage = 'Resource not found';
        res.json('Page Not Found');
    

  }