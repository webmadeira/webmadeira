import {
  FETCH_EVENTS,
  FETCH_EVENT_DETAILS,
  FETCH_PAST_EVENTS,
} from './types'

const event2018 = {
  id: 0,
  title: '{ "web development talks in Madeira" }',
  logo: 'https://i.imgur.com/sDqnWmE.png',
  date: new Date('2018-12-29'),
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam semper aliquam massa vel aliquam. Duis eleifend fermentum tortor eu pulvinar. Duis maximus mauris nec metus blandit aliquet. Nulla consequat massa a vehicula rutrum. Maecenas et eleifend purus. Aenean maximus ac sem sed mollis. Donec varius lobortis risus, eget bibendum dui vestibulum vel. Ut ullamcorper faucibus porttitor. Curabitur id imperdiet dolor.',
  talks: [
    { id: 0, description: '' },
    { id: 1, description: '' },
    { id: 2, description: '' },
    { id: 3, description: '' },
    { id: 4, description: '' },
    { id: 5, description: '' },
    { id: 6, description: '' },
    { id: 7, description: '' },
    { id: 8, description: '' },
    { id: 9, description: '' },
  ],
}

const getEvents = () => ({
  type: FETCH_EVENTS,
  payload: Promise.resolve({
    events: [
      event2018,
    ],
  }),
})

const getEventDetails = id => ({
  type: FETCH_EVENT_DETAILS,
  payload: Promise.resolve({
    id,
    ...event2018,
  }),
})

const getPastEvents = () => ({
  type: FETCH_PAST_EVENTS,
  payload: Promise.resolve({
    pastEvents: [
      {
        id: 0,
        name: 'WebMadeira 2016',
        path: 'http://webmadeira.herokuapp.com/',
      },
    ],
  }),
})

export {
  getEvents,
  getEventDetails,
  getPastEvents,
}