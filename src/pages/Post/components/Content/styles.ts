import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    width: ${theme.content.width};
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    a {
      color: ${theme.colors.blue};
      text-decoration: none;
    }
  `}
`
