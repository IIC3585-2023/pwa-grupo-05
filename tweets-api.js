
const getTweets = async () => {

  const response = await fetch('https://6459a3698badff578e117409.mockapi.io/tweets');
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
  await fetch('https://6459a3698badff578e117409.mockapi.io/tweets', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      user,
      body,
      date: Date.now() / 1000,
    })
  });
}

export {
  getTweets,
  setTweet,
}