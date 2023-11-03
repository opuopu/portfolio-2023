import { useEffect, useRef, useState } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "../ChangingProgressProvider/ChangingProgressProvider";
import RadialSeparators from "../RadialSeparators/RadialSeparators";
const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const [skills, setskills] = useState([]);
  useEffect(() => {
    fetch("./skills.json")
      .then((res) => res.json())
      .then((data) => setskills(data));
  }, []);

  console.log(skills);
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          My Web Development Journey
          <br /> Crafting Digital Experiences
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Skills &</motion.b>{" "}
            Experience
          </h1>
        </div>
        <div className="title"></div>
      </motion.div>
      <motion.div className="listContainer skillsgrid" variants={variants}>
        {skills?.map((skill, index) => (
          <div
            key={index}
            style={{
              width: 100,
              height: 100,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ChangingProgressProvider values={[0, skill?.value]}>
              {(percentage) => (
                <CircularProgressbarWithChildren
                  strokeWidth={10}
                  styles={buildStyles({
                    pathTransition: "stroke-dashoffset 0.5s ease 0s",
                    strokeLinecap: "butt",
                  })}
                  value={percentage}
                  text={percentage}
                >
                  <RadialSeparators
                    count={12}
                    style={{
                      background: "#fff",
                      width: "2px",
                      // This needs to be equal to props.strokeWidth
                      height: `${10}%`,
                    }}
                  />
                </CircularProgressbarWithChildren>
              )}
            </ChangingProgressProvider>
            <h5
              style={{
                marginTop: "4px",
                fontSize: "18px",
                color: "white",
              }}
            >
              {skill?.text}
            </h5>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
