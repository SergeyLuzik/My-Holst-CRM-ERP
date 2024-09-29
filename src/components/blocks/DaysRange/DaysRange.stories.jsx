import React from "react";

import { DaysRange } from "./DaysRange";
import { Day } from "../../ui/Day/Day";

export default {
  title: "Blocks",
};

export const Days = () => (
  <DaysRange>
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="past" />
    <Day day="Вторник, 31 июля" type="today" />
    <Day day="Вторник, 31 июля" />
    <Day day="Вторник, 31 июля" type="selected" />
    <Day day="Вторник, 31 июля" />
    <Day day="Вторник, 31 июля" />
  </DaysRange>
);
