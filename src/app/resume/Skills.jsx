const skills = [
  'JavaScript (React.js)',
  'Redux',
  'Ruby on Rails',
  'HTML, CSS, Bootstrap',
  'PostgreSQL',
  'Tailwindcss',
  'Material UI',
  'AWS',
  'Unit Testing',
  'OOP, MVC ',
  'Git',
];

export default function Skills() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-3xl m-auto">
      <p className="font-bold text-2xl mb-6">Professional skillset</p>
      <ul className="grid grid-cols-2 gap-6">
        {skills.map((skill, i) => {
          return (
            <li
              className="col-span-2 md:col-span-1 flex gap-2 items-center"
              key={i}
            >
              <div className="w-3 h-3 bg-orange-500"></div>
              {skill}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
