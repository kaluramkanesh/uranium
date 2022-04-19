const mongoose = require('mongoose');
const batchSchema=new mongoose.Schema({
name:String,
size:Number,
program:String
})
module.exports =mongoose.model("batches",batchSchema);