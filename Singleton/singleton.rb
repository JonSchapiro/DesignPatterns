class Singleton
    class << self
        def instance 
            @instance ||= new
        end
       private :new
    end
end

Singleton.instance