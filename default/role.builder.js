var CreepBase = require('creepBase');
var roleHarvester = ('creepBase');

class Builder extends CreepBase {

	constructor(){
		super();
	}


    /** @param {Creep} creep **/
    run(creep) {

		if(!creep.memory.task || creep.carry.energy == 0 ){
        	creep.memory.task = 'mining';
        	//creep.say('🔄 harvest');
       	}

       if(creep.memory.task == 'mining'){
           if (this.mine(creep) == 1){
                creep.memory.task = 'building';
               // creep.say('🚧 build');
           }
       }

	    if(creep.memory.task == 'building') {
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
	    }
	    else {
	    	this.mine(creep);
	    }
	}
}

module.exports = Builder;



