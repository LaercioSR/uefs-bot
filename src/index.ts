import dotenv from "dotenv";
import Twit, { Params } from "twit";

dotenv.config();

interface IUserTwitter {
  "id": number,
  "id_str": string,
  "name": string,
  "screen_name": string,
  "location": string,
  "description": string,
  "url": string,
}

interface IStatus {
  created_at: Date,
  id: number,
  id_str: string,
  text: string,
  user: IUserTwitter,
  lang: string
}

interface IResponseSearch {
  statuses: IStatus[]
}

interface IErrorSearch {
  message: string
}

const bot = new Twit({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token: process.env.ACCESS_TOKEN,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET,
  timeout_ms: 60 * 1000,
});

function init() {
  const search: Params = {
    q: "uefs",
    count: 25,
    result_type: "recent",
  };

  const now = new Date();
  now.setHours(now.getHours() -1);
  console.log(now)
  bot.get("search/tweets", search, (error: IErrorSearch, data: IResponseSearch) => {
    if (error) {
      console.log(error.message);
    } else {
      data.statuses.forEach((tweet) => {
        if((new Date(tweet.created_at)).getTime() > now.getTime())
        bot.post('favorites/create', { id: tweet.id_str }, (error: IErrorSearch, response) => {
          if (response) {
            console.log("Successfully favorite.");
          }
          if (error) {
            console.log(error.message);
          }
        });
        bot.post("statuses/retweet/" + tweet.id_str, {}, (error: IErrorSearch, response) => {
          if (response) {
            console.log("Successfully retweeted.");
          }
          if (error) {
            console.log(error.message);
          }
        });
      });
    }
  });
}

init();
setInterval(init, 1000 * 60 * 60);