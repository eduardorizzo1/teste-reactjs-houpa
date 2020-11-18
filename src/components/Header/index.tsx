import React from 'react'
import { FiHeart, FiMenu, FiShoppingCart } from 'react-icons/fi'
import { BiSearch } from 'react-icons/bi'

import {
  Container,
  HeaderLeft,
  HeaderRight,
  FcContainer,
  InputSearch,
} from './styles'

const Header: React.FC = () => {
  return (
    <Container>
      <HeaderLeft>
        <FiMenu />
        <h4>Menu</h4>
      </HeaderLeft>

      <HeaderRight>
        <FcContainer>
          <BiSearch />
          <InputSearch>
            <input type="text" placeholder="Busca" />
          </InputSearch>
        </FcContainer>

        <FcContainer>
          <FiHeart />
          <h4>Meus favoritos</h4>
        </FcContainer>

        <FcContainer>
          <FiShoppingCart color="#652e95" />
          <h4>Meu carrinho</h4>
        </FcContainer>
      </HeaderRight>
    </Container>
  )
}

export default Header
