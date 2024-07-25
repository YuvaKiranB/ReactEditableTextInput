import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #f5d0fe;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const TextCard = styled.div`
  background-color: #ffffff;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`

export const CardHeading = styled.h1`
  margin-top: 0px;
  font-family: roboto;
  font-size: 26px;
`

export const EditContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const TextInput = styled.input`
  border: 1px solid #cbd2d9;
  margin-right: 10px;
  padding: 8px;
  outline: none;
  font-family: roboto;
  color: #323f4b;
  font-size: 18px;
  border-radius: 4px;
`

export const Button = styled.button`
  padding: 11px;
  border-width: 0px;
  background-color: #d946ef;
  color: white;
  font-weight: 500;
  font-family: roboto;
  border-radius: 5px;
  padding-left: 15px;
  padding-right: 15px;
  cursor: pointer;
`

export const ParaContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const ParaText = styled.p`
  font-family: roboto;
  font-size: 18px;
  color: #323f4b;
  margin-right: 8px;
`
