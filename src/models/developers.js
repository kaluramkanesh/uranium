const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId
const developersSchema = new mongoose.Schema({
    name: String,
    gender: String,
    percentage: Number,
    batch:
    {
        type: ObjectId,
        ref: "batches"
    }

})
module.exports = mongoose.model("developers", developersSchema);