import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-top: -80px;

    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${theme.content.width}) {
      padding: 0 ${theme.spacings.small};
    }
  `}
`

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.profile};
    border-radius: ${theme.borderRadius.large};
    box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
    width: ${theme.content.width};

    display: flex;
    padding: ${theme.spacings.large};
    gap: ${theme.spacings.large};

    img {
      height: 148px;
      border-radius: ${theme.borderRadius.large};
    }

    @media (max-width: ${theme.content.width}) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: ${theme.spacings.xsmall};
    }
  `}
`

export const Info = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: ${theme.spacings.xsmall};

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
      flex-grow: 1;
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

    @media (max-width: ${theme.content.width}) {
      footer {
        flex-direction: column;
        align-items: flex-start;
        gap: ${theme.spacings.xsmall};
      }
    }
  `}
`
