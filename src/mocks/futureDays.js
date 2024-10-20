import { formatDate } from "@utils/formatDate";
export const futureDays = setFutureDays();

function getFutureDays(daysAmount) {
  const todayDate = new Date();
  const todayDay = todayDate.getDate();
  const result = [];

  for (let i = 0; i <= daysAmount; i++) {
    const dayDate = new Date(todayDate.setDate(todayDay + i));
    result.push({ id: dayDate.getTime(), day: formatDate(dayDate) });
  }
  return result;
}

function setFutureDays() {
  const futureDays = getFutureDays(3);
  const orders = [35, 20, 5];
  const types = ["today", "selected"];
  let result = [];
  for (let i = 0; i < 3; i++) {
    let day = {};
    day.id = futureDays[i].id;
    day.day = futureDays[i].day;
    if (types[i]) {
      day.type = types[i];
    }
    if (orders[i]) {
      day.ordersCount = orders[i];
    }
    result.push(day);
  }

  return result;
}

/*
[
  { day: "Четверг, 9 августа", type: "today", ordersCount: 35 },
  { day: "Пятница, 10 августа", type: "selected", ordersCount: 25 },
  { day: "Суббота, 11 августа", ordersCount: 5 },
  { day: "Воскресенье, 12 августа" },
];

*/
