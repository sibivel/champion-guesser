'use strict';
const ddragonVersion:string = '7.14.1';
const ddragonUrl:string = 'http://ddragon.leagueoflegends.com/cdn/';
const ddragonItems:string = '/img/item/';
const ddragonSpells:string = '/img/spell/';
const ddragonMastery:string = '/img/mastery/';
const ddragonChampionSmall:string = '/img/champion/';




export class DDragonUtil{
    constructor(){}
    public static itemUrl(id:number):string{
        return ddragonUrl + ddragonVersion + ddragonItems + id + '.png';
    }

    public static spellUrl(key:string):string{
        return ddragonUrl + ddragonVersion + ddragonSpells + key + '.png';
    }
    
    public static keystoneUrl(id:number):string{
        return ddragonUrl + ddragonVersion + ddragonMastery + id + '.png';
    }
    
    public static championSmallUrl(key:string):string{
        return ddragonUrl + ddragonVersion + ddragonChampionSmall + key + '.png';
    }

    
}
