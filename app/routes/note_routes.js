const router = require('express').Router();
const User = require('../../models/userdetails');

//handling CRUD operations.
// Create,Read,Update,Delete operations.
///on getting a GET request on endpoint path/abc below function is executed. 
//this router is exported to server.js. app.use(router) tells the server to route the requests to below routers if path/abc endpoint is hit
router.get('/abc',(req,res)=>{
    res.send({type:'GET'});
});
router.post('/abc',(req,res,next)=>{

    //one object of User table(collection) is created and is saved in the table.
    //After saving,.then promised is invoked. user is the exact object that is saved in the db.
    //to view the db.. use robomongo
    //type robomongo in the cmd line
    User.create(req.body).then(function(user){
        res.send(user);
    }).catch(next) ;
});
router.delete('/abc/:id',function(req,res,next){
// req.params.id gives the id passed in the request URL in place of "id"
// if url had been '/abc/:hello' then we would access data of hello with req.params.hello
    User.findByIdAndRemove({_id: req.params.id})
        .then(function(user){
            console.log("USER DELETED");
            // console.log(user);
            res.send(user);
        })
});
router.put('/abc/:id',function(req,res,next){
    User.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        console.log("USER FOUND AND UPDATED");
        User.findOne({_id:req.params.id}).then(function(user){
            res.send(user);
        })
    })
});
module.exports = router;