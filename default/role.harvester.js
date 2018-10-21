//var Util = require('util');
var CreepBase = require('creepBase');
var roleHarvester = ('creepBase');

class Harvester extends CreepBase{

    constructor(){
        super();

    }

    /** @param {Creep} creep **/
    run(creep) {
       // var util = new Util();
       if(!creep.memory.task || creep.carry.energy == 0 ){
        creep.memory.task = 'mining';
       }

       if(creep.memory.task == 'mining'){
           if (this.mine(creep) == 1){
                creep.memory.task = 'returning';
           }
       }

       if(creep.memory.task == 'returning'){
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

}

module.exports = Harvester;
