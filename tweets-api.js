
const getTweets = async () => {

  const response = await fetch('https://backend-dhzf.onrender.com/tweets');
  const tweets = await response.json();
  const mainContainer = document.getElementById('tweets-container');
  tweets.reverse().forEach(({user, body, date}) => {
    const tweet_date = new Date(date * 1000).toLocaleString();
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
  console.log(user, body);
  await fetch('https://backend-dhzf.onrender.com/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user,
      body,
    })
  });
}

export {
  getTweets,
  setTweet,
}
