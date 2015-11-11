angular.module('starter.controllers', [])

.controller('AppCtrl', function ($scope, $ionicModal, $timeout, $localStorage) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function (modal) {
        $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function () {
        $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function () {
        $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
        $timeout(function () {
            $scope.closeLogin();
        }, 1000);
    };

})

.controller('settingsCtrl', function ($scope, LocalStorageService) {

    if (LocalStorageService.getStorage('settingList')) {
        $scope.settings = JSON.parse(LocalStorageService.getStorage('settingList'));
    } else {
        $scope.settings = [
            {
                text: "Vibration",
                checked: false
            },
            {
                text: "Push Notification",
                checked: false
            }
                                ];
    }

    //Toggle-Button
    $scope.setToggle = function (index) {
        if ($scope.settings[index].checked) {
            $scope.settings[index].checked = false;
            LocalStorageService.setStorage('settingList', JSON.stringify($scope.settings));
            //alert(" not checked");
        } else {
            $scope.settings[index].checked = true;
            LocalStorageService.setStorage('settingList', JSON.stringify($scope.settings));
            //alert("checked");
        }
    }
})

.controller('List1Ctrl', function ($scope, $stateParams, LocalStorageService, $cordovaLocalNotification, $cordovaVibration) {
    //check local storage for settings (init the same as foods)
    
    
    $scope.foods = [];
    $scope.NewFood = {
        task: ''
    };

    $scope.$on('$ionicView.enter', function (e) {
        //Setting local storage
        if (LocalStorageService.getStorage('foods')) {
            $scope.foods = LocalStorageService.getStorage('foods');
        } else {
            $scope.foods = [{
                task: 'Apples',
                checked: false
                }, {
                task: 'graphes',
                checked: false
                }, {
                task: 'yogurt',
                checked: false
                }];
           LocalStorageService.setStorage('foods',$scope.foods); 
        }
    });
    
    $scope.addFood = function () {
        if ($scope.NewFood.task) {

            $scope.foods.push({
                task: $scope.NewFood.task,
                checked: false
            });
            
             LocalStorageService.setStorage('foods',$scope.foods);
            
            $scope.NewFood.task = "";
            
        } else {
         alert("Please enter a food item");
     }
    }

    $scope.checkedState = function(index){
        $scope.foods[index].checked = !$scope.foods[index].checked;
        //type proper vibration location in scope
        if($scope.settingList.checked && $scope.vibration.checked){
            //if vibration is true
            $cordovaVibration.vibrate(300);
        }
        
        
    };
    //end vibrations checked
    
       
        
        //$cordovaLocalNotification.add({
//        id: 1,
//        title: "I am a notification"
//        text: "All items completed"
//    })

//});
    $scope.removeFood = function () {
        
        for (var i =0; i<$scope.foods.length;i++) {
           if($scope.foods[i].checked){
              delete $scope.foods.splice(i -1,1);
            } 
        }

    };
    $scope.removeDefault = function (index) {
        $scope.defaults.splice(index, 1);

    };


})

.controller('List2Ctrl', function ($scope, $stateParams, LocalStorageService, $cordovaLocalNotification, $cordovaVibration) {
    $scope.jobs = [];
    $scope.NewJob = {
        task: ''
    };
    $scope.$on('$ionicView.enter', function (e) {
        //Setting Local Storage
        if (LocalStorageService.getStorage('jobs'))  {
            $scope.jobs = LocalStorageService.getStorage('jobs');
        } else {
            $scope.jobs = [{
                task: 'cut grass',
                checked: false
                }, {
                task: 'Laundry',
                checked: false
                }, {
                task: 'Homework',
                checked: false
                }];
        }
    });
    $scope.addJobs = function () {
        if ($scope.NewJob) {

            $scope.jobs.push({
                task: $scope.NewJob.task,
                checked: false
            });
            
            LocalStorageService.setStorage('jobs',$scope.jobs);
            
             $scope.NewFood = "";

        } else {
            alert("Please enter a food item");
        }
    }

     $scope.checkedState = function(index){
        $scope.jobs[index].checked = !$scope.jobs[index].checked;
        //type proper vibration location in scope
       if($scope.settingList.checked && $scope.vibration.checked){
            //if vibration is true
            $cordovaVibration.vibrate(300);
        }
    };
    //end vibrations checked
    $scope.removeJob = function () {
        
        for (var i =0; i<$scope.jobs.length;i++) {
           if($scope.jobs[i].checked){
              delete $scope.jobs.splice(i -1,1);
            } 
        }
        
       //$cordovaLocalNotification.add({
//        id: 1,
//        title: "I am a notification"
//        text: "All items completed"
//    })

//});
    };
    $scope.removeDefault = function (index) {
        $scope.defaults.splice(index, 1);

    };

})
.controller('List3Ctrl', function ($scope, $stateParams, LocalStorageService, $cordovaLocalNotification, $cordovaVibration) {
      $scope.todos = [];
    $scope.NewTodo = {
        task: ''
    };

    $scope.$on('$ionicView.enter', function (e) {
        // setting the local storage
        if (LocalStorageService.getStorage('todos')) {
            $scope.todos = LocalStorageService.getStorage('todos');
        } else {
            $scope.todos = [{
                task: 'Nails',
                checked: false
                }, {
                task: 'Quiz',
                checked: false
                }, {
                task: 'Yoga',
                checked: false
                }];
        }
    });
    $scope.addTodo = function () {
        if ($scope.NewTodo) {

            $scope.todos.push({
                task: $scope.NewTodo.task,
                checked: false
            });
             LocalStorageService.setStorage('todos',$scope.todos);
            
             $scope.NewFood = "";

        } else {
            alert("Please enter a food item");
        }
    }
 $scope.checkedState = function(index){
        $scope.todos[index].checked = !$scope.todos[index].checked;
        //type proper vibration location in scope
        if($scope.foods[index].checked && $scope.vibration.checked){
            //if vibration is true
            $cordovaVibration.vibrate(300);
        }
    };
    //end vibration checked
    
    //Notification checked
       var count = 0;
        angular.forEach($scope.todos, function (todo) {
            if (todo.checked) {
                count++;
            }
        });

        //If all items are checked, send off a notification
        if (count == $scope.todos.length && $scope.notification.checked) {
            //alert("Notification");
            $cordovaLocalNotification.add({
                id: '1',
                title: "Todo List",
                text: 'All todos are going to be seleted.'
            }).then(function () {
                console.log('notification Completed');
            });
        }
    $scope.removeTodo = function () {
        
        for (var i =0; i<$scope.todos.length;i++) {
           if($scope.todos[i].checked){
              delete $scope.todos.splice(i -1,1);
            } 
        }
    };
    $scope.removeDefault = function (index) {
        $scope.defaults.splice(index, 1);

    };

})