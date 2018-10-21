var Lib = require('lib');
var roleUpgrader = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var lib = new Lib();
	    
        if(creep.memory.upgrading && creep.carry.energy > 0) {
            if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }        }

        if(!creep.memory.upgrading && creep.carry.energy < creep.carryCapacity) {
            
            var clossestSource = lib.getClosestEnergySource(creep.pos);
            if(creep.harvest(clossestSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(clossestSource);
            }
        }

        if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity){
            creep.memory.upgrading = true;
        }

        if(creep.memory.upgrading && creep.carry.energy == 0){
            creep.memory.upgrading = false;

        }

	}
};

module.exports = roleUpgrader;