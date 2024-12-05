import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} style={{ textAlign: "center" }}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <div className="mt-4 flex justify-center">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
          style={{}}
        >
          I am a skilled Frontend and MERN-Stack Developer with over 3 years of
          experience, specializing in building intuitive, scalable user
          interfaces and contributing to DeFi blockchain projects, healthcare
          innovations, and energy management solutions. Proficient in React.js,
          Next.js, TypeScript, as well as other Modern web technology, I’ve
          improved user engagement by up to 40% and reduced app load times by
          50%. My blockchain contributions, including DApp development and
          wallet integrations, have driven 20% user adoption growth. Having
          worked remotely with global company & startups like GRANDIDA, ENZUM &
          WeCovr, I thrive in collaborative environments, achieving measurable
          successes such as 40% increases in product marketing successes and
          improving user satisfaction ratings by 25%. <br /> <br />
          I’m open to exciting opportunities where I can transform ideas into
          seamless user experiences, whether as a full-time team member or on a
          part-time contract, based on project demands. If you’re looking for a
          dedicated professional to deliver measurable results and create
          impactful solutions, feel free to reach out. Let’s build something
          incredible together!
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
