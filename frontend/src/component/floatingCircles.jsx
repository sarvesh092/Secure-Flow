// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client"

const FloatingCircles = ({ color, size, top, left, delay }) => {
  return (
    <motion.div
      className={`absolute rounded-full ${color} ${size} opacity-6 blur-lg`}
      initial={{ y: "0%", x: "0%" }}
      style={{ top, left }}
      animate={{
        y: ["0%", "100%", "0%"],
        x: ["0%", "100%", "0%"],
        rotate: [0, 360],
      }}
      transition={{
        duration: 20,
        ease: "linear",
        repeat: Infinity,
        delay,
      }}
      //   aria-hidden="true"
    />
  );
};

export default FloatingCircles;
