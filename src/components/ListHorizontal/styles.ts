import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`

export const AvatarImg = styled.img`
  width: 150px;
  height: 150px;

  margin-right: 20px;
`

export const ContainerAvatar = styled.div`
  padding: 14px 0;
  display: flex;
  flex-direction: row;
  align-items: center;

  > h4 {
    font-family: 'Poppins';
    font-size: 24px;
  }
`

export const ContainerProduct = styled.div`
  height: 565px;
  border: solid 1px #e9e9e9;

  text-align: center;

  img {
    height: 413px;
  }

  h3 {
    font-family: 'Roboto';
    font-weight: 700;
    font-size: 20px;
    color: #707070;
  }

  button {
    background-color: #000;
    color: #fff;

    width: 94px;
    height: 40px;
    margin: 10px 0;

    border: 0;
    border-radius: 5px;
  }
`

export const ProductDescription = styled.div`
  padding: 10px 36px;
  text-align: center;

  display: flex;

  h4 {
    font-family: 'Roboto';
    font-size: 16px;
  }
`

export const Favorite = styled.div`
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

export const ProductImgContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
`
