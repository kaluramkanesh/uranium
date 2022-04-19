const batchModel=require("..//models/batch.js");
const developers=require("..//models/developers.js");

const createDeveloper=async function (req,res){
    let developer=req.body
    let developerCreated=await developers.create(developer)
    res.send({data:developerCreated});
}
const getScholarshipDevelopers=async function (req,res){
  let eligibleDevelopers = await  developers
  .find({percentage:{$gte:70}})
  .find({gender:{$in:["female"]}})
  res.send({data:eligibleDevelopers});
}
module.exports.createDeveloper=createDeveloper;
module.exports.getScholarshipDevelopers=getScholarshipDevelopers;