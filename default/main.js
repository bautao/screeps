var RoleUpgrader = require('role.upgrader');
var RoleHarvester = require('role.harvester');
var RoleBuilder = require('role.builder');
var IncomeBot = require('incomeBot');
var crapCleaner = require('crapcleaner');
var SpawnEngine = require('spawnEngine');
var Util = require('util');

//import {IncomeBot} from incomeBot;
Memory.income = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
Memory.lastIncome = 0;
var util = new Util();
util.initializeMemory();
console.log("sdf");
var roleHarvester = new RoleHarvester();
var roleUpgrader = new RoleUpgrader();
var roleBuilder = new RoleBuilder();
var spawnEngine = new SpawnEngine();
var incomeBot = new IncomeBot();
var ccCleaner = new crapCleaner();
console.log(Game.cpu.getUsed());

module.exports.loop = function () {
    console.log("tik");
    //start income for incomeBot
    
    var income = 0;
    for(var name in Game.rooms) {
        income = Game.rooms[name].energyAvailable
    }
  

    //energy log
    
    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }

   
   // ccCleaner.cleanShit();
        
    //spawn creeps
    spawnEngine.spawnShit();
    /*
    if(Game.spawns['FeuseHQ'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['FeuseHQ'].spawning.name];
        Game.spawns['FeuseHQ'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['FeuseHQ'].pos.x + 1, 
            Game.spawns['FeuseHQ'].pos.y, 
            {align: 'left', opacity: 0.8});
    }*/

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
    
    

    
    for(var name in Game.rooms) {
        console.log(incomeBot.getIncome(Game.rooms[name].energyAvailable-Memory.lastIncome));
        Memory.lastIncome = Game.rooms[name].energyAvailable;
    }
}
