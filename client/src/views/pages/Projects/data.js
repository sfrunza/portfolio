import moving from 'src/assets/img/insight.png'
import weather from 'src/assets/img/weather.png'

export const news = [
  {
    cover: {
      src: `${moving}`,
      srcSet: `${moving}`,
    },
    title: 'InsightMoving',
    description: 'A Moving Company website with full Customer Relationship Management.',
    href: 'https://www.insightmoving.com/',
    tech: 'React.js, Rails5, PostgreSQL, Google Maps API, AWS S3'
  },
  {
    cover: {
      src: `${weather}`,
      srcSet: `${weather}`,
    },
    title: 'Weather Review',
    description: 'The Weather Review App provides users a place to add reviews to cities based on the particular city\'s weather.',
    href: 'https://weather-review.herokuapp.com/',
    tech: 'RoR, React.js, JQuery, PostgreSQL, Devise'
  },
];
