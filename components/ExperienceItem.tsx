"use client";

import React from 'react';
import { motion } from 'framer-motion';

// Define type for the props of the ExperienceItem component
interface ExperienceItemProps {
  timePeriod: string;
  companyName: string;
  role: string;
  description: string[];
  techUsed: string[];
}


const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};


const ExperienceItem: React.FC<ExperienceItemProps> = ({
    timePeriod,
    companyName,
    role,
    description,
    techUsed,
  }) => {
    return (
      <motion.div className="relative py-6" variants={itemVariants}>
        <div className="absolute top-0 left-0 ml-3 h-full w-1 bg-gray-700">
          <div className={`absolute left-[4px] top-0 -ml-2.5 mt-1 w-4 h-4 z-[10] rounded-full bg-white/90 ring-2 ring-gray-500 `}>{companyName==="Meedgo" && <span className={`z-[20] absolute rounded-full left-0 top-0 w-4 h-4 bg-green-600 animate-ping `}></span>}</div>
        </div>
  
        <div className="ml-10">
          <motion.div
            className="inline-block rounded-full bg-gray-800 px-4 py-1 text-sm font-medium text-green-400"
            variants={itemVariants}
          >
            {timePeriod}
          </motion.div>
          <motion.h2 className="mt-2 text-[20px] font-semibold text-white/90" variants={itemVariants}>
            {companyName}
          </motion.h2>
          <motion.p className="mt-1 text-[12px] text-gray-400" variants={itemVariants}>
            @{role}
          </motion.p>
          <motion.p className="mt-3 text-white/70 text-[14px] " variants={itemVariants}>
            {description.map((item,index)=>{
              return (<li>{item}</li>)
            })}
          </motion.p>
          <ul className="flex flex-wrap gap-2 mt-2 mb-3">
            {techUsed.map((tech, index) => (
              <li
                className="bg-white/10 px-3 py-1 text-[0.6rem] tracking-wider rounded-sm flex flex-wrap justify-center gap-2 text-xs text-white/90"
                key={index}
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    );
  };


export default ExperienceItem;