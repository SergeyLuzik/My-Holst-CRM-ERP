import styled from "styled-components";
import logo from "../../../assets/icons/fullLogo.svg";
import { Ul } from "../../../styled-tags";

export const Menu = styled.nav`
  display: inline-flex;
  padding: ${({ theme }) => theme.spacings.xxl};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radiuses.xxl};
  box-shadow: ${({ theme }) => theme.shadows.button};
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const LinksList = styled(Ul)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacings.xxxl};
`;

export const Logo = styled.div`
  width: 121px;
  height: 28px;
  background-image: url(${logo});
`;
