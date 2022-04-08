const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/conditas', function (req, res) {
    console.log('------------------')
    // let ind = req.params.Index;
    // res.send(arr[index])
    // arr=[34,5,6,46,43];

    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});
// 1 question
router.get('/all/movies', function (req, res) {
    console.log(req);
    let array = ['RRS', 'PUSHPA', 'KICK', 'SARAY', 'JANIDUMAN']
    res.send(array);
});
// second question
router.get('/GET/movies/:indexNumber', function (req, res) {
    // let array = req.params.indexNumber;
    // array = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins'];
    // res.send(array[index]);
    let arr = ['Loha', 'Spider man home king', 'King', 'RRR'];
    res.send(arr[req.params.index])

});
// third question
router.get('/test-me1/:indexNumber', function (req, res) {
//     let arr = ['rand de basnasti', 'the shining', 'lord of the rings', 'bartman begins'];
//  req.params.indexNumber;
    //  arr.forEach(element => console.log(element==aray1));
//    for (let arr=0;arr<=aray1;arr++){
//     if(arr==aray1)
//     {
//         res.send(arr[indexNumber]);
//     }
let arr1 = ['Janidusman', 'Tiranga', 'King', 'RRR'];
    if (req.params.index>arr1.length-1){
        res.send("use a valid index in an error message")
    }
     res.send(arr1[req.params.index])
});
// fourth question
 router.get('/GET/films', function (req,res)
 {
     console.log(req);
    movies = [ {
        "id": 1,
        "name": "Deshiboys"
       }, {
        "id": 2,
        "name": "Gaddar"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Reddy" }];
        res.send(movies)
 })

router.get('/GET/films/:filmId',function (req,res)
{
    movies = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Radheshyam"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Nemo" }];
        if(req.params.filmId > movies.length -1){

          res.send("the filmid no is exceeded")      

        }
        else
        {
            res.send(movies);
        }
})


module.exports = router;
// adding this comment for no reason