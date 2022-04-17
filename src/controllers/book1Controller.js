// const { count } = require("console")
// const BookModel = require("../models/bookModel")

// const createBook = async function (req, res) {
//     let data = req.body

//     let savedData = await BookModel.create(data)
//     res.send({ msg: savedData })
// }

// const getBooksData = async function (req, res) {
// }
// module.exports.getBooksData = getBooksData

const BookModel1 = require("../models/bookModel1.js");
const createbook1 = async function (req, res) {
    let data = req.body;
    let savedData1 = await BookModel1.create(data);
    res.send({ msg: savedData1 })
}

// const createBook = async function (req, res) {
//     const book = req.body
//     let savedBook = await BookModel.create(book)
//     res.send({ msg: savedBook })
// }

let getParticularBooks= async function(req,res){
    let id=req.body.autherName;
    let result=await bookmodel.find({autherName:id})
    res.send({msg : result})
}

const yearDetails = async function (req, res) {
    let yearList= await bookModel.find({ year: req.body.year }).select({bookName:1,_id:0})
    res.send(yearList)
}

let specificBooks = await bookModel.find(req.body)
res.send({msg:specificBooks})

const priceDetails= async function(req,res){
    let list = await bookModel.find({"prices.indianPrice": {$in: ["100INR", "200INR","500 INR"]}} ).select({bookName:1,_id:0})
    res.send({ msg: list })
}

const randomBooks= async function(req, res) {
    let allBooks = await bookModel.find({$or:[ {stockAvailable: true},{ totalPages: {$gt: 500}}]})
    res.send({msg: allBooks })
}

module.exports.newBook=createbook1;
module.exports.createBook1=createBook1;
module.exports.getParticularBooks=getParticularBooks;
module.exports.yearDetails=yearDetails;
module.exports.randomBook=randomBooks;
module.exports.priceDetails=priceDetails;