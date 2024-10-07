import { css } from "styled-components";

export const pill = css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-inline: ${({ theme }) => theme.spacings.s};
  padding-block: ${({ theme }) => theme.spacings.xs};
  border-radius: ${({ theme }) => theme.radiuses.m};
`;
