// eslint-disable-next-line no-unused-vars
import * as motion from "motion/react-client";

const FloatingClouds = ({ size, top, left, delay }) => {
  return (
    <motion.div
      className={`absolute ${size} opacity-50`}
      style={{
        top,
        left,
        borderRadius: "50%",
        background: "radial-gradient(circle at 40% 40%, #4ea1a1, #16697a)",
        filter: "blur(18px)",
        mixBlendMode: "screen"
      }}
      initial={{ opacity: 0, scale: 0.7 }}
      animate={{
        opacity: [0.4, 0.7, 0.4],
        scale: [0.7, 1.1, 0.7],
        y: ["0%", "-15%", "0%"],
        x: ["0%", "20%", "-20%", "0%"],
        rotate: [0, 90, 180, 270, 360],
      }}
      transition={{
        duration: 20,
        ease: "easeInOut",
        repeat: Infinity,
        delay,
      }}
    />
  );
};

export default FloatingClouds;
