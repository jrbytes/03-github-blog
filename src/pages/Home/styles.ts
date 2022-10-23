import styled, { css } from 'styled-components'

export const Posts = styled.div`
  ${({ theme }) => css`
    width: ${theme.content.width};
    margin: ${theme.grid.gutter} auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;

    div {
      img,
      code {
        display: none;
      }
    }

    @media (max-width: ${theme.content.width}) {
      width: 100%;
      display: flex;
      flex-direction: column;
      padding: 0 ${theme.spacings.small};
      gap: ${theme.spacings.small};
    }
  `}
`
