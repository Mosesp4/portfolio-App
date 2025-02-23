import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

const SkillLevel = () => {
  const skills = [
    { name: "JavaScript", level: "Expert", progress: "90%" },
    { name: "TypeScript", level: "Beginner", progress: "70%" },
    { name: "React", level: "Expert", progress: "90%" },
    { name: "HTML5", level: "Intermediate", progress: "80%" },
    { name: "CSS", level: "Intermediate", progress: "80%" },
    { name: "Git", level: "Intermediate", progress: "90%" },
    { name: "Material UI", level: "Intermediate", progress: "60%" },
    { name: "Tailwind", level: "Intermediate", progress: "90%" },
    { name: "MongoDB", level: "Intermediate", progress: "70%" },
    { name: "REST-API", level: "Intermediate", progress: "90%" },
    { name: "GraphQL", level: "Intermediate", progress: "70%" },
    { name: "Solidity", level: "Beginner", progress: "50%" },
    { name: "Hardhat", level: "Beginner", progress: "50%" },
    { name: "Ethers", level: "Beginner", progress: "50%" },
    { name: "Next.js", level: "Intermediate", progress: "80%" },
    { name: "Redux", level: "Beginner", progress: "70%" },
    { name: "Context-API", level: "Beginner", progress: "80%" },
    { name: "Figma", level: "Intermediate", progress: "70%" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="container mx-auto mt-3">
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Skill Experience.
        </h2>
        <p className={`${styles.sectionSubText} text-center`}>
          Technologies and languages i have worked with so far
        </p>
        <div
          className="h-60 overflow-x-hidden grid grid-cols-1 sm:grid-cols-2  
      gap-4 mx-5 my-8 sm:h-50  overflow-y-scroll"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative h-8 bg-orange-400 rounded-full justify-center"
              initial={{ width: 100 }}
              animate={{ width: skill.progress }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute top-0 left-0 h-full bg-blue-500" />

              <div className="absolute top-0 left-0 flex items-center h-full px-4 text-white">
                <span className="font-semibold">{skill.name}</span>
                {/* <span className="ml-2 text-xs">{skill.level}</span> */}
                <span className="ml-2 text-xs">{skill.progress}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(SkillLevel, "skills");
