const router = require('express').Router();
const User = require('../../models/userdetails');

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


module.exports = router;