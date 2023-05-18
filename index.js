import { getTweets, setTweet } from "./tweets-api.js";
// import { messaging } from "./firebase-config.js";

window.addEventListener('load', async () => {
  await getTweets();
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('serviceWorker.js');
      await navigator.serviceWorker.register('./firebase-messaging-sw.js')
      console.log('SW registered');
    }
    catch (error) {
      console.log('SW failed');
    }
  }
});

document.getElementById('new-tweet-button').addEventListener('click', async(event) => {
  console.log('test')
  event.preventDefault();
  const user = document.getElementById('new-tweet-user').value;
  const body = document.getElementById('new-tweet-body').value;
  await setTweet(user, body);
  window.location.reload();
});

// if ('Notification' in window && 'serviceWorker' in navigator) {
//   Notification.requestPermission()
//     .then(function (permission) {
//       if (permission === 'granted') {
//         console.log('Permiso concedido para recibir notificaciones.');
//         messaging.getToken().then((currentToken) => {
//           if (currentToken) {
//             console.log(currentToken);
//             fetch('https://6459a3698badff578e117409.mockapi.io/tokens', {
//               method: 'POST',
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//               body: JSON.stringify({
//                 token: currentToken
//               })
//             }).then((response) => {
//               console.log(response);
//             }
//             ).catch((error) => {
//               console.log(error);
//             }
//             );
//           } else {
//             console.log('No Instance ID token available. Request permission to generate one.');
//           }
          
//         }).catch((err) => {
//           console.log('An error occurred while retrieving token. ', err);
//         });
//       } else {
//         console.warn('Permiso denegado para recibir notificaciones.');
//       }
//     })
//     .catch(function (error) {
//       console.error('Error al solicitar el permiso para recibir notificaciones:', error);
//     });
// }
