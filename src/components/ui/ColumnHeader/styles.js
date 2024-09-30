import { Button } from "../../../styled-tags";
import styled from "styled-components";
import textSortIcon from "../../../assets/icons/textSort.svg";
import numberSortIcon from "../../../assets/icons/numberSort.svg";

const modeIcons = {
  text: { icon: textSortIcon, width: 12, height: 15 },
  number: { icon: numberSortIcon, width: 16, height: 12 },
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
  ${({ theme, $type, $mode, active }) =>
    $type &&
    `
    &::after {
      display: block;
      content: "";
      width: ${modeIcons[$mode].width}px;
      height: ${modeIcons[$mode].height}px;
      mask: url(${modeIcons[$mode].icon});
      background-color: ${active === true ? "currentColor" : theme.colors.grey};
      };
    }
  `}
`;
