import styled from 'styled-components'

export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #161624;
  padding: 20px 100px;
  min-height: 100vh;
`

export const CountriesHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
`
export const CountriesListContainer = styled.ul`
  padding-left: 0px;
  width: 100%;
  background-color: #1f1f2f;
  border: 1px solid #334155;
  border-radius: 6px;
  max-height: 50vh;
  overflow: auto;
`
export const VisitedHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: normal;
  color: #ffffff;
`

export const VisitedCountriesList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 0px;
  padding-bottom: 40px;
`

export const NoCountries = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #f1f5f9;
  text-align: center;
  margin-top: 40px;
`
