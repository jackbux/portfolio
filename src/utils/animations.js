export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const scaleBlur = {
  hidden: { opacity: 0, scale: 0.9, filter: "blur(10px)" },
  show: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: "easeOut" }
  }
}

export const stagger = {
  show: {
    transition: {
      staggerChildren: 0.15
    }
  }
}

export const float = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}