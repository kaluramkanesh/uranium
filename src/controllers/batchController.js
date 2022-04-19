const batchModel=require("..//models/batch.js");

const createBatch= async function (req, res) {
    let book = req.body
    let batchCreated = await batchModel.create(book)
    res.send({data: batchCreated})
}

module.exports.createBatch=createBatch;