import { getTweets, setTweet } from "./tweets-api.js";


window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator) {
    try {
      navigator.serviceWorker.register('serviceWorker.js');
      console.log('SW registered');
    }
    catch (error) {
      console.log('SW failed');
    }
  }
  await getTweets();
});

document.getElementById('new-tweet-button').addEventListener('click', async(event) => {
  event.preventDefault();
  const user = document.getElementById('new-tweet-user').value;
  const body = document.getElementById('new-tweet-body').value;
  await setTweet(user, body);
  window.location.reload();
});
