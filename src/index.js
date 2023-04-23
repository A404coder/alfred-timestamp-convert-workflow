const dayjs = require("dayjs");

const DEFAULT_TIME_FORMAT = "YYYY-MM-DD HH:mm:ss";
const outcome = "./surprise.jpg";
const invalid = "./invalid.jpg";

function outputAlfredItems(items) {
  console.log(JSON.stringify({ items }));
}

async function main() {
  const timestamps = process.argv[2].split(" ");

  const items = timestamps.map((time) => {
    let valid = time.length === 10 || time.length === 13;
    const dayjsIns =
      time.length === 10 ? dayjs.unix(Number(time)) : dayjs(Number(time));

    if (!valid)
      return {
        title: dayjsIns.format(DEFAULT_TIME_FORMAT),
        subtitle: "时间戳格式不对，你没事吧？你没事吧？",
        arg: dayjsIns.format(DEFAULT_TIME_FORMAT),
        icon: {
          path: invalid,
        },
      };

    return {
      title: dayjsIns.format(DEFAULT_TIME_FORMAT),
      subtitle: "surprise！回车复制",
      arg: dayjsIns.format(DEFAULT_TIME_FORMAT),
      icon: {
        path: outcome,
      },
    };
  });

  outputAlfredItems(items);
}

main();
