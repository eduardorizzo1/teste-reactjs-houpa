import styled from 'styled-components'

export const Container = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 60px;
  padding: 0 12em;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-size: 16px;
    font-family: 'Roboto', serif;
    color: #707070;
    margin-right: 28px;
  }
`

export const HeaderLeft = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    height: 22px;
    width: 22px;
    margin-right: 8px;
  }
`

export const HeaderRight = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  svg {
    height: 20px;
    width: 20px;
    color: #707070;

    margin-right: 8px;
    margin-left: 8px;
  }
`

export const InputSearch = styled.input`
  border: 0;
  border-bottom: 1px solid #838c91;
  width: 75%;
  ::placeholder {
    color: #838c91;
    font-size: 14px;
  }
`

export const FcContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
