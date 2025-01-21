export const getArrayOfAgesFromIntervals = (
  intevalArray: number[] | undefined,
  minAge: number
) => {
  const agesArray = [minAge];
  let age = minAge;
  intevalArray?.forEach((interval) => {
    age = age + interval;
    agesArray.push(age);
  });
  return agesArray;
};
