import styled from "styled-components";
import logo from "../../../assets/icons/fullLogo.svg";

export const Menu = styled.nav`
  padding: ${({ theme }) => theme.spacings.xxl};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radiuses.xxl};
  box-shadow: ${({ theme }) => theme.shadows.button};
`;

export const Logo = styled.div`
  width: 121px;
  height: 28px;
  background-image: url(${logo});
`;
