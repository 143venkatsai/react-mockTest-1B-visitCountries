import styled from 'styled-components'

export const CountryItemContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
`
export const CountryName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
`

export const VisitButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #3b82f6;
  border: none;
  border-radius: 2px;
  padding: 6px 15px;
  outline: none;
  cursor: pointer;
`

export const HorizontalLine = styled.hr`
  width: 100%;
  background-color: #334155;
`
export const VisitLabel = styled.p`
  color: #94a3b8;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
`
