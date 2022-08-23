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
  `}
`
