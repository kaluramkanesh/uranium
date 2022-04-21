// const userModel = require("..//models/userModel1")

// const createUser = async function (req, res) {
//     let user = req.body
//     let userCreated = await userModel.create(user)
//     console.log(userCreated)
//     res.send({ Data: userCreated })
// }
// module.exports.createUser=createUser


const User = require("..//models/userModel1");

const createUser = async (req, res) => {

  if(req.headers.isFreeAppUser == 'true'){
    let getUserData = req.body;
    getUserData.isFreeAppUser = true;

    let showData = await User.create(getUserData);
    res.send({data: showData, status: true});
  }else{
    let getUserData = req.body;

    let showData = await User.create(getUserData);
    res.send({data: showData, status: true});
  }
  
}

module.exports.createUser = createUser;