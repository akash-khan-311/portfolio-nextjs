"use client"
import { TypeAnimation } from "react-type-animation";
const TypingAnimation = () => {
    return (
        <>
            <span className="text-[#F31559] ">
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed once, initially
                "Md Akash Khan",
                2000,
                "Junior React JS Developer",
                2000,
                "Front End Developer",
                2000,
                "Junior MERN Stack Developer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
            />
          </span>
        </>
    );
};

export default TypingAnimation;