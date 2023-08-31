import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center py-20">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Jain.
            <br className="hidden lg:inline-block" />I am a Software Developer
          </h1>
          <p className="mb-8 leading-relaxed justify-center">
            A web developer with 3.3 years of experience working in the Software industry currently pursuing post-graduation in Computer Software and Database Development at Lambton College Mississauga.
          </p>
          <div className="flex space-x-6 py-1">
          <SocialIcon bgColor = "white" url="https://www.linkedin.com/in/jain-joseph-36b22114b/" />
          <SocialIcon bgColor = "white" url="https://github.com/Jain-Joseph1996" />
          <SocialIcon bgColor = "white" url="mailto:jainjosephmuttar@gmail.com" network="email" />
          </div>
          <div className="flex justify-center py-5">
            <a
              href="#contact"
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="frontimg1.svg"
          />
        </div>
      </div>
    </section>
  );
}
