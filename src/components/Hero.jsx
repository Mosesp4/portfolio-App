import { styles } from "../styles";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";
import dev from "../assets/dev.png";
//import { motion } from "framer-motion";
// import Sphere from ".components/sphere";

const Hero = () => {
  return (
    <section
      className={`relative w-full h-screen flex flex-col justify-end mx-auto`}
    >
      <div
        className="text-center p-10  justify-end"
        style={{ marginTop: "-2rem" }}
      >
        <h1 className={`${styles.heroHeadText} text-white`}>
          Hi, I'm <span className="text-[#ff6600]">Moses</span>
        </h1>
        <h3 className="text-2xl py-2 md:text-3xl dark:text-white">
          FRONTEND & MERN-Stack Developer
        </h3>
        <div className="text-4xl flex justify-center mt- gap-5 py-3 text-gray-300 dark:text-gray-400">
          <a href="https://github.com/Mosesp4">
            <AiFillTwitterCircle />
          </a>
          <a href="https://www.linkedin.com/in/moses-echela-78845b260/">
            <AiFillLinkedin />
          </a>
        </div>
      </div>

      <div className="relative mx-auto bg-gradient-to-r from-white to-white rounded-full w-60 h-60 mt-2 md:h-96 md:w-96">
        <img
          src={dev}
          alt="hero image"
          className="w-full  object-contain rounded-full"
        />
      </div>
    </section>
  );
};

export default Hero;
