import React from 'react'

import productImg from '../../assets/image-product.png'
import avatarImg from '../../assets/avatar.png'

import {
  AvatarImg,
  ContainerAvatar,
  ContainerProduct,
  ProductDescription,
  Favorite,
  ProductImgContainer,
} from './styles'
import { FiHeart } from 'react-icons/fi'

const ListHorizontal: React.FC = () => {
  return (
    <>
      <ContainerAvatar>
        <AvatarImg src={avatarImg} alt="avatar-img" />
        <h4>Madame Ristow</h4>
      </ContainerAvatar>

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
    </>
  )
}

export default ListHorizontal
