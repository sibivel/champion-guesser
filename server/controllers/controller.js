'use strict';
const riotFunctions = require('../utils/riotFunctions');
const randomstring = require("randomstring");
const SC = require("../models/session-control");
const SessionObject = SC.SessionObject;
const dbControl = require('../models/db-control');

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
    dbControl.openDatabase().then(dbControl.getMatches).then(result => {
        return result[Math.floor(Math.random() * result.length)].MatchId
    })
    .then((matchId)=>{
        riotFunctions.getMatchData(res,[matchId]);
    })
    
    //console.log(data);
    //res.send(data);
}

exports.sessionStartRequest = function(req,res){
    let key = randomstring.generate(24);
    SC.sessionMap[key] = new SessionObject(key);
    console.log('key: '+ SC.sessionMap[key].key + " date: " + SC.sessionMap[key].date);
    res.send(key);
}