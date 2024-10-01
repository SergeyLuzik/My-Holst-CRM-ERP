import styled from "styled-components";
import icon from "../../../assets/icons/pin.svg";

export const Popup = styled.div`
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
`

export const Content = styled.div`
display: inline-block;
  position: relative;
  padding: ${({ theme }) => theme.spacings.l};
  border-radius: ${({ theme }) => theme.radiuses.l};
  background-color: ${({ theme }) => theme.colors.white};
`;
