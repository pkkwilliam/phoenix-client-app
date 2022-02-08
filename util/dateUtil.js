export const convertDateToServerDate = (date) => {
  return (
    date.getFullYear() +
    "-" +
    String(date.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(date.getDate()).padStart(2, "0")
  );
};

export const convertSystemDateToDisplayDate = (date) => {
  const convertedDate = new Date(date);
  return (
    addZeroToFrontForMonthOrDate(convertedDate.getMonth() + 1) +
    "-" +
    addZeroToFrontForMonthOrDate(convertedDate.getDate())
  );
};

export const convertSystemDateToDisplayDateYear = (date) => {
  const convertedDate = new Date(date);
  return (
    convertedDate.getFullYear() +
    "年" +
    addZeroToFrontForMonthOrDate(convertedDate.getMonth() + 1) +
    "月" +
    addZeroToFrontForMonthOrDate(convertedDate.getDate()) +
    "日"
  );
};

export const convertSystemDateToDisplayDateTime = (date) => {
  const convertedDate = new Date(date);
  return `${convertedDate.getFullYear()}-${addZeroToFrontForMonthOrDate(
    convertedDate.getMonth() + 1
  )}-${addZeroToFrontForMonthOrDate(
    convertedDate.getDate()
  )} ${addZeroToFrontForMonthOrDate(
    convertedDate.getHours()
  )}:${addZeroToFrontForMonthOrDate(
    convertedDate.getMinutes()
  )}:${addZeroToFrontForMonthOrDate(convertedDate.getSeconds())}`;
};

export const convertSystemDateToDisplayDateTimeMinute = (date) => {
  const convertedDate = new Date(date);
  return `${convertedDate.getFullYear()}-${addZeroToFrontForMonthOrDate(
    convertedDate.getMonth() + 1
  )}-${addZeroToFrontForMonthOrDate(
    convertedDate.getDate()
  )} ${addZeroToFrontForMonthOrDate(
    convertedDate.getHours()
  )}:${addZeroToFrontForMonthOrDate(convertedDate.getMinutes())}`;
};

export const hoursDifference = (date) => {
  return Math.floor(Math.abs(new Date() - new Date(date)) / (60 * 60 * 1000));
};

export const getServerBetweenDate = (numberOfFromDateAgo, numberOfTillDate) => {
  const fromDate = new Date(
    new Date().setDate(new Date().getDate() - numberOfFromDateAgo)
  );
  const toDate = new Date(
    new Date().setDate(new Date().getDate() + numberOfTillDate)
  );
  console.log(fromDate, toDate);
  return {
    startDate: convertDateToServerDate(fromDate),
    endDate: convertDateToServerDate(toDate),
  };
};

export const addZeroToFrontForMonthOrDate = (value) => {
  return String(value).padStart(2, "0");
};

//datetime 格式为2019-11-22 12:23:59样式
//将时间转换成几天前，几个月前，几小时前等
export function timeago(datetime) {
  datetime = convertSystemDateToDisplayDateTime(datetime);
  //dateTimeStamp是一个时间毫秒，注意时间戳是秒的形式，在这个毫秒的基础上除以1000，就是十位数的时间戳。13位数的都是时间毫秒。
  var dateTimeStamp = Date.parse(datetime.replace(/-/gi, "/"));
  var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
  var hour = minute * 60;
  var day = hour * 24;
  var week = day * 7;
  var halfamonth = day * 15;
  var month = day * 30;
  var now = new Date().getTime(); //获取当前时间毫秒
  var diffValue = now - dateTimeStamp; //时间差

  if (diffValue < 0) {
    console.log("diffValue<0", datetime, dateTimeStamp, now, diffValue);
    return "剛剛";
  }
  var minC = diffValue / minute; //计算时间差的分，时，天，周，月
  var hourC = diffValue / hour;
  var dayC = diffValue / day;
  var weekC = diffValue / week;
  var monthC = diffValue / month;
  var result = "2";
  if (monthC >= 1 && monthC <= 3) {
    result = " " + parseInt(monthC) + "月前";
  } else if (weekC >= 1 && weekC <= 3) {
    result = " " + parseInt(weekC) + "周前";
  } else if (dayC >= 1 && dayC <= 6) {
    result = " " + parseInt(dayC) + "天前";
  } else if (hourC >= 1 && hourC <= 23) {
    result = " " + parseInt(hourC) + "小時前";
  } else if (minC >= 1 && minC <= 59) {
    result = " " + parseInt(minC) + "分鐘前";
  } else if (diffValue >= 0 && diffValue <= minute) {
    result = "剛剛";
  } else {
    var datetime = new Date();
    datetime.setTime(dateTimeStamp);
    var Nyear = datetime.getFullYear();
    {
    }
    var Nmonth =
      datetime.getMonth() + 1 < 10
        ? "0" + (datetime.getMonth() + 1)
        : datetime.getMonth() + 1;
    var Ndate =
      datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
    var Nhour =
      datetime.getHours() < 10
        ? "0" + datetime.getHours()
        : datetime.getHours();
    var Nminute =
      datetime.getMinutes() < 10
        ? "0" + datetime.getMinutes()
        : datetime.getMinutes();
    var Nsecond =
      datetime.getSeconds() < 10
        ? "0" + datetime.getSeconds()
        : datetime.getSeconds();
    result = Nyear + "-" + Nmonth + "-" + Ndate;
  }
  return result;
}
