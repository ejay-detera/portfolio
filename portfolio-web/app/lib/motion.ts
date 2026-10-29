export const ease = {
  out: [0.22, 1, 0.36, 1], // expo-out: default for reveals
  inOut: [0.65, 0, 0.35, 1], // for position/size changes
  linear: [0, 0, 1, 1], // only for continuous parallax
} as const;

export const dur = {
  micro: 0.18,
  ui: 0.32,
  reveal: 0.9,
  hero: 1.2,
} as const;

export const spring = {
  type: "spring",
  stiffness: 260,
  damping: 32,
  mass: 0.9,
} as const;

