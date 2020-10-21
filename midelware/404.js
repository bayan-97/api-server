'use strict';

module.exports=( req, res) =>{

        res.status(404);
        res.statusMessage = 'Resource not found';
        res.json('Page Not Found');
    

  }