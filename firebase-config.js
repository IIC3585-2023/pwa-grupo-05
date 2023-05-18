import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getMessaging, getToken, onMessage } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-messaging.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUCa4UanPc2SnI2iAnMjrqAmrBm9U-PmU",
  authDomain: "web-avanzado-twitter.firebaseapp.com",
  projectId: "web-avanzado-twitter",
  storageBucket: "web-avanzado-twitter.appspot.com",
  messagingSenderId: "410187293169",
  appId: "1:410187293169:web:d4e84f2ae91621eaf8e450",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const listen = async () => {
  try {
    const serviceWorkerRegistration = await navigator.serviceWorker.register('./firebase/firebase-messaging-sw.js');
    console.log("register: ", serviceWorkerRegistration)
    const token = await getToken(messaging, {
      vapidKey: "BH_HP_crMNHblGKqgHcpWtpu3M76vv71jFBrHTmInrQShsUmIyGJU29lpzND50Z5XeiruZxNvXbC4Q5YC71b5dY",
      serviceWorkerRegistration,
    });
    console.log(token);
    onMessage(messaging, (payload) => {
      console.log('Message received. ', payload);
      // ...
    });
  } catch (e) {
    console.log('ERROR: ', e)
    console.log("Notificaciones no soportadas");
  } 
}; 
listen();