import React from 'react'

import productImg from '../../assets/image-product.png'
import avatarImg from '../../assets/avatar.png'

import {
  Container,
  AvatarImg,
  ContainerAvatar,
  ContainerProduct,
  ProductDescription,
  Favorite,
  ProductImgContainer,
  ProductList,
} from './styles'
import { FiChevronLeft, FiChevronRight, FiHeart } from 'react-icons/fi'

const ListHorizontal: React.FC = () => {
  return (
    <Container>
      <ContainerAvatar>
        <AvatarImg src={avatarImg} alt="avatar-img" />
        <h4>Madame Ristow</h4>
      </ContainerAvatar>

      <ProductList>
        <FiChevronLeft size={30} />
        <ContainerProduct>
          <ProductImgContainer>
            <img src={productImg} alt="product-img" />
            <Favorite>
              <FiHeart />
            </Favorite>
          </ProductImgContainer>

          <ProductDescription>
            <h4>
              Blusa Feminina Básica <br /> Manga Curta Marisa
            </h4>
          </ProductDescription>

          <h3>R$ 57,00</h3>

          <button>Comprar</button>
        </ContainerProduct>
        <FiChevronRight size={30} />
      </ProductList>
    </Container>
  )
}

export default ListHorizontal
