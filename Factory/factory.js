var CarMaker = function(){};
CarMaker.factory = function(type){
    var constr = type;
    if (typeof CarMaker[constr] !== 'function'){
        return;
    } else {
        //newly created object must inherit from CarMaker;
        if (CarMaker[constr].prototype.drive !== "function"){
            CarMaker[constr].prototype = new CarMaker();
        }
        return new CarMaker[constr]();
    }
};

CarMaker.prototype.drive = function(){
   console.log("I am a ", this.make);
};

CarMaker.ford = function(){
  this.make = "Ford";  
};

CarMaker.honda = function(){
    this.make = "Honda";
};

var Honda = CarMaker.factory("honda");
var Ford = CarMaker.factory("ford");
Honda.drive();
Ford.drive();

