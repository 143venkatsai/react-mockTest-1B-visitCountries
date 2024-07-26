import {
  CountryItemContainer,
  CountryName,
  VisitButton,
  HorizontalLine,
  VisitLabel,
} from './styledComponents'

const CountryItem = props => {
  const {countryDetails, visitCountry} = props
  const {id, name, isVisited} = countryDetails

  const onClickVisitCountry = () => {
    visitCountry(id)
  }

  return (
    <>
      <CountryItemContainer>
        <CountryName>{name}</CountryName>
        {isVisited ? (
          <VisitLabel>Visited</VisitLabel>
        ) : (
          <VisitButton type="button" onClick={onClickVisitCountry}>
            Visit
          </VisitButton>
        )}
      </CountryItemContainer>
      <HorizontalLine />
    </>
  )
}

export default CountryItem
