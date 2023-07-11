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
          className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] "
          style={{}}
        >
          As an entry-level frontend and solidity developer, I am passionate
          about blockchain technology and AI, and I bring a strong foundation in
          HTML5, CSS, and JavaScript. I have hands-on experience with popular
          libraries and frameworks like React JS and NextJs, allowing me to
          create responsive and dynamic web applications. Additionally, I am
          proficient in CSS libraries such as Tailwind, Material UI, and Chakra
          UI, enabling me to design modern and visually appealing user
          interfaces. Having worked with design tools like Figma and Adobe
          Illustrator, I possess a keen eye for aesthetics and user-centric
          design principles. I am a quick learner, eager to expand my knowledge
          and skills in this ever-evolving field. With a strong attention to
          detail and a problem-solving mindset, I strive to deliver efficient,
          scalable, and high-quality code. As an individual committed to
          continuous growth, I am open to exploring opportunities that align
          with my expertise. I am eager to contribute to innovative projects and
          collaborate with diverse teams to drive impactful results. If you are
          seeking a dedicated and motivated developer with a passion for
          cutting-edge technologies, I am ready to make a meaningful
          contribution to your organization.
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
