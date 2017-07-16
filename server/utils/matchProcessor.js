'use strict';

module.exports = function(res,body,participantId){
    const constants = require('./myConstants');
    const allItems = constants.items;
    const allMasteries = constants.masteries;
    //participantId = 3;
    //console.log(body);
    console.log('ParticipantId: '+ participantId);
    let matchJson = JSON.parse(body);
    let matchDataDto = {};
    let participantDto = matchJson.participants[participantId-1];
    let statsDto = participantDto.stats;
    let timelineDto = participantDto.timeline;
    
    matchDataDto.champion = setChampion();
    console.log(matchDataDto.champion);

    matchDataDto.items = setItems(statsDto);

    let masteries = participantDto.masteries;
    matchDataDto.keystone = setKeystone(masteries);
    console.log(matchDataDto.keystone);
    
    matchDataDto.kda = setKDA();
    console.log('KDA: ' + matchDataDto.kda.kills + ' ' + matchDataDto.kda.deaths + ' ' + matchDataDto.kda.assists + ' ')
    
    matchDataDto.cs = setCS();
    console.log(matchDataDto.cs);

    matchDataDto.summonerSpells = setSummonerSpells();
    console.log(matchDataDto.summonerSpells);

    matchDataDto.role = setRole();
    console.log(matchDataDto.role);

    return matchDataDto;
    
    function setChampion(){
        let id = participantDto.championId;
        console.log(id);
        return constants.champions[id];
    }
    
    function setItems(statsDto){
        let items = [];
        for(let i = 0; i < 7; i++){
            let index = 'item'+i;
            if(statsDto[index] != 0){
                items.push(allItems[statsDto[index].toString()]);
                console.log(items[items.length-1].name);
            }
        }
        return items;
    }

    function setKeystone(masteries){
        let keystone = undefined
        masteries.forEach(function(mastery) {
            let id = mastery['masteryId'];
            if(Math.floor((id/10)) % 10 == 6){
                keystone = allMasteries[id];
            }
        }, this);
        return keystone;
    }

    function setKDA(){
        let kda = {};
        kda.kills = statsDto.kills;
        kda.deaths = statsDto.deaths;
        kda.assists = statsDto.assists;
        return kda;
    }

    function setCS(){
        return statsDto.totalMinionsKilled + statsDto.neutralMinionsKilled;

    }

    function setSummonerSpells(){
        let summs = {};
        summs[0] = constants.summonerSpells[participantDto.spell1Id];
        summs[1] = constants.summonerSpells[participantDto.spell2Id];
        return summs;
    }

    function setRole(){
        if(timelineDto.lane == "BOTTOM"){
            return timelineDto.role;
        }else{
            return timelineDto.lane;
        }
    }

}


