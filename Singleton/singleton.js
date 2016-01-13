var Singleton = (function(){

  var instance;

  return {
    getInstance: function(){
      if (typeof instance != 'object'){
        instance = new Object();
        return instance;
      } 
      
      return instance;
    }
  }

})()
Singleton.getInstance();//creates a new object
Singleton.getInstance();//returns previously created object