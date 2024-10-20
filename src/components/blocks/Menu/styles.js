import styled from "styled-components";
import logo from "@icons/fullLogo.svg";
import { Ul } from "@styled-tags";

export const Menu = styled.nav`
  height: 100%;
  display: inline-grid;
  grid-template-columns: min-content;
  grid-template-rows: min-content 1fr;
  align-items: center;
  padding: ${({ theme }) => theme.spacings.xxl};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.radiuses.xxl};
`;

export const MenuHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 30px;
  margin-bottom: ${({ theme }) => theme.spacings.xxxl};
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
