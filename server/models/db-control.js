'use strict';
let db = require('sqlite');
let rootAccount = '';
let riotFunctions = require('../utils/riotFunctions');
// function run(){
//     exports.openDatabase().then(result => {console.log(db)});
// }
function run(){
    exports.openDatabase().then(exports.createTable).then(riotFunctions.getChallengerIds).then(getMatches).catch((error)=>{console.log('caught error: \n' + error)});
}
// function run(){
//     db.open('./db1.sqlite3', { cached: true }).then(db.all("CREATE TABLE Matches(MatchId INT, Date DATETIME, Division TEXT);")).catch(console.log('fuck'))
// }
exports.openDatabase = function(){
    return db.open('./db.sqlite3', { cached: true })
}
exports.createTable = function(){
    return db.exec("CREATE TABLE IF NOT EXISTS Matches(MatchId INT, Date DATETIME, Division TEXT);")
}

// function run(){
//     db.open('./db.sqlite', {cached: true }).then(
//         exports.createTable
//     );
// }
function logResult(buggy){
    console.log(JSON.stringify(buggy));
}

function getMatches(body){
    let entries = body.entries;
    let currentTime = new Date().getTime()/1000;
    for(let player of entries.slice(5,10)){
        let summonerId = player.playerOrTeamId;
        riotFunctions.getSummonerWithSummonerId(summonerId).then((body)=>{
            return riotFunctions.getMatches(body.accountId);
        }).then((body)=>{
            for(let match of body.matches){
                db.run(`
                INSERT INTO Matches(MatchId,Date,Division) 
                SELECT $id, $date, $division
                WHERE NOT EXISTS(SELECT 1 FROM Matches WHERE MatchId = $id);
                `,{
                    $id: match.gameId,
                    $date: match.timestamp,
                    $division: 'Challenger'
                })
            }
        },()=>{});
    }
}
run();