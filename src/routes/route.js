const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    let a = [1, 2, 3, 4, 5, 7, 8, 9],
        count = 10;
    q = missing = [];
    for (let i = 1; i <= count; i++) {
        if (a.indexOf(i) === -1) {
            // missing.push(i)
            missing.push(i);
        }
    }
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    // res.send('My first ever api!')
    res.send(q);
});
// router.get('/newapi',function(req,res)
// {
//     console.log(req);
//     let a=[33,34,35,37,38,39]
//     count=39;
//     q=missing=[];
//     for(let i=33;i<=count;i++)
//     {
//         if(a.indexOf(i)===-1)
//         {
//             missing.push[i];
//         }
//     }
//     res.send(q);
// });
// module.exports = router;
// // // adding this comment for no reason


// let a=[33,34,35,37,38,39]
//     count=39;
//     q=missing=[];
//     for(let i=33;i<=count;i++)
//     {
//         if(a.indexOf(i)===-1)
//         {
//             missing.push[i];
//         }
//     }
//     console.log(q);