import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: ${theme.content.width};

    margin-top: ${theme.grid.gutter};
    margin-left: auto;
    margin-right: auto;
  `}
`

export const Header = styled.header`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    justify-content: space-between;

    font-size: ${theme.font.sizes.large};
    color: ${theme.colors.span};

    span {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Input = styled.input`
  ${({ theme }) => css`
    background-color: ${theme.colors.input};
    width: 100%;
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    margin-top: ${theme.spacings.xxsmall};
    border: 1px solid ${theme.colors.border};
    border-radius: ${theme.borderRadius.normal};
    color: ${theme.colors.text};

    ::placeholder {
      color: ${theme.colors.text};
    }
  `}
`
