const batchModel=require("..//models/batch.js");

const createBatch= async function (req, res) {
    let bth = req.body
    let batchCreated = await batchModel.create(bth)
    res.send({data: batchCreated})
}

module.exports.createBatch=createBatch;