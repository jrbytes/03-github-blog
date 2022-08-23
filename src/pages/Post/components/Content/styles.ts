import styled, { css } from 'styled-components'

export const Content = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.large};
    width: ${theme.content.width};
    margin: ${theme.spacings.medium} auto;

    display: flex;
    flex-direction: column;
    gap: ${theme.spacings.small};

    a {
      color: ${theme.colors.blue};
      text-decoration: none;
    }

    pre {
      background-color: ${theme.colors.post};
      padding: ${theme.spacings.small};
      border-radius: ${theme.borderRadius.normal};
      font-size: ${theme.font.sizes.small};
    }

    ul {
      padding-left: ${theme.spacings.medium};
      li {
        margin-bottom: ${theme.spacings.small};
      }
    }

    img {
      width: 100%;
      text-align: center;
      margin: ${theme.spacings.medium} 0;
    }
  `}
`
