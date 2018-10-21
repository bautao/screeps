var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleBuilder = require('role.builder');
var IncomeBot = require('incomeBot');
var crapCleaner = require('crapcleaner');
var SpawnEngine = require('spawnEngine');
var Lib = require('lib');

//import {IncomeBot} from incomeBot;
Memory.income = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1];
Memory.lastIncome = 0;
var lib = new Lib();
//lib.initializeMemory();

var spawnEngine = new SpawnEngine();
var incomeBot = new IncomeBot();
var ccCleaner = new crapCleaner();


module.exports.loop = function () {
    
    //start income for incomeBot
    var income = 0;
    for(var name in Game.rooms) {
        income = Game.rooms[name].energyAvailable
    }
    //energy log
    for(var name in Game.rooms) {
        console.log('Room "'+name+'" has '+Game.rooms[name].energyAvailable+' energy');
    }

    ccCleaner.cleanShit();
        
    //spawn creeps
   spawnEngine.spawnShit();
    
    if(Game.spawns['FeuseHQ'].spawning) { 
        var spawningCreep = Game.creeps[Game.spawns['FeuseHQ'].spawning.name];
        Game.spawns['FeuseHQ'].room.visual.text(
            '🛠️' + spawningCreep.memory.role,
            Game.spawns['FeuseHQ'].pos.x + 1, 
            Game.spawns['FeuseHQ'].pos.y, 
            {align: 'left', opacity: 0.8});
    }

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
