import {  Variants } from "framer-motion"

export const generalVariant: Variants = {
  initial: {
    scale: 0.96,
    opacity: 0
  },
  animate: {
    scale: [1, 0.96],
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 150,
    }
  },
  hover: {
    scale: 1
  }
}

export const postVariant: Variants = {
  initial: {
    opacity: 0,
    y: '-30px',
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.25 * index,
    }
  }),
}