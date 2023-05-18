// It's a static script file, so it won't be covered by a module bundling system
// hence, it uses "importScripts" function to load the other libs
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.2.0/firebase-messaging.js');

// Replace the values with yours
const firebaseConfig = {
  apiKey: "AIzaSyAUCa4UanPc2SnI2iAnMjrqAmrBm9U-PmU",
  authDomain: "web-avanzado-twitter.firebaseapp.com",
  projectId: "web-avanzado-twitter",
  storageBucket: "web-avanzado-twitter.appspot.com",
  messagingSenderId: "410187293169",
  appId: "1:410187293169:web:d4e84f2ae91621eaf8e450",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();