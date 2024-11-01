export const getGradient = (color) => `conic-gradient(
              from 35deg,
              ${color},
              rgb(37, 20, 20) 60%
          )`;

export const interpolateHexColors = (colorA, colorB, factor) =>
  interpolateColors(hexToRgb(colorA), hexToRgb(colorB), factor);

const interpolateColors = (colorA, colorB, factor) => {
  return colorA.map((c, i) => Math.round(c + (colorB[i] - c) * factor));
};

export const hexToRgb = (hex) => {
  hex = hex.replace(/^#/, '');
  return [
    parseInt(hex.slice(0, 2), 16),
    parseInt(hex.slice(2, 4), 16),
    parseInt(hex.slice(4, 6), 16),
  ];
};
