

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     //counter
//     next()
// }

// module.exports.mid1= mid1
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4


const headerValidation = (req, res, next) => {
    if(req.headers.hasOwnProperty('isfreeappuser')){
      req.headers.isFreeAppUser = req.headers.isfreeappuser;
      next();
    }else{
      res.send({msg: 'The request is missing a mandatory header.', status: false});
    }
  }
  
  module.exports.headerValidation = headerValidation;