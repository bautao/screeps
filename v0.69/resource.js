

class Reesource {

	constructor(id, maxHarvesters){
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




}





module.exports = Reesource;

