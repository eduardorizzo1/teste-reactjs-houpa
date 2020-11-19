import React from 'react'
import { Link } from 'react-router-dom'

import { Container, TitleLink } from './style'

import imgProduct from '../../assets/product-top@2x.png'

const Purchase: React.FC = () => {
  return (
    <Container>
      <TitleLink>
        <Link to="/" style={{ textDecoration: 'none', marginRight: '32px' }}>
          <h4>Voltar</h4>
        </Link>

        <div>
          <h4>Home&nbsp;{'>'}&nbsp;</h4>
          <h4>Madame Ristow&nbsp;{'>'}&nbsp;</h4>
          <h4>Vestidos</h4>
        </div>
      </TitleLink>

      <img src={imgProduct} alt="img-product" />
    </Container>
  )
}

export default Purchase
