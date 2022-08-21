import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.post};
    border-radius: ${theme.borderRadius.large};

    display: flex;
    flex-direction: column;
    padding: 32px;
    gap: ${theme.spacings.small};

    header {
      display: grid;
      grid-template-columns: 4fr 2fr;
      gap: ${theme.spacings.medium};

      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.title};

      position: relative;

      span {
        position: absolute;
        right: 0;
        font-size: ${theme.font.sizes.small};
        color: ${theme.colors.span};
      }
    }

    section {
      color: ${theme.colors.text};
      font-size: ${theme.font.sizes.small};

      height: 9ch;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  `}
`
