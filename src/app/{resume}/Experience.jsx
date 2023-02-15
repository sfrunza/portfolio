const exp = [
  {
    period: 'Sept 2018 - Oct 2020',
    position: 'Front End Developer',
    company: 'WellKnown Agency',
    location: 'Boston, MA',
    actions: [
      'Developed multiple marketing webpages.',
      'Optimized pages to increse performance',
      'Optimized pages for SEO',
    ],
  },
  {
    period: 'Oct 2017 - Feb 2018',
    position: 'Full Stack Developer',
    company: 'Launch Academy',
    location: 'Boston, MA',
    actions: [
      'Completed a 12 week 500+ hours course where I developed, tested, and deployed multiple full stack web applications using ReactJS and Rails.',
    ],
  },
  {
    period: 'May 2015 - Sep 2015',
    position: 'Front End Developer Intern.',
    company: '999.md',
    location: 'Chisinau, Moldova',
    actions: [
      'Worked on developing, maintaining and supporting web site category - car.',
      'Planned and developed fully functional prototypes using HTML5, CSS3, JavaScript/jQuery.',
    ],
  },
];

export default function Experience() {
  return (
    <div className="max-w-3xl m-auto flex flex-col gap-6">
      <p className="font-bold text-2xl">Experience</p>
      {exp.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg p-6 md:p-12 grid grid-cols-2"
          >
            <div className="flex flex-col gap-2">
              <p className="font-bold text-orange-500">{item.period}</p>
              <p className="uppercase font-light">{item.position}</p>
              <p className="text-sm">{item.company}</p>
              <p className="text-sm">{item.location}</p>
            </div>
            <ul>
              {item.actions.map((el) => {
                return (
                  <li key={el} className="list-disc font-light">
                    {el}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
