'use strict';
const request = require('request');
const config = require('../../config');
const constants = require('./myConstants');
const matchProcessor = require('./matchProcessor');
const devKey = config.devKey;


//participantId and region both optional
exports.getMatchData = function(myRes,matchId,participantId,region){
    matchId = arguments[1];
    let args = Array.prototype.slice.call(arguments, 2);
    let params = setParticipantIdAndRegion(args);
    participantId = params.participantId;
    region = params.region;
   
    var path = constants.paths.MATCH;
    
    path = path.concat(matchId);
    
    makeRiotRequest(path, region, function(err, res, body) {  
        console.log(res.statusCode);
        if(res.statusCode == '200'){
            myRes.send(matchProcessor(myRes,body,participantId));
        }
    });
};

exports.initChampionData = function(){
    let path = constants.paths.CHAMPIONS;
    let qs = {locale:'en_US',dataById:'true'};
    makeRiotRequest(path,'NA',qs,function(err, res, body){
        console.log(res.statusCode);
        if(err != null){
            console.log('ERROR: ' + err);
        }
        if(res.statusCode == '200'){
            constants.champions = JSON.parse(body).data;
            //console.log(constants.items);
        }
    });
}

exports.initItemData = function(){
    let path = constants.paths.ITEMS;
    let qs = {locale:'en_US'};
    makeRiotRequest(path,'NA',qs,function(err, res, body){
        console.log(res.statusCode);
        if(err != null){
            console.log('ERROR: ' + err);
        }
        if(res.statusCode == '200'){
            constants.items = JSON.parse(body).data;
            //console.log(constants.items);
        }
    });
}

exports.initMasteryData = function(){
    let path = constants.paths.MASTERIES;
    let qs = {locale:'en_US'};
    makeRiotRequest(path,'NA',qs,function(err, res, body){
        console.log(res.statusCode);
        if(err != null){
            console.log('ERROR: ' + err);
        }
        if(res.statusCode == '200'){
            constants.masteries = JSON.parse(body).data;
            // console.log(constants.masteries);
        }
    });
    
}
exports.initSummonerSpellData = function(){
    let path = constants.paths.SUMMONERSPELLS;
    let qs = {locale:'en_US',dataById:'true'};
    makeRiotRequest(path,'NA',qs,function(err, res, body){
        console.log(res.statusCode);
        if(err != null){
            console.log('ERROR: ' + err);
        }
        if(res.statusCode == '200'){
            constants.summonerSpells = JSON.parse(body).data;
            // console.log(constants.masteries);
        }
    });
    
}

//Promise
exports.getChallengerIds = function(){
    let path = constants.paths.CHALLENGERLEAGUE;
    path = path.concat(constants.RANKEDSOLO);
    
    return new Promise((resolve, reject)=>{
        makeRiotRequest(path,'NA',{},function(err,res,body){
            console.log(res.statusCode);
            if(err != null){
                console.log('ERROR: ' + err);
                reject('Request Error: ' + err);
            }
            if(res.statusCode == '200'){
                resolve(JSON.parse(body));
            }else{
                reject(JSON.stringify(res));
            }
        })
    });
}

exports.getSummonerWithSummonerId = function(summonerId){
    let path = constants.paths.SUMMONERS;
    path = path.concat(summonerId);
    return new Promise((resolve, reject)=>{
        makeRiotRequest(path,'NA',function(err,res,body){
             console.log(res.statusCode);
            if(err != null){
                console.log('ERROR: ' + err);
                reject('Request Error: ' + err);
            }
            if(res.statusCode == '200'){
                resolve(JSON.parse(body));
            }else{
                reject(JSON.stringify(res));
            }
        })
    })
}

exports.getMatches = function(accountId){
    let path = constants.paths.MATCHES;
    path = path.concat(accountId);
    //path = path.concat('/recent');
    let currentTime = new Date().getTime();
    let qs = {
        queue:420,
        beginTime: currentTime - 7*(8.64 * 10000000)
    };
    return new Promise((resolve, reject)=>{
        makeRiotRequest(path,'NA',qs,function(err,res,body){
             console.log(res.statusCode);
            if(err != null){
                console.log('ERROR: ' + err);
                reject('Request Error: ' + err);
            }
            if(res.statusCode == '200'){
                resolve(JSON.parse(body));
            }else{
                reject(JSON.stringify(res));
            }
        })
    })
}


function setParticipantIdAndRegion(args){
    var participantId = undefined;
    var region = undefined;

    if(args.length == 2){
        if(typeof args[0] == "string"){
            region = args[0];
            if(typeof args[1] == "number"){
                participantId = args[1];
            }
        }else if(typeof args[0] == "number"){
            participantId = args[0];
            if(typeof args[1] == "string"){
                region = args[1];
            }
        }
    }else if(args.length == 1){
        if(typeof args[0] == "string"){
            region = args[0];
        }else if(typeof args[0] == "number"){
            participantId = args[0];
        } 
    }
    if(participantId == undefined){
        participantId = Math.floor(Math.random() * 10+1);
    }
    if(region == undefined){
        region = 'NA1';
    }

    return {
        participantId: participantId,
        region: region
    }
}

function makeRiotRequest(path,region,queryStrings,callback){
    callback = arguments[arguments.length-1];
    var header = {
            'X-Riot-Token' : config.devKey
        };
    console.log(path);
    var options = {
        baseUrl : 'https://'+constants.hosts[region],
        uri : path,
        method : "GET",
        headers : header,
        qs  : queryStrings
    };
    //console.log(options.headers['X-Riot-Token']);
    var body = '';
    request(options,callback);
}
