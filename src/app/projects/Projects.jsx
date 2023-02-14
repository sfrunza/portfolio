import Image from 'next/image';

const projects = [
  {
    title: 'Moving CRM',
    href: '#',
    description: 'CRM for moving companies',
    tech: ['React.js', 'Rails7', 'PostgreSQL', 'Google Maps API', 'AWS', 'S3'],
    imageUrl: '/crm.png',
  },
  {
    title: 'Tailor Made Boston',
    href: 'https://tailormadeboston.com',
    description: 'Website for a local Tailor Shop.',
    tech: ['React.js', 'Material UI', 'Firebase'],
    imageUrl: '/tailor.png',
  },
  {
    title: 'Brave Movers Boston',
    href: 'https://www.bravemovers.com/',
    description: 'A website for a Moving Company.',
    tech: ['React.js', 'Rails5', 'PostgreSQL', 'Google Maps API', 'AWS', 'S3'],
    imageUrl: '/moving.png',
  },
  {
    title: 'Phoenix Moving Boston',
    href: 'https://www.gophoenixmoving.com/',
    description: 'A website for a Moving Company.',
    tech: ['Next.js', 'Tailwindcss'],
    imageUrl: '/moving2.png',
  },
  {
    title: 'Work Time Duration Calculator',
    href: 'https://timecalc-app-b0fc0.web.app',
    description: 'Labour time calculator and the total amount for movers.',
    tech: ['React.js', 'Firebase'],
    imageUrl: '/calc.png',
  },
];

export default function Projects() {
  return (
    <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex flex-col overflow-hidden rounded-lg shadow-lg"
        >
          <div className="flex-shrink-0 h-48 w-full relative">
            <Image
              className="object-cover"
              priority
              fill
              src={project.imageUrl}
              alt={project.title}
              sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white p-6">
            <div className="flex-1">
              <a
                className="mt-2 block"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <p className="text-xl font-semibold text-gray-900">
                  {project.title}
                </p>
                <p className="mt-3 text-base text-gray-500">
                  {project.description}
                </p>
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-1 items-center">
              {project.tech.map((item, i) => {
                return (
                  <span
                    key={i}
                    className="inline-block flex-shrink-0 rounded-full bg-[#CFFDE1] px-2 py-0.5 text-xs font-medium text-green-800"
                  >
                    {item}
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
