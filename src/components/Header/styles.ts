import styled from 'styled-components'
import headerBg from '../../assets/headerBg.png'

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBg}) no-repeat center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 5rem;
  }
`
