import React from 'react'
import { FiHeart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

import productImg from '../../assets/image-product.png'

import {
  ContainerProduct,
  ProductImgContainer,
  Favorite,
  ProductDescription,
} from './styles'

const ProductCard: React.FC = () => {
  return (
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

      <Link to="/purchase">
        <button>Comprar</button>
      </Link>
    </ContainerProduct>
  )
}

export default ProductCard
