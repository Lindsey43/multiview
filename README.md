# multiview
Create an Android Ionic application utilizing sidemenu template, local storage, ngcordova and bower which maintains three lists.

## Functional Use-Cases

This ionic app is similar to the second ToDo assignment and must meet the following use-cases:

Must maintain three lists which stores to-do items in device's storage 
Users can add or remove to-do items in the list 
Users can mark a to-do item completed 
Users can delete a to-do item
Once a to-do item is completed user's device vibrates (if enabled)
Once all the items in the list are done user receives local notification (if enabled)
Requirements

Ionic App with utilizing ui-router, services and dependency - 10 Points

Clicking one of the three lists from side menu will load the appropriate view and fill the list with the local model data for that list. 

Application must utilize concept of services in order to manage data synchronization with local storage.

Cordova Plug-in usage - 10 Points

Settings section in the application must be created with two options:

Vibrate on item complete (toggle on/off):   http://ngcordova.com/docs/plugins/vibration/  (Links to an external site.)which wraps https://github.com/apache/cordova-plugin-vibration (Links to an external site.)  
Notify when list completed (toggle on/off): http://ngcordova.com/docs/plugins/localNotification/ (Links to an external site.) which  wraps https://github.com/katzer/cordova-plugin-local-notifications (Links to an external site.)
JavaScript Dependency Management - 5 Points

All JavaScript references must be maintained by bower (no CDN references allowed). One of the verification steps will be to remove everything from lib and run bower install command to ensure all files are coming from bower.json file.

## Submission

Upload your project folder to the edumedia server.

Also create a GitHub Repo of your project folder.

Submit your URL from edumedia.

Eg: http://abcd0001.edumedia.ca/mad9135/multiview/ (Links to an external site.)

(Replace the abcd0001 with your own username)

Please also add a note with your GitHub Repo URL.
