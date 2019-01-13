const router = require('express').Router();
const User = require('../../models/userdetails');
router.get('/abc',(req,res)=>{
    res.send({type:'GET'});
});
router.post('/abc',(req,res)=>{
    // res.send({
    //     type: 'POST',
    //     name: 'RK'
    // })
    // var user = new User(req.body);
    // user.save();
    // res.send(req.body);
    // console.log(req.body);

    User.create(req.body).then(function(user){
        res.send(user);
    });
});

module.exports = router;