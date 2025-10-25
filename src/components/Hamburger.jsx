import { motion } from "framer-motion";

const Hamburger = ({ isOpen, toggleMenu, color = "white" }) => {
  const lineVariants = {
    closed: { rotate: 0, y: 0 },
    open: (custom) => ({ rotate: custom, y: custom === 45 ? 7 : -7 }),
  };

  return (
    <button
      onClick={toggleMenu}
      className="z-50 w-8 h-6 flex flex-col justify-between cursor-pointer"
      aria-label="Toggle menu"
      aria-expanded={isOpen}
    >
      <motion.div
        className="w-full h-0.5"
        style={{ backgroundColor: color, originX: "0.1rem" }}
        variants={lineVariants}
        custom={45}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="w-full h-0.5"
        style={{ backgroundColor: color }}
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="w-full h-0.5"
        style={{ backgroundColor: color, originX: "0.1rem" }}
        variants={lineVariants}
        custom={-45}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default Hamburger;
