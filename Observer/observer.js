// Subject Definition
var Subject = function(){
  this.observers = [];
};

Subject.prototype.addObserver = function(observer){
  //check to see that observer is of type Observer
  if (observer instanceof Observer){
    this.observers.push(observer);
  } else {
    throw 'You cannot add an object that is not an observer';
  }
  
};

Subject.prototype.removeObserver = function(observer){
  for (var i = 0; i < this.observers.length; i++){
    if (this.observers[i] === observer){
      delete this.observers[i];
    }
  }
};

Subject.prototype.notifyObservers = function(data){
    for (var i=0; i < this.observers.length; i++){
        this.observers[i].update(data);
    }
};

// Observer Definition
var Observer = function(name){
    this.objectName = name;
};
Observer.prototype.update = function(data){
    console.log(this.objectName + ' has received ' + data);
    return this.objectName + ' has received ' + data;
};

var subject = new Subject();
var observer1 = new Observer('object1');
var observer2 = new Observer('object2');

//custom update functions
observer1.update = function(data){
    console.log('observer1 received: ', data);
};

observer2.update = function(data){
    console.log(this.objectName + ' received: ', data);
};

subject.addObserver(observer1);
subject.addObserver(observer2);
subject.notifyObservers('Hi there');