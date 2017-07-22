'use strict';
const ddragonVersion:string = '7.14.1';
const ddragonUrl:string = 'http://ddragon.leagueoflegends.com/cdn/';
const ddragonItems:string = '/img/item/';


export class DDragonUtil{
    constructor(){}
    public static itemUrl(id:number):string{
        return ddragonUrl + ddragonVersion + ddragonItems + id + '.png';
    }
}
