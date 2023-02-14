import Section from '@/components/Section';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row z-10 h-[75%] absolute">
        <div className="w-2/5 bg-[#CFFDE1]"></div>
        <div className="w-3/5 bg-white"></div>
      </div>
      <Section className="top-0 z-50">
        <div className="grid grid-cols-4 gap-10 md:gap-6 max-w-3xl m-auto">
          <div className="col-span-4 md:col-span-2 rounded-lg shadow-2xl bg-white py-10 px-8 text-center">
            <div className="mx-auto h-48 w-48 rounded-full relative">
              <Image
                priority
                fill
                className="object-cover rounded-full"
                src="/me.jpg"
                alt="Sergiu Frunza"
                title="Sergiu Frunza"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <p className="mt-6 text-3xl font-semibold leading-7 tracking-tight">
              Sergiu Frunza
            </p>
            <span className="flex justify-center items-center w-[50px] mx-auto border-b-2 border-orange-500 pt-4 mb-4"></span>
            <p className="text-xl leading-6 font-light">WEB DEVELOPER</p>
            <ul
              role="list"
              className="mt-6 flex justify-center items-center gap-x-6"
            >
              <li>
                <a href="#" className="hover:text-gray-700">
                  <span className="sr-only">Github</span>
                  <svg
                    className="h-6 w-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-700">
                  <span className="sr-only">LinkedIn</span>
                  <svg
                    className="h-5 w-5"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-span-4 md:col-span-2 flex flex-col gap-10 md:gap-0 justify-around">
            <h1 className="font-semibold text-5xl">Hello</h1>
            <p className="text-xl font-semibold">
              Here&apos;s who I am & what I do
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href="/resume"
                className="uppercase inline-flex justify-center rounded-md border border-transparent bg-orange-600 py-2 px-10 text-sm font-medium text-white shadow-sm hover:bg-orange-700"
              >
                Resume
              </Link>
              <Link
                href="/projects"
                className="uppercase inline-flex justify-center rounded-md border border-black py-2 px-10 text-sm font-medium shadow-sm hover:bg-orange-100"
              >
                Projects
              </Link>
            </div>
            <p>
              Hello, I&apos;m Sergiu, a Web Developer and Content Creator based
              in Boston. I have passion for creating innovative and engaging
              websites.
            </p>
            <p>
              I enjoy programming React applications, going hiking and playing
              soccer. I also enjoy tackling coding challenges, which help me to
              stay sharp on my skills and push myself to stay on top of the
              latest trends.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
