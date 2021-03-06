import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import AppContainer from '../../../components/AppContainer/AppContainer'
import { Body2 } from '../../../components/typography'
import '../../../assets/img/digital-mountain.svg'
import CtaButtons from '../CtaButtons/CtaButtons'

const Root = styled.div`
  background-color: ${props => props.theme.color()};
  background-image: url(/images/digital-mountain.svg);
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
`

const Container = styled.div`
  padding-top: 35%;
  padding-bottom: 5%;

  ${({ theme }) => theme.mixins.mediaQuery.tablet`
    padding-top: 45%;
  `};
`

const Description = styled(Body2)`
  text-align: justify;
  color: ${props => props.theme.color('neutral', 'bright')};
`

const EventDescription = ({ description, children, registrationLink }) => (
  <Root>
    <CtaButtons registrationLink={registrationLink} />
    <AppContainer>
      <Container>
        <Description>{description}</Description>
        {children}
      </Container>
    </AppContainer>
  </Root>
)

EventDescription.propTypes = {
  description: PropTypes.string.isRequired,
  registrationLink: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default EventDescription
