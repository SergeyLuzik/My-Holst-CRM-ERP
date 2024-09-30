import { Button } from "../../../styled-tags";
import styled from "styled-components";
import textSortIcon from "../../../assets/icons/textSort.svg";
import numberSortIcon from "../../../assets/icons/numberSort.svg";

const modeIcons = {
  text: textSortIcon,
  number: numberSortIcon,
};

export const ColumnHeader = styled(Button)`
  display: flex;
  gap: ${({ theme }) => theme.spacings.s};
  align-items: center;
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.extraBold};
  color: ${({ theme }) => theme.colors.black};
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
  ${({ $type, $mode }) =>
    $type &&
    `
    &::after {
      display: block;
      content: "";
      width: 12px;
      height: 12px;
      mask: url(${modeIcons[$mode]});
      background-color: currentColor;
    }
  `}
`;
