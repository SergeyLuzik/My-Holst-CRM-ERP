export const searchTextMatch = (text, arr, searchField) => {
  const regexp = new RegExp(text, "yi");

  return arr.filter((value) => {
    regexp.lastIndex = 0;
    return regexp.test(searchField ? value[searchField] : value);
  });
};
