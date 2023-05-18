const getTweets = async () => {
  const response = await fetch("https://backend-dhzf.onrender.com/tweets");
  const tweets = await response.json();
  const mainContainer = document.getElementById("tweets-container");
  tweets.reverse().forEach(({ user, body, date }) => {
    const tweet_date = new Date(date * 1000).toLocaleString();
    mainContainer.innerHTML += `
    <div class="card mb-3">
        <div class="card-body d-inline-flex">
        <div style="width:5em;">
            <identicon-svg username="${user}"></identicon-svg>
        </div>
        <div mx-auto>
            <h5 class="card-title">${user}</h5>
            <h6 class="card-subtitle text-muted">${tweet_date}</h6>
            <p class="card-text">${body}</p>
        </div>
    </div>
    `;
  });
};

const setTweet = async (user, body) => {
  console.log(user, body);
  const token = localStorage.getItem("token");
  await fetch("http://localhost:5001/tweets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      user,
      body,
      token,
    }),
  });
};

export { getTweets, setTweet };
