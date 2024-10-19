export const searchTextMatch = (text, arr) => {
  const regexp = new RegExp(text, "yi");
  return arr.filter((value) => {
    regexp.lastIndex = 0;
    return regexp.test(value);
  });
};
