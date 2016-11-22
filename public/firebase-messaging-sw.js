// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.5.2/firebase-messaging.js');

var config = {
    apiKey: "AIzaSyCoR14jc7u51KRrreq5svaSPJ_GifefRJA",
    authDomain: "first-ref.firebaseapp.com",
    databaseURL: "https://first-ref.firebaseio.com",
    storageBucket: "first-ref.appspot.com",
    messagingSenderId: "334655023105"
  };
  firebase.initializeApp(config);

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
// firebase.initializeApp({
//   'messagingSenderId': 'YOUR-SENDER-ID'
// });

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
  const title = 'Hello World';
  const options = {
    body: payload.data.status
  };
  return self.registration.showNotification(title, options);        
})