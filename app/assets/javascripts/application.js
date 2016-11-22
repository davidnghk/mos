// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery.ui.datepicker
// require turbolinks
//= require bootstrap-sprockets
//= require_tree .
//= require moment
//= require bootstrap-datetimepicker
//= require pickers
// You may include any languages (optional)
//= require moment

$('input#date_field').datepicker();

jQuery(function($) {
    $("tr[data-link]").click(function() {
        window.location = $(this).data('link');
    });
});

//= require serviceworker-companion

var config = {
    apiKey: "AIzaSyCoR14jc7u51KRrreq5svaSPJ_GifefRJA",
    authDomain: "first-ref.firebaseapp.com",
    databaseURL: "https://first-ref.firebaseio.com",
    storageBucket: "first-ref.appspot.com",
    messagingSenderId: "334655023105"
  };
  firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission()
.then(function() {
  console.log('Have permission');
  return messaging.getToken(); 
})
.then(function(token) {
    console.log(token);
})
.catch(function(err) {
  console.log('Error Occured.');
})

messaging.onMessage(function(payload) {
    console.log('onMessage: ', payload); 
})