'use strict';
const riotFunctions = require('../utils/riotFunctions');
exports.testRequest = function(req,res){
    riotFunctions.magicNumber = 5;
    console.log(riotFunctions.magicNumber);
    let riotFunctions2 = require('../utils/riotFunctions');
    console.log(riotFunctions2.magicNumber);
    // console.log(req.originalUrl);
    // console.log("request is "+req.query.message);
    // res.send("response is " + req.query.message);
}

exports.matchRequest = function(req,res){
    var data = riotFunctions.getMatchData(res,['2543649693']);
    //console.log(data);
    //res.send(data);
}