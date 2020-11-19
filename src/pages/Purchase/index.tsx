import React from 'react'
import { Link } from 'react-router-dom'
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaPinterestSquare,
  FaWhatsappSquare,
} from 'react-icons/fa'

import imgProduct from '../../assets/product-top@2x.png'
import {
  Container,
  Favorite,
  TitleLink,
  TitleWithFavorite,
  ContainerPurchase,
  PurchaseDescription,
  ImgContainer,
  ProductImgDetails,
  ValueContainer,
  SizeContainer,
  SizeOptions,
  QuantityContainer,
  SelectQuantity,
  ButtonsContainer,
  ButtonBuy,
  ButtonShoppingCart,
  ShippingContainer,
  ShippingInput,
  SocialContainer,
  SocialNetworks,
} from './style'
import { FiHeart } from 'react-icons/fi'

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

      <ContainerPurchase>
        <ImgContainer>
          <img src={imgProduct} alt="img-product" />
          <ProductImgDetails>
            <h4>- Camiseta masculina</h4>
            <h4>- Manga curta</h4>
            <h4>- Gola redonda</h4>
            <h4>- Estampa super herói escudo capitão</h4>
            <h4>- Tecido: meia malha</h4>
            <h4>- Composição: 100% algodão</h4>
            <h4>- Modelo veste tamanho: M</h4>
          </ProductImgDetails>
        </ImgContainer>

        <PurchaseDescription>
          <TitleWithFavorite>
            <h5>Vestidos</h5>
            <Favorite>
              <FiHeart />
            </Favorite>
          </TitleWithFavorite>
          <h4>Vestido curto</h4>
          <h6>
            Produzido e entregue por Madame Ristow <br /> Vendido por: Pantheon
          </h6>

          <ValueContainer>
            <h4>R$ 46,13</h4>
            <h6>ou até 5x de R$ 9,03 | Atacado mínimo: 6 peças</h6>
          </ValueContainer>

          <SizeContainer>
            <h6>Tamanho</h6>
            <SizeOptions>
              <p>P</p>
              <p>M</p>
              <p>G</p>
              <p>GG</p>
            </SizeOptions>
          </SizeContainer>

          <QuantityContainer>
            <h6>Quantidade</h6>

            <SelectQuantity>
              <select>
                <option>1</option>
              </select>
              <h6>Avise-me quando chegar</h6>
            </SelectQuantity>
          </QuantityContainer>

          <ButtonsContainer>
            <ButtonBuy>Comprar</ButtonBuy>
            <ButtonShoppingCart>Adicionar ao Carrinho</ButtonShoppingCart>
          </ButtonsContainer>

          <ShippingContainer>
            <h4>Frete</h4>
            <h6>Calcule o frete estimado para sua região</h6>

            <ShippingInput>
              <input type="text" placeholder="CEP" />
              <button>Calcular</button>
            </ShippingInput>

            <small>Não sei meu cep</small>
          </ShippingContainer>

          <SocialContainer>
            <h6>Compartilhar</h6>

            <SocialNetworks>
              <FaWhatsappSquare size={20} />
              <FaPinterestSquare size={20} />
              <FaInstagramSquare size={20} />
              <FaFacebookSquare size={20} />
              <FaLinkedin size={20} />
            </SocialNetworks>
          </SocialContainer>
        </PurchaseDescription>
      </ContainerPurchase>
    </Container>
  )
}

export default Purchase
