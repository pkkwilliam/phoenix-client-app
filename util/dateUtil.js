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
