const edu = [
  {
    period: '2018',
    institute: 'Microsoft',
    degree: 'Introduction to ReactJS Certification',
    location: 'edx.org',
    actions: [
      'JSX and React Components',
      'State, Life Cycle, and Event Handlers',
      'Lists and Forms',
    ],
  },
  {
    period: '2017 - 2018',
    institute: 'Launch Academy',
    degree: 'Full Stack Web Developer Certification',
    location: 'Boston, MA',
    actions: [
      'Ruby',
      'Ruby on Rails',
      'React.js',
      'Object-Oriented Programming and Design',
      'MVC design pattern',
      'Pair programming',
    ],
  },
  {
    period: '2012 - 2015',
    institute: 'State University of Moldova',
    degree: 'BS in Computer Science',
    location: 'Chisinau, Moldova',
    actions: [
      'Introduction To Computer Science',
      'Algorithms and Data Structures',
      'HTML/CSS/JS',
      'Assembly language',
      'Computer architecture',
    ],
  },
];

export default function Education() {
  return (
    <div className="max-w-3xl m-auto flex flex-col gap-6 py-12">
      <p className="font-bold text-2xl">Education</p>
      {edu.map((item, i) => {
        return (
          <div
            key={i}
            className="bg-white shadow-lg rounded-lg p-6 md:p-12 grid grid-cols-2"
          >
            <div className="flex flex-col gap-2">
              <p className="font-bold text-orange-500">{item.period}</p>
              <p className="uppercase font-light">{item.institute}</p>
              <p className="text-sm">{item.degree}</p>
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
