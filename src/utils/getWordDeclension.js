export const getWordDeclension = (num, declensions) => {
  let cases = [2, 0, 1, 1, 1, 2];
  return declensions[
    num % 100 > 4 && num % 100 < 20 ? 2 : cases[num % 10 < 5 ? num % 10 : 5]
  ];
};
