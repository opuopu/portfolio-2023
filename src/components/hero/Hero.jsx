import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ChangingProgressProvider from "../ChangingProgressProvider/ChangingProgressProvider";
import "./hero.scss";
import { motion } from "framer-motion";
import "react-circular-progressbar/dist/styles.css";
import { useEffect, useState } from "react";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const handleDownloadResume = () => {
  // Replace 'your-resume-link.pdf' with the actual link to your PDF resume.
  const resumeLink =
    "https://drive.google.com/file/d/1HDRBkTfne50smyLQrqjk4_30Yl5Vas8T/view?usp=drive_link";

  const link = document.createElement("a");
  link.href = resumeLink;
  link.download =
    "https://drive.google.com/file/d/1HDRBkTfne50smyLQrqjk4_30Yl5Vas8T/view?usp=drive_link";
  link.click();
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Nur Mohammod Opu</motion.h2>
          <motion.h1 className="h1" variants={textVariants}>
            Full Stack Web Developer
          </motion.h1>
          <motion.p className="desc">
            A passionate web developer with a deep-rooted commitment to MERN
            technology. Over the past 1.5 years, I have dedicated myself to
            honing my skills and knowledge in web development, with a focus on
            building user-centric web applications. My aim is to contribute
            effectively to web development projects and grow continuously in
            this dynamic field.
          </motion.p>
          <motion.a
            className="motiona"
            href="https://drive.google.com/uc?export=download&id=1HDRBkTfne50smyLQrqjk4_30Yl5Vas8T"
            download="https://drive.google.com/uc?export=download&id=1HDRBkTfne50smyLQrqjk4_30Yl5Vas8T"
          >
            Get Resume
          </motion.a>
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Full Stack Developer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
