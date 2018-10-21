var lib = require('lib');

class spawnEngine extends lib{
    
    constructor(){
  		super();

		this.maxHarvesters = 3;

		this.maxBuilders = 2;
		this.maxUpgraders =20;
    }
    
     
    spawnShit(){

    	var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
    	var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    	var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    	var miningCreeps = harvesters + upgraders;

 		if(harvesters.length < this.maxHarvesters) {
	        var newName = Game.spawns['FeuseHQ'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'harvester'});
	        console.log('Spawning new harvester: ' + newName);
	        Memory.lastIncome -= 200;
	    }

	    else if(builders.length < this.maxBuilders) {
	        var newName = Game.spawns['FeuseHQ'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'builder'});
	        console.log('Spawning new harvester: ' + newName);
	        Memory.lastIncome -= 200;
	    }

	    else if(upgraders.length < this.maxUpgraders) {
	        var newName = Game.spawns['FeuseHQ'].createCreep([WORK,CARRY,MOVE], undefined, {role: 'upgrader'});
	        console.log('Spawning new harvester: ' + newName);
	        Memory.lastIncome -= 200;
	    }
    }
    
}



module.exports = spawnEngine;

