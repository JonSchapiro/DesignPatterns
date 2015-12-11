# Subject

class Subject
  attr_accessor :observers 

  def initialize()  
   @observers = []

  end  

  def addObserver(observer)
    if observer.instance_of? Observer
      @observers << observer
    else
      raise "You can only add objects of type observer"
    end
  end

  def removeObserver(observer)
    
    @observers.each do |observer|
      if observer == observer
        #remove observer
      else 
        raise "The subject does not notify this observer"
      end
    end

  end
  
  def notifyObservers(data)
      @observers.each do |observer|
          observer.update(data)
      end
  end

end

# Observer Definition
class Observer
    attr_accessor :object_name
    
    def initialize(name)
        @name = name 
    end
    
    def update(data)
        puts "#{@name} has received #{data}"
    end
    
    
end

subject = Subject.new
observer1 = Observer.new 'observer1'
observer2 = Observer.new 'observer2'

subject.addObserver observer1
subject.addObserver observer2

subject.notifyObservers 'data'