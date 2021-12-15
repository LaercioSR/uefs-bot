import dotenv from "dotenv";
import Twit from "twit";

dotenv.config();

const bot = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

function firstTweet() {
  const postTweet = "Primeiro tweet, apenas para teste";
  bot.post(
    "statuses/update",
    { status: postTweet },
    function (err, data, response) {
      if (err) {
        console.log("Error: " + err.message);
        return false;
      }

      console.log("Tweet posted successfully!\n");
    }
  );
}

firstTweet();

// setInterval(firstTweet, 30000);