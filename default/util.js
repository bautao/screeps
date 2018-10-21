var Source = require('resource');

class Util {


    
    constructor(){
    
    }
    
    initializeMemory(){
        //parameters
        //creeps per source
        var maxCreepsSource = [];
        maxCreepsSource[0] = 1;
        maxCreepsSource[1] = 1;
        maxCreepsSource[2] = 1;
        maxCreepsSource[3] = 1;

        //total number of possible harvesters at sources
        Memory.maxMiningCreeps = 0;     

        var sources = this.getEnergySources();
        var id  ="";
        //initialize sources(counter for number of mining creeps on source)
        for(var i=0, n=sources.length; i < n; i++) {
            id = sources[i].id;
            if (!Memory[id]){
                var source = new Source(id,2);
                Memory[id] = source;
                Memory.maxMiningCreeps += maxCreepsSource[i];
            }
        }
    }

    getEnergySources(){
    	return Game.spawns['Spawn1'].room.find(FIND_SOURCES_ACTIVE);


    }
     
    getClosestEnergySource(creep, type){
        
        return creep.pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    	var sources = this.getEnergySources();
    	var cost = 1337;
        var closestSource;
    	for(var i=0, n=sources.length; i < n; i++) { 
            var currentCost = PathFinder.search(creep.pos,sources[i].pos).cost;
            if (currentCost < cost && 
                (Memory[sources[i].id].currentHarvesters < Memory[sources[i].id].maxHarvesters || 
                creep.harvest(sources[i]) != ERR_NOT_IN_RANGE)){
                closestSource = sources[i];
                cost = currentCost
            }
            
    	}

        return closestSource;

    }
   


    
}



module.exports = Util;

