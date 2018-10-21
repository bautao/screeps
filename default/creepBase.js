var Util = require('util');

class CreepBase extends Util {
    constructor(){
        super();

    }

    /*
    return codes:
    0 = mining
    1 = creep at capacity
    */
    mine(creep){
        var clossestSource = this.getClosestEnergySource(creep);
        if(creep.carry.energy < creep.carryCapacity) {
            if(creep.harvest(clossestSource) == ERR_NOT_IN_RANGE) {
                if (creep.memory.Mining){
                    creep.memory.Mining = false;
                }
                creep.moveTo(clossestSource, {visualizePathStyle: {stroke: '#ffaa00'}});

            }else{
                if (!creep.memory.Mining && creep.harvest(clossestSource) == OK){
                        creep.memory.Mining = true;
                        console.log("plus"+creep);
                        Memory[clossestSource.id].currentHarvesters += 1;
                }
            }   
            return 0; 
        } else{
            if(creep.memory.Mining){
                creep.memory.Mining = false;
                console.log("minus"+ creep);
                Memory[clossestSource.id].currentHarvesters -= 1;

            }
            return 1;
        }

    }


}


     /*
        var clossestSource = util.getClosestEnergySource(creep.pos);
        if(creep.carry.energy < creep.carryCapacity) {
            if(creep.harvest(clossestSource) == ERR_NOT_IN_RANGE) {
                if (creep.memory.Mining){
                    creep.memory.Mining = false;
                        
                }
                
                creep.moveTo(clossestSource, {visualizePathStyle: {stroke: '#ffaa00'}});
            }else{
                if (!creep.memory.Mining && creep.harvest(clossestSource) == OK){
                        Memory[clossestSource.id].currentHarvesters += 1;
                        console.log("plus");
                        console.log(Memory[clossestSource.id].currentHarvesters);
                }
                creep.memory.Mining = true;
            }
        }
        else {
            if(creep.memory.Mining){
                creep.memory.Mining = false;
                console.log("minus");
                
                Memory[clossestSource.id].currentHarvesters -= 1;
                console.log(Memory[clossestSource.id].currentHarvesters);


            }
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
        */



module.exports = CreepBase;