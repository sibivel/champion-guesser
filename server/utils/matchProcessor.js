'use strict';
const utils = require('./utils');
module.exports = function(res,body,participantId){
    const constants = require('./myConstants');
    const allItems = constants.items;
    const allMasteries = constants.masteries;
    const allChampions = constants.champions;
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

    matchDataDto.options = setOptions(15);

    return matchDataDto;
    
    function setChampion(){
        let id = participantDto.championId;
        console.log(id);
        return allChampions[id];
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

    function setOptions(size = 15){
        let answer = Math.floor(Math.random()*size);
        let correctId = participantDto.championId;
        let idList = [correctId];
        let list = [];

        for(let i = 0; i < size; i++){
            if(i == answer){
                list[i] = allChampions[correctId]
            }else{
                let id = -1;
                let newChamp;
                do{
                    newChamp = utils.pickRandomProperty(allChampions);
                    id = newChamp.id;
                }
                while(idList.indexOf(id) != -1);
                list.push(newChamp);
                idList.push(id);
            }
        }

        return {
            answer : answer,
            list : list
        }
        
    }
 

}


