import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const TitleLink = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
  margin-bottom: 20px;

  h4 {
    font-size: 12px;
  }

  div {
    display: flex;
    flex-direction: row;
    color: #979797;
  }
`

export const ContainerPurchase = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`

export const PurchaseDescription = styled.div`
  width: 50%;
  padding: 10px 200px;

  display: flex;
  flex-direction: column;

  h5 {
    font-family: 'Roboto';
    color: #707070;
    font-size: 16px;
    margin-bottom: 11px;
  }

  h4 {
    font-family: 'Poppins';
    font-size: 20px;
    margin-bottom: 6px;
  }

  h6 {
    font-family: 'Roboto';
    font-size: 12px;
    color: #222222;
  }
`

export const Favorite = styled.div`
  display: flex;
  align-self: flex-end;
  position: absolute;
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #e16868;
  }
`

export const ImgContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;

  img {
    width: 100%;
  }
`
export const ProductImgDetails = styled.div`
  padding: 18px;

  h4 {
    font-family: 'Roboto';
    font-size: 14px;
    color: #222222;
    margin: 2px 0;
  }
`

export const ValueContainer = styled.div`
  margin-top: 17px;

  h4 {
    font-family: 'Poppins';
    font-size: 24px;
  }

  h6 {
    font-family: 'Roboto';
    font-size: 12px;
    color: #707070;
  }
`

export const SizeContainer = styled.div`
  margin-top: 17px;
`

export const SizeOptions = styled.div`
  display: flex;
  flex-direction: row;

  h6 {
    font-family: 'Roboto';
    font-size: 12px;
  }

  p {
    margin-top: 5px;
    font-family: 'Roboto';
    font-size: 14px;
    margin-right: 18px;
    padding: 6px;
    color: #707070;
    background-color: #e9e9e9;
    border-radius: 4px;
  }
`

export const QuantityContainer = styled.div`
  h6 {
    font-family: 'Roboto';
    font-size: 16px;
    color: #222222;
  }

  margin-top: 39px;
`

export const SelectQuantity = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  h6 {
    font-family: 'Roboto';
    font-size: 12px;
    padding: 16px;
  }

  select {
    background-color: #fff;
    border-radius: 4px;
    height: 40px;
    width: 80px;
    text-align-last: center;
    font-family: 'Poppins';
    font-size: 14px;

    option {
      text-align-last: center;
    }
  }
`

export const ButtonsContainer = styled.div`
  margin: 25px 0 50px 0;
`

export const ButtonBuy = styled.button`
  width: 100%;
  border-radius: 4px;
  background-color: #000;
  color: #fff;
  border: 0;
  height: 48px;
  margin-bottom: 10px;
  font-family: 'Roboto';
  font-size: 18px;
`

export const ButtonShoppingCart = styled.button`
  width: 100%;
  border-radius: 4px;
  background-color: #fff;
  color: #000;
  height: 48px;
  border: solid 1px #707070;
  font-family: 'Roboto';
  font-size: 18px;
`

export const ShippingContainer = styled.div`
  display: flex;
  flex-direction: column;

  h4 {
    font-family: 'Poppins';
    font-size: 20px;
  }

  h6 {
    font-family: 'Roboto';
    font-size: 14px;
  }

  small {
    font-family: 'Roboto';
    font-size: 12px;
    color: #222222;
    margin-top: 10px;
  }
`

export const ShippingInput = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
  width: 100%;

  input {
    border-radius: 4px;
    background-color: #fff;
    border: solid 1px #e9e9e9;
    height: 40px;
    padding: 6px 16px;
    width: 60%;
  }

  button {
    margin-left: 16px;
    border-radius: 4px;
    background-color: #000;
    border: 0;
    color: #fff;
    font-family: 'Roboto';
    font-size: 16px;
    padding: 10px 16px;
  }
`

export const SocialContainer = styled.div`
  margin-top: 50px;
`

export const SocialNetworks = styled.div`
  margin-top: 8px;

  svg {
    margin-right: 8px;
  }
`
