class IncomeBot {
    
    constructor(){
        
    }
    
     
     getIncome(energy){
        
    	var sum = 0; 
    	Memory.income.push(energy);
    	if (Memory.income.length > 60) {
    		Memory.income.shift();
        }
        

        var sum = 0;
  		for(var i=0, n=Memory.income.length; i < n; i++) { 
      		sum += Memory.income[i]; 
   		}
        
    	return "income per 60 ticks:" + sum;
    
    }
    
   
}



module.exports = IncomeBot;