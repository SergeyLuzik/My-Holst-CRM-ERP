import React from "react";
import * as S from "./styles";
import { Li } from "../../../styled-tags";

export const TimeTag = ({ time }) => <S.TimeTag as={Li}>{time}</S.TimeTag>;
