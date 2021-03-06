import { FETCH_SPEAKERS } from './types'

const getSpeakers = year => ({ // eslint-disable-line
  type: FETCH_SPEAKERS,
  payload: Promise.resolve({
    speakers: [
      {
        id: 0,
        name: 'André Gonçalves',
        company: 'Freelancer',
        jobTitle: 'Web Dev Consultant',
        personalWebsite: 'https://github.com/andregoncalves',
        bwPhoto: 'https://i.imgur.com/gyBufxF.jpg',
        photo: 'https://i.imgur.com/O6fFiDc.jpg',
      },
      {
        id: 1,
        name: 'Aurélio Pita',
        company: 'Blip',
        jobTitle: 'Front End Developer',
        jobWebsite: 'https://blip.pt/',
        personalWebsite: 'https://github.com/jaapaurelio',
        bwPhoto: 'https://i.imgur.com/w55a7KY.jpg',
        photo: 'https://i.imgur.com/D3FGiuS.jpg',
      },
      {
        id: 2,
        name: 'Cristian Gonçalves',
        company: 'Asseco PST',
        jobTitle: 'Software engineer',
        jobWebsite: 'https://pst.asseco.com/',
        personalWebsite: 'https://github.com/crisgoncalves',
        bwPhoto: 'https://i.imgur.com/IQpX7mf.png',
        photo: 'https://i.imgur.com/ENkOe1l.png',
      },
      {
        id: 4,
        name: 'Paulo Caldeira',
        company: 'Curve Ltd',
        jobTitle: 'FullStack Developer',
        jobWebsite: 'https://www.imaginecurve.com/',
        personalWebsite: 'https://github.com/paulocaldeira17',
        bwPhoto: 'https://i.imgur.com/WmuT3rA.jpg',
        photo: 'https://i.imgur.com/K84qXQd.jpg',
      },
      {
        id: 5,
        name: 'Pedro Teixeira',
        company: 'Protocol Labs',
        jobTitle: 'Software Engineer',
        jobWebsite: 'https://protocol.ai/',
        personalWebsite: 'https://github.com/pgte',
        bwPhoto: 'https://i.imgur.com/zLPnIHB.jpg',
        photo: 'https://i.imgur.com/UAxQGnF.jpg',
      },
      {
        id: 6,
        name: 'Rodolfo Gonçalves',
        company: 'Blip',
        jobTitle: 'Front End Developer',
        jobWebsite: 'https://blip.pt/',
        personalWebsite: 'http://www.orodolfo.com/',
        bwPhoto: 'https://i.imgur.com/1nhU1sl.jpg',
        photo: 'https://i.imgur.com/5JvLbic.jpg',
      },
    ],
  }),
})

export { getSpeakers } // eslint-disable-line import/prefer-default-export
