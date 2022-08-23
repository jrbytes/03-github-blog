import styled, { css } from 'styled-components'

export const Header = styled.div`
  ${({ theme }) => css`
    margin: -80px auto 0 auto;
    padding: ${theme.spacings.large};
    width: ${theme.content.width};
    background-color: ${theme.colors.profile};
    border-radius: ${theme.borderRadius.large};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      div {
        color: ${theme.colors.blue};
        display: flex;
        align-items: center;
        gap: ${theme.spacings.xxsmall};
        font-size: ${theme.font.sizes.xsmall};
        cursor: pointer;
      }

      a {
        display: flex;
        align-items: center;
        gap: ${theme.spacings.xxsmall};
        color: ${theme.colors.blue};
        text-decoration: none;
        font-size: ${theme.font.sizes.xsmall};
      }
    }

    h1 {
      font-size: ${theme.font.sizes.xxlarge};
    }

    footer {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.medium};

      div {
        display: flex;
        align-items: center;
        gap: ${theme.spacings.xxsmall};
        font-size: ${theme.font.sizes.small};

        svg {
          color: ${theme.colors.label};
        }
      }
    }
  `}
`
