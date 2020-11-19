import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-bottom: 50px;
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

export const ProductList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`
