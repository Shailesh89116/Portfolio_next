import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 h-[32px] w-[32px] rounded-[50%] bg-black"
      variants={variants}
      animate="default"
    />
  );
};

export default Cursor;