export const formatDate = (date) => {
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  const formatter = new Intl.DateTimeFormat("ru-RU", options);

  const preFormattedDate = formatter.format(date);
  return preFormattedDate.replace(/^./, preFormattedDate[0].toUpperCase());
};
