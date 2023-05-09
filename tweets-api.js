import { db, getDocs, collection, setDoc, doc, Timestamp, } from './firebase-config.js'
  

const getTweets = async () => {

  const querySnapshot = await getDocs(collection(db, "tweets"));
  const mainContainer = document.getElementById('tweets-container');
  querySnapshot.forEach((doc) => {
    const { body, user, date } = doc.data();
    const tweet_date = new Date(date.seconds * 1000).toLocaleString();
    mainContainer.innerHTML += `
      <div class="tweet">
        <div class="tweet-header">
          <span class="tweet-author">${user}</span>
          <span class="tweet-date">${tweet_date}</span>
        </div>
        <div class="tweet-content">
          <p>${body}</p>
        </div>
      </div>
    `;
  });
};

const setTweet = async (user, body) => {
  const tweetsRef = collection(db, "tweets");
  await setDoc(doc(tweetsRef), {
    user,
    body,
    date: Timestamp.fromDate(new Date()),
  });
}

export {
  getTweets,
  setTweet,
}