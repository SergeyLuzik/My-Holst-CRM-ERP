import styled from "styled-components";
import icon from "../../../assets/icons/pin.svg";

export const Popup = styled.div`
  top: ${({ $top }) => $top}px;
  left: ${({ $left }) => $left}px;
  transform: translate(-50%);
  position: absolute;
  z-index: 1000;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  filter: drop-shadow(${({ theme }) => theme.shadows.pin});
`;

export const Pin = styled.div`
  width: 37px;
  height: 9px;
  mask: url(${icon});
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: -1px;
`;

export const Content = styled.div`
  display: inline-block;
  position: relative;
  padding: ${({ theme }) => theme.spacings.l};
  border-radius: ${({ theme }) => theme.radiuses.l};
  background-color: ${({ theme }) => theme.colors.white};
`;
