import Twit, { Params } from "twit";

interface IUserTwitter {
  id: number;
  id_str: string;
  name: string;
  screen_name: string;
  location: string;
  description: string;
  url: string;
}

interface IStatus {
  created_at: Date;
  id: number;
  id_str: string;
  text: string;
  user: IUserTwitter;
  lang: string;
  possibly_sensitive: boolean;
  retweeted: boolean;
}

interface IResponseSearch {
  statuses: IStatus[];
}

interface IErrorSearch {
  message: string;
}

function retweet(bot: Twit) {
  const search: Params = {
    q: "uefs",
    count: 5,
    result_type: "recent",
  };

  const now = new Date();
  now.setHours(now.getHours() - 1);
  console.log(now);
  bot.get(
    "search/tweets",
    search,
    (error: IErrorSearch, data: IResponseSearch) => {
      if (error) {
        console.log(error.message);
      } else {
        data.statuses.forEach((tweet) => {
          if (!tweet.possibly_sensitive && !tweet.retweeted) {
            bot.post(
              "favorites/create",
              { id: tweet.id_str },
              (error: IErrorSearch, response) => {
                if (response) {
                  console.log("Successfully favorite.");
                }
                if (error) {
                  console.log(error.message);
                }
              }
            );
            bot.post(
              "statuses/retweet/" + tweet.id_str,
              {},
              (error: IErrorSearch, response) => {
                if (response) {
                  console.log("Successfully retweeted.");
                }
                if (error) {
                  console.log(error.message);
                }
              }
            );
          }
        });
      }
    }
  );
}

export { retweet };
