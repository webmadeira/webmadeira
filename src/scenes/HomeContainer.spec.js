import React from 'react'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import HomeContainer from './HomeContainer'

const middlewares = []
const mockStore = configureStore(middlewares)

describe('HomeContainer component', () => {
  let mocks

  beforeEach(() => {
    mocks = {
      store: {
        event: {
          title: 'Test title',
          logo: 'Test logo',
          date: 'Test date',
          description: 'Test description',
          thankYouText: 'thankYouText',
          schedule: [{}, {}],
          sponsors: [{}],
          pastEvents: [
            {
              id: 0,
              name: 'Test event',
              path: 'http://test.url.com/',
            },
          ],
          location: {
            name: 'test name',
            address: 'test address',
            postCode: 'test post code',
          },
        },
        organization: {
          logo: 'logo path',
          social: [
            { id: 1, name: 'test social', path: '/testSocial' },
          ],
        },
        speaker: {
          speakers: [
            {
              id: 0,
              name: 'André Gonçalves',
              company: 'Freelancer',
              jobTitle: 'Web Dev Consultant',
              personalWebsite: 'https://github.com/andregoncalves',
              bwPhoto: 'https://avatars3.githubusercontent.com/u/1074?s=460&v=4',
              photo: 'https://avatars3.githubusercontent.com/u/1074?s=460&v=4',
            },
            {
              id: 1,
              name: 'Aurélio Pita',
              company: 'Blip',
              jobTitle: 'Front End Developer',
              jobWebsite: 'https://blip.pt/',
              personalWebsite: 'https://github.com/jaapaurelio',
              bwPhoto: 'https://avatars3.githubusercontent.com/u/2837728?s=460&v=4',
              photo: 'https://avatars3.githubusercontent.com/u/2837728?s=460&v=4',
            },
          ],
        },
      },
    }
  })

  it('must render properly', () => {
    const store = mockStore(mocks.store)
    const component = shallow(<HomeContainer store={store} />)

    expect(component).toMatchSnapshot()
  })

  it('must render properly with date', () => {
    const store = mockStore({
      ...mocks.store,
      event: {
        ...mocks.store.event,
        date: new Date('2018-08-10'),
      },
    })

    const component = shallow(<HomeContainer store={store} />)

    expect(component).toMatchSnapshot()
  })
})
