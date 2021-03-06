var Lib = require('lib');
var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {
    	var lib = new Lib();
	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('🚧 build');
	    }

	    if(creep.memory.building) {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else {
	    	var clossestSource = lib.getClosestEnergySource(creep.pos);
            if(creep.harvest(clossestSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(clossestSource, {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleBuilder;

