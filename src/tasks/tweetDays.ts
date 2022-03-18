import dayjs, { Dayjs } from "dayjs";
import utc from "dayjs/plugin/utc";
import Twit from "twit";

dayjs.extend(utc);

interface ISemester {
  start_classes: Dayjs;
  end_classes: Dayjs;
}

interface ISemesters {
  [key: string]: ISemester;
}

const semesters: ISemesters = {
  "2022.1": {
    start_classes: dayjs("2022-03-07 00:00:00"),
    end_classes: dayjs("2022-07-09 23:59:59"),
  },
};

function isCurrentSemester(semester: ISemester): boolean {
  const dateNow = dayjs();
  return (
    dateNow.isAfter(semester.start_classes) &&
    dateNow.isBefore(semester.end_classes)
  );
}

function tweetDays(bot: Twit) {
  Object.keys(semesters).forEach((semester_number) => {
    const semester = semesters[semester_number];
    if (isCurrentSemester(semester)) {
      const diffDays = semester.end_classes.diff(dayjs(), "days");
      let message: string = "";
      if (diffDays > 0) {
        message = `Faltam ${diffDays} dias para o fim do semestre`;
      } else {
        message = `Hoje é o fim do semestre`;
      }
      bot.post("statuses/update", { status: message }, (err, result) => {
        console.log(result)
      });
    }
  });
}

export { tweetDays };
