const mongoose = require("mongoose");
const authorScema = new mongoose.Sechema
    (
        {
            author_id: { type: Number, required: true },
            author_name: { type: String, required: true },
            age:{type:Number,required:true},
            address:{type:String,required:true},
        },
        {timestamps:true}
);
module.exports=mongoose.model("Author",authorScema)