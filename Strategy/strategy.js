  /* STRATEGY PATTERN IN JAVASCRIPT
    
    Our scenario we want to use here is an example I thought of from my previous work experience, Consulting!
    Think of a business who wants to employ a consulting firm. This business has to decide which firm is best 
    for the job. As we all know clients can easily change their minds. Enter, the strategy pattern. The Strategy
    Pattern is defined as a pattern that defines a family of algorithms, encapsulate each one, and make them interchangeable. 
    Strategy lets the algorithm vary independently from clients that use it.

    Based on one of our most common OO princicples, we want to encapsulate what varies. In this case, we encapsulate the consulting 
    behavior as it is subject to change. 


  */

//Context
  var Business = function(name){
    this.businessName = name;
  };

  Business.prototype.setStrategy = function(strategy){
    this.strategy = strategy;
  };

  Business.prototype.consult = function(){
    this.strategy.consult();
  }

//Strategy
  var ConsultingStrategy = function(name){
    this.name = name; 
  };

  
  ConsultingStrategy.prototype.consult = function(){
    throw new Error("This Consulting firm doesnt have a strategy! Make sure they implement one before going to a business.");
  };

//Strategy Implementations
  var Deloitte = new ConsultingStrategy('Delloite');

  Deloitte.consult = function(){
    console.log('I am consulting the ' + this.name + ' way!');
  };

  var PwC = new ConsultingStrategy('PwC');

  PwC.consult = function(){
    console.log('I am consulting the ' + this.name + ' way!');
  };

  var KPMG = new ConsultingStrategy('KPMG');

 

try {
  var business = new Business('My First Business');
  business.setStrategy(PwC);
  business.consult();
  business.setStrategy(KPMG);
  business.consult();
  

} catch (e){
  console.log(e);
}




