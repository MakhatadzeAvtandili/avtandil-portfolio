import { motion } from "framer-motion";

const preloaderVariants = {
  initial: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

const svgVariants = {
  start: {
    opacity: 0,
    pathLength: 0,
  },
  end: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1.2,
      ease: "easeInOut",
      delay: 0.5,
    },
  },
};

const loaderVariants = {
  animate: {
    rotate: [0, 360],
    scale: [1, 1.2, 1],
    transition: {
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatDelay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.5,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const Preloader = ({ isLoading }) => {
  return (
    <motion.div
      variants={preloaderVariants}
      initial="initial"
      exit="exit"
      className="fixed inset-0 z-9999 flex items-center justify-center bg-background"
    >
      <div className="relative w-48 h-48">
        {!isLoading ? (
          <motion.svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            className="absolute inset-0 m-auto text-primary"
            initial="start"
            animate="end"
          >
            <motion.path
              d="M 20 80 L 50 20 L 80 80 M 35 60 L 65 60"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              variants={svgVariants}
            />
            <motion.path
              d="M 85 80 L 85 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
              variants={svgVariants}
            />
          </motion.svg>
        ) : (
          <motion.div
            variants={loaderVariants}
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <span className="absolute w-1/2 h-1 bg-primary top-1/2 left-0 transform -translate-y-1/2"></span>
            <span className="absolute w-1/2 h-1 bg-primary top-1/2 right-0 transform -translate-y-1/2"></span>
            <span className="absolute w-1 h-1/2 bg-primary top-0 left-1/2 transform -translate-x-1/2"></span>
            <span className="absolute w-1 h-1/2 bg-primary bottom-0 left-1/2 transform -translate-x-1/2"></span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Preloader;
