class CarMaker
    class << self 
        def Ford
            new(4)
        end
        
        def Honda
            new(2)
        end
        
        private :new
    end
    
    
    def initialize(doors)
        @doors = doors
    end
    
    def drive
       puts "This car has #{@doors} doors" 
    end
    
end

Ford = CarMaker.Ford
Honda = CarMaker.Honda
Ford.drive
Honda.drive
