'use strict';


module.exports = (req, res, next)=> {
     let  timesTamp= new Date()
      req.requestTime= timesTamp
    // res.json({requestTime: req.requestTime });
    next();
  };