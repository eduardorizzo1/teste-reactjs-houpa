import React from 'react'

import avatarImg from '../../assets/avatar.png'

import { Container, AvatarImg, ContainerAvatar, ProductList } from './styles'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import ProductCard from '../ProductCard'

const ListHorizontal: React.FC = () => {
  return (
    <Container>
      <ContainerAvatar>
        <AvatarImg src={avatarImg} alt="avatar-img" />
        <h4>Madame Ristow</h4>
      </ContainerAvatar>

      <ProductList>
        <FiChevronLeft size={30} />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <FiChevronRight size={30} />
      </ProductList>
    </Container>
  )
}

export default ListHorizontal
