// const express = require('express');
// const router = express.Router();
// // const UserModel= require("../models/userModel.js")
// const UserController = require("../controllers/userController")
// const BookController = require("../controllers/bookController")
// const Book1 = require("../controllers/book1Controller.js");
// const createBook = require("../controllers/book1Controller.js");
// const getParticularBooks = require("../controllers/book1Controller.js");
// const yearDetails = require("../controllers/book1Controller.js");
// const randomBooks = require("../controllers/book1Controller.js");
// const priceDetails = require("../controllers/book1Controller.js");
// // const Book1 = require("../controllers/book1Controller.js");
// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

// const { required } = require("nodemon/lib/config");

// router.post("/createUser", UserController.createUser)
// router.get("/getUsersData", UserController.getUsersData)
// router.post("/createBook", BookController.abc)
// router.get("/getBooksData", BookController.getBooksData)
// router.post("/createNewBooks", Book1.newBook);
// router.post("/createBook",createBook.createBook);
// router.post("/getParticularBooks",getParticularBooks.getParticularBooks);
// router.post("/yearDetails",yearDetails.yearDetails);
// router.post("/randomBooks",randomBooks.randomBooks);
// router.post("/priceDetails",priceDetails.priceDetails);

// router.get("/getParticularBooks1",getParticularBooks.getParticularBooks);
// router.get("/yearDetails1",yearDetails.yearDetails);
// router.get("/randomBooks1",randomBooks.randomBooks);
// router.get("/priceDetails1",priceDetails.priceDetails);
// module.exports = router;

const express = required('express');
const router = express.Router();
const authoredetails = require("../models/author.js")
const bookdetails = require("../models/books");



router.post("/createauthor", async function (req, res) {
    const data1 = await authoredetails.create(req.body)
    res.send({ msg: data1 })
})
router.post("/createbook", async function (req, res) {
    const data1 = await bookdetails.create(req.body)
    res.send({ msg: data1 })
})


router.get("/getchetanbook", async function (req, res) {
    const data1 = await authoredetails.find({ author_name: "Chan Bhagat" })
    const id = data1[0].author_id
    const bookname = await bookdetails.find({ author_id: id }).select({ name: 1, _id: 0 })
    res.send({ msg: bookname })
})
router.get("/updateprice",async function(req,res)
{
    const data1=await bookdetails.find({name:"Two States"})
    const id=data1[0].author_id
    const authorename=await authoredetails.find({authore_id:id}).select({author_name:1,_id:0})
    const bookname=data1[0].name
    const priceupdate=await bookdetails.findOneAndUpdate({name:bookname},{price:100},{new:true}).select({
        price:1, _id:0
    })
    res.send({msg:authorename,priceupdate})
})

router.get("/costbetween",async function(req,res)
{
    const data1=await bookdetails.find({price:{$gte:50,$lte:100}}).select({author_id:1,_id:0})
    const id=data1.map(inp=>inp.author_id)
    let arr=[]
    for(let i=0;i<id.length;i++)
    {
        let k=id[i]
        const author=await authoredetails.find({author_id:k}).select({author_name:1, _id:0})
        arr.push(author)
    }
    const authorname=arr.flat()
    res.send({msg:authorname})
})
module.exports=router;