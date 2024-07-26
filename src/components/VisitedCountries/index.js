import {
  VisitedItem,
  CountryImage,
  CountryNameSection,
  VisitName,
  RemoveButton,
} from './styledComponents'

const VisitedCountries = props => {
  const {countryDetails, removeCountry} = props
  const {imageUrl, name, id} = countryDetails

  const onClickRemoveCountry = () => {
    removeCountry(id)
  }

  return (
    <VisitedItem>
      <CountryImage src={imageUrl} alt="thumbnail" />
      <CountryNameSection>
        <VisitName>{name}</VisitName>
        <RemoveButton type="button" onClick={onClickRemoveCountry}>
          Remove
        </RemoveButton>
      </CountryNameSection>
    </VisitedItem>
  )
}

export default VisitedCountries
