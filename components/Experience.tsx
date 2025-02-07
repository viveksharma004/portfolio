"use client";

import ExperienceItem from "./ExperienceItem"
import SectionHeading from "./section-heading";
import { motion } from "framer-motion"


const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const achievementStrings: string[] = [
  'Assisted in development of the front end of a web application using ReactJs as a javascript library, which helped the company to increase its online presence by 37%.',
  'Successfully integrated Google Firebase to manage user inputted data and authenticate users across web applications.',
  'Worked effectively with cross-functional teams using Git for version control, ensuring seamless collaboration and efficient task management.',
];

const achievementStrings2: string[] = [
  'Built a daily news platform for the client to upload and let the viewer explore the nearby happening. This helped the client to expand their reach by 43% in the era of online world.',
  'Developed a platform to host cricket tournaments online, and keep track of live scores.',
  'Built web apps that made hosting easier for clients, utilizing my technical skills to create robust and efficient solutions.',
];


export default function Experience() {

  return (
    <section id="experience" className=" scroll-mt-28 mb-[10rem]">
      <div
        className=""
        
      >
        <SectionHeading>Experience</SectionHeading>
        <section className="max-w-[50rem]  rounded-lg  sm:pr-8  sm:h-[20rem] transition text-white bg-black">


          <motion.div
            className="max-w-3xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <ExperienceItem
              timePeriod="Nov 2024 - Present"
              companyName="Meedgo"
              role="Frontend Developer Intern"
              description={achievementStrings}
              techUsed={[
                'HTML',
                'CSS',
                'JavaScript',
                'ReactJS',
                'Tailwind',
                'FramerMotion',
                'Redux',
              ]}
            />

            <ExperienceItem
              timePeriod="May 2024 - Nov 2024"
              companyName="Freelance"
              role="Full Stack Developer"
              description={achievementStrings2}
              techUsed={[
                'ReactJs',
                'Tailwind',
                'FramerMotion',
                'Redux',
                'Nodejs',
                'Jwt',
                'Bcrypt',
                'Cloudinary',
                'Mongodb',
              ]} />
          </motion.div>
          <p className="text-white/50">Start</p>
        </section>
      </div>

    </section>
  );
}
