class Burger 
    attr_accessor :description, :cost
    def initialize
        @description = "Burger"
        @cost = 5
    end 

end

class Burger_Decorator
    attr_accessor :description, :cost
    def initialize(burger,description,cost)
        @burger = burger
        @description = "#{@burger.description} with #{description}" 
        @cost = @burger.cost + cost
    end
end

#Burger
burger = Burger.new
burger.description
burger.cost

#Cheeseburger
cheeseburger = Burger_Decorator.new(burger,"cheese",0.50)
cheeseburger.description 
cheeseburger.cost

#CheeseBurger with Ketchup
ketchup_cheeseburger = Burger_Decorator.new(cheeseburger,"ketchup",0.10)
ketchup_cheeseburger.description
ketchup_cheeseburger.cost




