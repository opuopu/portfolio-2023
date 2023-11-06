import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const items = [
  {
    id: 1,
    title: "Tourdei.com",
    img: "./booking1.png",
    desc: "Created a tourism website using Next.js and Redux for the frontend, with Express.js and MongoDB (Mongoose) for the backend. The site enables tourists to search, book, and manage accommodations and packages, while also offering admin and super admin functionalities for efficient content and user management.",
    live: "https://dreamy-narwhal-1b29a1.netlify.app/",
    frontend: "https://github.com/opuopu/final-assignment-9-frontend",
    backend: "https://github.com/opuopu/tourdei.com-backend",
  },
  {
    id: 2,
    title: "Pc Mart",
    img: "./pc1.png",
    desc: "Developed PC Mart using React.js and Redux Toolkit with RTK Query for browsing PC accessories, building custom PCs, and implementing filtering. Next Auth is used for user authentication, and the backend employs Mongoose and Express.js for data management. This project offers a user-friendly e-commerce experience for PC enthusiasts.",
    live: "https://github.com/opuopu/tourdei.com-backend",
    frontend: "https://pc-builder-final.vercel.app/",
    backend: "https://pc-builder-final.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer " style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <a
                href={item?.live}
                target="_blank"
                style={{
                  padding: "6px 20px",
                  borderRadius: "4PX",
                  color: "black",
                  fontWeight: "500",
                  backgroundColor: "orange",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
                rel="noreferrer"
              >
                Live Site{" "}
                <span
                  style={{
                    marginTop: "8px",
                  }}
                >
                  <BsFillArrowRightCircleFill />
                </span>
              </a>
              <a
                href={item?.frontend}
                target="_blank"
                style={{
                  padding: "6px 20px",
                  borderRadius: "4PX",
                  color: "black",
                  fontWeight: "500",
                  backgroundColor: "orange",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
                rel="noreferrer"
              >
                Frontend{" "}
                <span
                  style={{
                    marginTop: "8px",
                  }}
                >
                  <BsFillArrowRightCircleFill />
                </span>
              </a>
              <a
                href={item?.backend}
                target="_blank"
                style={{
                  padding: "6px 20px",
                  borderRadius: "4PX",
                  color: "black",
                  fontWeight: "500",
                  backgroundColor: "orange",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
                rel="noreferrer"
              >
                Backend{" "}
                <span
                  style={{
                    marginTop: "8px",
                  }}
                >
                  <BsFillArrowRightCircleFill />
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
