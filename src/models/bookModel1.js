const mongoose = require('mongoose');
//  const { required } = require('nodemon/lib/config');
const book1Schema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
    },
    price: {
        europeanPrice: String,
        indian: String
    },
    authoreName: String,
    tags: [String],
    year: { type: Number, default: 2022 },
    pages: Number,
    stockAvailable: Boolean,
},
    { timestamps: true });
module.exports = mongoose.model('Book1', book1Schema);

// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     bookName: String,
//     authorName: String,
//     tags: [String],

//     isPublished: Boolean,
//     prices: {
//         indianPrice: String,
//         europePrice: String,
//     },
//     sales: { type: Number, default: 10 }
// }, { timestamps: true });


// module.exports = mongoose.model('Book', bookSchema)