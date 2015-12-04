=begin  
    
    STRATEGY PATTERN IN RUBY
    
    Our scenario we want to use here is an example I thought of from my previous work experience, Consulting!
    Think of a business who wants to employ a consulting firm. This business has to decide which firm is best 
    for the job. As we all know clients can easily change their minds. Enter, the strategy pattern. The Strategy
    Pattern is defined as a pattern that defines a family of algorithms, encapsulate each one, and make them interchangeable. 
    Strategy lets the algorithm vary independently from clients that use it.

    Based on one of our most common OO princicples, we want to encapsulate what varies. In this case, we encapsulate the consulting 
    behavior as it is subject to change. 
=end
 

#Context

class Business

  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def set_strategy(strategy)
    @strategy = strategy
  end

  def consult 
    @strategy.consult
  end

end

#Strategy
  
class ConsultingStrategy

  attr_accessor :name

  def initialize(name)
    @name = name
  end

  def consult
    puts "I am consulting the #{name} way!"
  end

end

class PwC < ConsultingStrategy; end;
class KPMG < ConsultingStrategy; end;
class Deloitte < ConsultingStrategy; end;

PWC = PwC.new('PwC');
KpMg = KPMG.new('KPMG');
DeloiTTe = Deloitte.new('Deloitte');

business = Business.new('My First Business')
business.set_strategy(PWC)
business.consult
business.set_strategy(KpMg)
business.consult







