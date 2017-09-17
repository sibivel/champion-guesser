import { Component, OnInit, Injector, Input, EventEmitter, Output } from '@angular/core';
import {MatchService} from '../match.service';
import { AppComponent } from "../app.component";
import {MatchDataDto } from "../match";
@Component({
  selector: 'app-request-button',
  templateUrl: './request-button.component.html',
  styleUrls: ['./request-button.component.css'],
  providers: []
})
export class RequestButtonComponent implements OnInit {

  constructor(private matchService: MatchService,private inj:Injector) { 
    this.parentComponent = this.inj.get(AppComponent);
  }
  parentComponent:AppComponent;
  
  @Input() 
  text:string;
  
  @Output()
  newMatch: EventEmitter<Object> = new EventEmitter<Object>();
  ngOnInit() {
    console.log(this.parentComponent);
    //this.showMatch(null);
    
  }

  logData(event:Event){
    this.matchService.getMatch().then(function(response){
      console.log(response);
      let match = JSON.parse(response._body);
      console.log(match);
      
    });
  }

  showMatch(event:Event){
    this.newMatch.emit();
    // let thing = this;
    // thing.parentComponent.showMatch = false;
    // this.matchService.getMatch().then(function(response){
    //   console.log(response._body);
    //   let match = JSON.parse(response._body);
    //   console.log(match);
    //   thing.parentComponent.showMatch = true;
    //   thing.parentComponent.match = match;
    // },function(error){
    //   let match = thing.fakeMatch();
    //   thing.parentComponent.showMatch = true;
    //   thing.parentComponent.match = match;
    // });

  }

  fakeMatch():MatchDataDto{
    let matchString: string = `{"champion":{"id":203,"key":"Kindred","name":"Kindred","title":"The Eternal Hunters"},"items":[{"id":1419,"name":"Enchantment: Bloodrazor","description":"<stats>+50% Attack Speed</stats><br><br><unique>UNIQUE Passive:</unique> Basic attacks deal 4% of the target's maximum Health in bonus physical damage (max 75 vs. monsters and minions) on hit.","plaintext":"Increases Attack Speed and deals damage based on the target's Health"},{"id":3025,"name":"Iceborn Gauntlet","description":"<stats>+65 Armor<br>+20% Cooldown Reduction<br><mana>+500 Mana</mana></stats><br><br><unique>UNIQUE Passive - Spellblade:</unique> After using an ability, the next basic attack deals bonus physical damage equal to 100% of base Attack Damage in an area and creates an icy zone for 2 seconds that slows Movement Speed by 30% (1.5 second cooldown).<br><br>Size of zone increases with bonus armor.","plaintext":"Basic attacks create a slow field after spell cast"},{"id":3094,"name":"Rapid Firecannon","description":"<stats>+30% Attack Speed<br>+30% Critical Strike Chance<br>+5% Movement Speed</stats><br><br><passive>Passive:</passive> Moving and attacking will make an attack <a href='Energized'>Energized</a>.<br><br><unique>UNIQUE Passive - Firecannon:</unique> Your Energized attacks gain 35% bonus Range (+150 range maximum) and deal 50~120 bonus magic damage (based on level) on hit.<br><br>Attacks become Energized 25% faster. Energized attacks function on structures.","plaintext":"Movement builds charges that release a sieging fire attack on release"},{"id":3033,"name":"Mortal Reminder","description":"<stats>+50 Attack Damage</stats><br><br><unique>UNIQUE Passive - Executioner:</unique> Physical damage inflicts <a href='GrievousWounds'>Grievous Wounds</a> on enemy champions for 5 seconds.<br><unique>UNIQUE Passive - Last Whisper:</unique> +35% <a href='BonusArmorPen'>Bonus Armor Penetration</a>.","plaintext":"Overcomes enemies with high Health recovery and Armor"},{"id":3085,"name":"Runaan's Hurricane","description":"<stats>+40% Attack Speed<br>+30% Critical Strike Chance<br>+7% Movement Speed</stats><br><br><unique>UNIQUE Passive - Wind's Fury:</unique> When basic attacking, bolts are fired at up to 2 enemies near the target, each dealing (40% of Attack Damage) physical damage. Bolts can critically strike and apply on hit effects.","plaintext":"Ranged attacks fire two bolts at nearby enemies"},{"id":3072,"name":"The Bloodthirster","description":"<stats>+80 Attack Damage</stats><br><br><unique>UNIQUE Passive:</unique> +20% Life Steal<br><unique>UNIQUE Passive:</unique> Your basic attacks can now overheal you. Excess life is stored as a shield that can block 50-350 damage, based on champion level.<br><br>This shield decays slowly if you haven't dealt or taken damage in the last 25 seconds.","plaintext":"Grants Attack Damage, Life Steal and Life Steal now overheals"},{"id":3340,"name":"Warding Totem (Trinket)","description":"<groupLimit>Limited to 1 Trinket.</groupLimit><br><br><active>Active:</active> Consume a charge to place an invisible <font color='#BBFFFF'>Stealth Ward</font> which reveals the surrounding area for <scaleLevel>60 - 120</scaleLevel> seconds. <br><br>Stores one charge every <scaleLevel>180 - 90</scaleLevel> seconds, up to 2 maximum charges.<br><br>Ward duration and recharge time gradually improve with level.<br><br><rules>(Limit 3 <font color='#BBFFFF'>Stealth Wards</font> on the map per player. Switching to a <font color='#BBFFFF'>Lens</font> type trinket will disable <font color='#BBFFFF'>Trinket</font> use for 120 seconds.)</rules>","plaintext":"Periodically place a Stealth Ward"}],"keystone":{"id":6161,"name":"Warlord's Bloodlust","description":["Moving or attacking will charge an Energized attack. Energized attacks heal for 5-40% of your total Attack Damage (amplified by Critical Strikes) and grant 30% Movement Speed for 0.75 seconds."]},"kda":{"kills":13,"deaths":16,"assists":9},"cs":294,"summonerSpells":{"0":{"name":"Flash","description":"Teleports your champion a short distance toward your cursor's location.","summonerLevel":8,"id":4,"key":"SummonerFlash"},"1":{"name":"Smite","description":"Deals 390-1000 true damage (depending on champion level) to target epic, large, or medium monster or enemy minion. Restores Health based on your maximum life when used against monsters.","summonerLevel":10,"id":11,"key":"SummonerSmite"}},"role":"JUNGLE","options":{"answer":9,"list":[{"id":101,"key":"Xerath","name":"Xerath","title":"the Magus Ascendant"},{"id":58,"key":"Renekton","name":"Renekton","title":"the Butcher of the Sands"},{"id":99,"key":"Lux","name":"Lux","title":"the Lady of Luminosity"},{"id":133,"key":"Quinn","name":"Quinn","title":"Demacia's Wings"},{"id":6,"key":"Urgot","name":"Urgot","title":"the Headsman's Pride"},{"id":83,"key":"Yorick","name":"Yorick","title":"Shepherd of Souls"},{"id":432,"key":"Bard","name":"Bard","title":"the Wandering Caretaker"},{"id":21,"key":"MissFortune","name":"Miss Fortune","title":"the Bounty Hunter"},{"id":150,"key":"Gnar","name":"Gnar","title":"the Missing Link"},{"id":203,"key":"Kindred","name":"Kindred","title":"The Eternal Hunters"},{"id":74,"key":"Heimerdinger","name":"Heimerdinger","title":"the Revered Inventor"},{"id":9,"key":"Fiddlesticks","name":"Fiddlesticks","title":"the Harbinger of Doom"},{"id":76,"key":"Nidalee","name":"Nidalee","title":"the Bestial Huntress"},{"id":39,"key":"Irelia","name":"Irelia","title":"the Will of the Blades"},{"id":119,"key":"Draven","name":"Draven","title":"the Glorious Executioner"},{"id":37,"key":"Sona","name":"Sona","title":"Maven of the Strings"},{"id":161,"key":"Velkoz","name":"Vel'Koz","title":"the Eye of the Void"},{"id":8,"key":"Vladimir","name":"Vladimir","title":"the Crimson Reaper"},{"id":201,"key":"Braum","name":"Braum","title":"the Heart of the Freljord"},{"id":78,"key":"Poppy","name":"Poppy","title":"Keeper of the Hammer"}]}}`;
    let match: MatchDataDto = JSON.parse(matchString);
    return match;
  }
  

}


