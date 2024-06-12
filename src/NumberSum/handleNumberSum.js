export const handleNumberSum = (value = '') => {
  const numberArr = value.split(',');
  let sum = 0;
  for (let i = 0; i < numberArr.length; i += 1) {
    sum += Number((numberArr[i] || 0));
  }
  return sum;
};

export default handleNumberSum;