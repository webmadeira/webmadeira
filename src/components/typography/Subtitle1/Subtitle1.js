import styled from 'styled-components'

const Subtitle2 = styled.h4`
  font-family: ${props => props.theme.fontFamily('primary')};
  font-size: ${props => props.theme.textSetting('md').fontSize};
  line-height: ${props => props.theme.textSetting('md').lineHeight};
  font-weight: ${props => props.theme.weight('bold')};
`


export default Subtitle2
