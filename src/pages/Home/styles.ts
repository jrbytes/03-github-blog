import styled, { css } from 'styled-components'
import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'

export const Header = styled.header`
  ${({ theme }) => css`
    background: url(${effectLeft}) left center no-repeat,
      url(${effectRight}) right center no-repeat,
      linear-gradient(to bottom, ${theme.colors.input}, ${theme.colors.profile});
    box-shadow: 0px 0px 85px rgba(0, 0, 0, 0.3);
    height: 296px;

    display: flex;
    justify-content: center;

    img {
      margin-top: 64px;
      height: 98px;
    }
  `}
`
