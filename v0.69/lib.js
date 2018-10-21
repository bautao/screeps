var Source = require('resource');

class Lib {


    
    constructor(){
    
    }
    
    initializeMemory(){
        //parameters
        //creeps per source
        var maxCreepsSource = [];
        maxCreepsSource[0] = 2;
        maxCreepsSource[1] = 2;
        maxCreepsSource[2] = 2;
        maxCreepsSource[3] = 2;

        //total number of possible harvesters at sources
        Memory.maxMiningCreeps = 0;     

        var sources = this.getEnergySources();
        var id  ="";
        //initialize sources(counter for number of mining creeps on source)
        for(var i=0, n=sources.length; i < n; i++) { 
            id = sources[i].id;
            var source = new Source(id,2);
            Memory[id] = source;
            if(!Memory.id ){

                //Memory[id] = id;
                
                //Memory.id.maxHarvesters = maxCreepsSource[i];

              //  Memory.maxMiningCreeps += Memory.id.maxHarvesters;
            }

        }
    }

    getEnergySources(){
    	return Game.spawns['FeuseHQ'].room.find(FIND_SOURCES);


    }
     
    getClosestEnergySource(pos){
        
        return pos.findClosestByPath(FIND_SOURCES_ACTIVE);
    	var sources = this.getEnergySources();
    	var cost = 1337;
        var closestSource;
    	for(var i=0, n=sources.length; i < n; i++) { 
            
            if (PathFinder.search(pos,sources[i].pos).cost < cost ){
                closestSource = sources[i];
                cost = PathFinder.search(pos,sources[i].pos).cost
            }
            
    	}

        return closestSource;

    }
   


    
}



module.exports = Lib;

