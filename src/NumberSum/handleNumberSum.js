const totalSum = (numberArr) => {
  let sum = 0;
  for (let i = 0; i < numberArr.length; i += 1) {
    sum += Number((numberArr[i] || 0));
  }
  return sum;
};

const updateArray = (currentArr, currentDelimiter) => {
  const newArr = [];
  for (let i = 0; i < currentArr.length; i += 1) {
    newArr.push(...currentArr[i].split(currentDelimiter));
  }
  return newArr;
}

export const handleNumberSum = (value = '') => {
  const hasDelimiter = value.startsWith('//');
  let delimiterType = [",", "\n"];
  if (hasDelimiter) {
    delimiterType.push(value.charAt(2));
    const indexOfDelimiterEnd = value.indexOf('\n');
    const newString = value.substring(indexOfDelimiterEnd + 1);
    let numberArr = [newString];
    
    for (let i = 0; i < delimiterType.length; i += 1) {
      numberArr = updateArray(numberArr, delimiterType[i]);
    }
    return totalSum(numberArr);
  }
  const numberArr = value.split(/,|\n/g);
  return totalSum(numberArr);
};

export default handleNumberSum;