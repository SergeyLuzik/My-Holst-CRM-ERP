export const flipSizes = (sizes) =>
  sizes.map((size) => {
    const sides = size.split("х");
    return sides[1] + "х" + sides[0];
  });
