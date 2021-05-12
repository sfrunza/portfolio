import moving from "src/assets/img/insight.png";
import weather from "src/assets/img/weather.png";
import tailor from "src/assets/img/tailor.png";
import time from "src/assets/img/time.png";

export const news = [
  {
    cover: {
      src: `${time}`,
      srcSet: `${time}`
    },
    title: "Time Calculator",
    description: "Labour time calculator and the total amount.",
    href: "https://timecalc-app-b0fc0.web.app",
    tech: "React.js"
  },
  {
    cover: {
      src: `${tailor}`,
      srcSet: `${tailor}`
    },
    title: "Tailor Made",
    description: "Website for a local Tailor Shop.",
    href: "https://tailormadeboston.com/",
    tech: "React.js, Material UI, Firebase"
  },
  {
    cover: {
      src: `${moving}`,
      srcSet: `${moving}`
    },
    title: "InsightMoving",
    description:
      "A Moving Company website with full Customer Relationship Management.",
    href: "https://www.insightmoving.com/",
    tech: "React.js, Rails5, PostgreSQL, Google Maps API, AWS S3"
  },
  {
    cover: {
      src: `${weather}`,
      srcSet: `${weather}`
    },
    title: "Weather Review",
    description:
      "The Weather Review App provides users a place to add reviews to cities based on the particular city's weather.",
    href: "https://weather-review.herokuapp.com/",
    tech: "RoR, React.js, JQuery, PostgreSQL, Devise"
  }
];
