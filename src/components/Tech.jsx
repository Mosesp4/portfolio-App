import React, { useState } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleHover = (techName) => {
    setHoveredTech(techName);
  };

  const handleMouseLeave = () => {
    setHoveredTech(null);
  };

  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div
          className='w-28 h-28 relative'
          key={technology.name}
          onMouseEnter={() => handleHover(technology.name)}
          onMouseLeave={handleMouseLeave}
        >
          <BallCanvas icon={technology.icon} />
          {hoveredTech === technology.name && (
            <div className='absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center'>
              <p className='text-white font-bold text-sm text-orange-500'>
                {technology.name}
              </p>
              {/* <p className='text-white text-xs'>{technology.name}</p> */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
