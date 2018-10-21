
var CreepBase = require('creepBase');
var roleHarvester = ('creepBase');

class Upgrader extends CreepBase {

    constructor(){
        super();
    }

    run(creep) {

        if(!creep.memory.task || creep.carry.energy == 0 ){
            creep.memory.task = 'mining';
            //creep.say('🔄 harvest');
        }

       if(creep.memory.task == 'mining'){
           if (this.mine(creep) == 1){
                creep.memory.task = 'upgrading';
               // creep.say('🚧 build');
           }
       }

        if(creep.memory.task == 'upgrading') {
          if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
                creep.moveTo(creep.room.controller);
            }  
        }
        else {
            this.mine(creep);
        }
    }

 

}


module.exports = Upgrader;

