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
          I'm a versatile developer with expertise in frontend
          development and Solidity programming. I'm passionate about crafting
          engaging and user-friendly websites and web applications as i'm 
          well-versed in frameworks like React and Nextjs.
          Additionally, I have a keen interest in
          blockchain technology and have specialized in Solidity, enabling me to
          build decentralized applications (DApps) on Ethereum. However, I'm not
          limited to the blockchain world. I'm also open to working on exciting
          projects in the web2 space. <br/> Collaboration, problem-solving, and
          continuous learning are at the core of my approach, and I love to stay
          up-to-date with the latest tech trends. Let's collaborate and create
          something remarkable together, be it a cutting-edge DApp or a
          captivating web experience. Looking forward to exploring new
          possibilities with you! Feel free to get in touch, and let's bring
          your ideas to life!
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
