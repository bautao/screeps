

class Reesource {

	constructor(id, maxHarvesters){
		console.log("this shouldnt be happening");
		this.id = id;
		this.currentHarvesters = 0;
		this.maxHarvesters = maxHarvesters;
	} 


	getID(){
		return this.id;
	}

	getCurrentHarvesters(){
		return this.currentHarvesters;
	}

	getMaxHarvesters(){
		return this.maxHarvesters;
	}

	addHarvester(){
		this.currentHarvesters +=1;
		console.log("currentHarvesters. " + this.currentHarvesters);
	}

	removeHarvester(){
		this.currentHarvesters -=1;
	}

	checkResource(){
		return this.currentHarvesters < this.maxHarvesters;
	}



}





module.exports = Reesource;

