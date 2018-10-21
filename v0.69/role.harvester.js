var Lib = require('lib');

var roleHarvester = {
    
    /** @param {Creep} creep **/
    run: function(creep) {
        var lib = new Lib();




	    if(creep.carry.energy < creep.carryCapacity) {

            var clossestSource = lib.getClosestEnergySource(creep.pos);


            if(creep.harvest(clossestSource) == ERR_NOT_IN_RANGE) {
                if (creep.memory.Mining){
                    creep.memory.Mining = false;
                        
                }
                
                creep.moveTo(clossestSource, {visualizePathStyle: {stroke: '#ffaa00'}});
            }else{
                creep.memory.Mining = true;
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            

            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
	}
};

module.exports = roleHarvester;
