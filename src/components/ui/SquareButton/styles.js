import styled from "styled-components";
import { Button } from "../../styled";
import { flexCenter } from "../../../style-fragments";
import portrait from "../../../assets/icons/portrait.svg";
import landscape from "../../../assets/icons/landscape.svg";
import sort from "../../../assets/icons/sort.svg";
import fire from "../../../assets/icons/fire.svg";

const typesIcon = {
  orientation: [portrait, landscape],
  sort: sort,
  popular: fire,
};

export const SquareButton = styled(Button)`
  ${flexCenter};
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.radiuses.m};
  color: ${({ theme }) => theme.colors.main};
  border: 1px solid ${({ theme }) => theme.colors.extraLiteMain};
  box-shadow: ${({ theme }) => theme.shadows.button};

  &:hover {
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.button};
  }

  &:active {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.main};
  }

  &::before {
    display: block;
    width: 16px;
    height: 16px;
    content: "";
    mask: url(${({ $type }) => typesIcon[$type]});
    background-color: currentColor;
  }
`;
