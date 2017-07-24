export class MatchDataDto {
    constructor(){};    
    champion: ChampionDto;
    cs: number;
    items: Array<ItemDto>;
    kda: KdaDto;
    keystone: KeystoneDto;
    role: string;
    summonerSpells: SummonerSpellsDto;
    options: OptionsDto;
}

export class ChampionDto {
    id:number;
    key:string;
    name:string;
    title:string;
}

export class ItemDto {
    id: number;
    name: string;
    description:string;
    plaintext: string;
}

export class KdaDto{
    kills:number;
    assists:number;
    deaths:number;
}

export class KeystoneDto{
    description:Array<string>;
    id:number;
    name:string;
}

export class SummonerSpellsDto{
    0:SpellDto;
    1:SpellDto;
}

export class SpellDto{
    description:string;
    id:number;
    key:string;
    name:string;
    summonerLevel:number;
}

export class OptionsDto{
    answer:number;
    list:Array<ChampionDto>;
}
