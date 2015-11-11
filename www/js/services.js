angular.module('starter.services', [])

.factory('LocalStorageService',function($localStorage){
    
    return{
        setStorage : function(key, value){
            $localStorage[key] = value;
        },
        
        getStorage : function(key){
            return $localStorage[key];
        }
    };
    
});
