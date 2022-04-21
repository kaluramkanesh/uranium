const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({


    //     name: String,
    //     balance: Number, // Default balance at user registration is 100
    //     address: String,
    //     age: Number,
    //     gender: {
    //         type: String,
    //         enum: ["male", "female", "other"]
    //     }, // Allowed values are - “male”, “female”, “other”
    //     isFreeAppUser: {
    //         type: Boolean,
    //         default: false
    //     } // Default false value.
    // })



    userName: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 100,
    },
    address: {
        type: String,
    },
    age: {
        type: Number,
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
    },
    isFreeAppUser: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });



module.exports = mongoose.model("user1", userSchema)