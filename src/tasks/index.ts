import schedule from "node-schedule";
import Twit from "twit";
import { retweet } from "./retweet";
import { tweetDays } from "./tweetDays";

async function schedules(bot: Twit) {
  schedule.scheduleJob("*/5 * * * * ", () => {
    retweet(bot);
  });
  schedule.scheduleJob("0 7 * * *", () => {
    tweetDays(bot);
  });
}

export default schedules;
