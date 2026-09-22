export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
      opacity: 0,
      x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.5,
        delay: delay,
        ease: [0.22, 0.61, 0.36, 1],
      },
    },
  };
};
