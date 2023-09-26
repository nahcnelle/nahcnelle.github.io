import classNames from 'classnames';
import Image from 'next/image';
import { FC, memo } from 'react';

import { aboutData, SectionId } from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const About: FC = memo(() => {
  const { profileImageSrc, description, aboutItems } = aboutData;
  return (
    <Section className="bg-gradient-to-b from-green-500 to-blue-600 relative flex h-screen w-full items-center justify-center" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-4', { 'md:grid-cols-4': !!profileImageSrc })}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex items-center justify-center md:justify-start">
            <div className="relative h-48 w-48 md:h-48 md:w-48">
              <Image alt="about-me-image" className="h-full w-full object-cover rounded-xl" src={profileImageSrc} />
              <div className="flex gap-x-4 text-neutral-100 justify-center pt-2">
                <Socials />
                <a
                  className={classNames(
                    'flex gap-x-2 rounded-full border-2 bg-none px-2 py-1 text-xs font-medium text-white ring-offset-gray-700/80 hover:bg-gray-400/80 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-xs', 'border-orange-500 ring-orange-500',
                  )}
                  href='/resume.pdf'
                  target="_blank"
                  rel="noopener noreferrer">
                  Resume
                </a>
              </div>
            </div>

          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6 mt-2 ml-2', { 'md:col-span-3': !!profileImageSrc })}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-4xl font-bold text-white">Ellen Chan</h2>
            <p className="prose prose-sm text-neutral-200 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({ label, text, Icon }, idx) => (
              <li className="col-span-1 flex  items-start gap-x-2" key={idx}>
                {Icon && <Icon className="h-5 w-5 text-white" />}
                <span className="text-sm font-bold text-white">{label}:</span>
                <span className=" text-sm text-neutral-200" style={{ whiteSpace: "pre-line" }}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section >
  );
});

About.displayName = 'About';
export default About;
