import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Opus Portfolio
        </motion.span>
        <div className="social">
          <a
            href="https://www.facebook.com/nurmdopu.opu/"
            target="_blank"
            rel="noreferrer"
          >
            <img src="/facebook.png" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/in/md-nur-mohammod-2b8a55226/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              style={{
                borderRadius: "2px",
              }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToJQcThrVQw9sab54dutfCQcfwmQ4D0HbrcQ&usqp=CAU"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
