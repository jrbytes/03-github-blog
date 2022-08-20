import styled, { css } from 'styled-components'

export const Container = styled.div`
  margin-top: -80px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.profile};
    border-radius: ${theme.borderRadius};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    width: ${theme.content.width};

    display: flex;
    padding: ${theme.spacings.large};
    gap: ${theme.spacings.large};

    img {
      height: 148px;
      border-radius: ${theme.borderRadius};
    }
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 2fr 1fr;

    header {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;

      h4 {
        font-size: ${theme.font.sizes.xxlarge};
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

    section {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.text};
    }

    footer {
      display: flex;
      align-items: center;
      gap: ${theme.spacings.medium};

      div {
        display: flex;
        align-items: center;
        gap: ${theme.spacings.xxsmall};

        svg {
          color: ${theme.colors.label};
        }
      }
    }
  `}
`
