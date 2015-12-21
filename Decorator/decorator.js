//Base Class
var Burger = function(){
    this.description = "Burger";  
};
Burger.prototype.getCost = function(){
    return 5.00;  
};

//Decorator Class
var BurgerDecorator = function(burger,description,cost){
    this.burger = burger; //instance of burger to be decorated
    this.description = this.burger.description + " with " + description;
    this.cost = cost;
};
BurgerDecorator.prototype.getCost = function(){
    return this.burger.getCost() + this.cost;
};


var burger = new Burger();
//Decorate Burger with Cheese
var cheeseBurger = new BurgerDecorator(burger,"Cheese", .20);
console.log(cheeseBurger.description);
console.log(cheeseBurger.getCost());

//Decorate Cheeseburger with ketchup
var cheeseBurgerWithKetchup = new BurgerDecorator(cheeseBurger,"Ketchup",.10);

console.log(cheeseBurgerWithKetchup.description);
console.log(cheeseBurgerWithKetchup.getCost());




