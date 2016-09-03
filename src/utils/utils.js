export const addComma = (string) => {
  let decimal = '';
  const decIndex = string.indexOf('.');
  if (decIndex !== -1) {
    decimal = string.slice(decIndex);
    string = string.slice(0, decIndex);
  }
  if (string.length <= 3) {
    return (string + decimal);
  } else {
    return addComma(string.slice(0, string.length - 3)) + ',' + string.slice(string.length - 3) + decimal;
  }
};

export const convertToNumber = (string) => {
  let base = string;
  let decimal = undefined;
  const decIndex = string.indexOf('.');
  if (decIndex !== -1) {
    decimal = string.slice(decIndex + 1);
    base = string.slice(0, decIndex);
  }
  base = parseInt(base.split(',').join(''), 10);
  if (decimal) {
    base += parseInt(decimal, 10) / (Math.pow(10, decimal.length));
  }
  return base;
};

export const operators = {
  TIMES: 215,
  ADD: 43,
  DIVIDE: 247,
  MINUS: 8722,
};

export const calculate = (steps, currentTotal) => {
  const { TIMES, ADD, DIVIDE, MINUS } = operators;
  while (steps.length > 0) {
    const operator = steps.shift();
    const nextVal = convertToNumber(steps.shift());
    switch (operator.charCodeAt(0)) {
      case TIMES:
        currentTotal = currentTotal * nextVal;
        break;
      case ADD:
        currentTotal += nextVal;
        break;
      case DIVIDE:
        currentTotal = currentTotal / nextVal;
        break;
      case MINUS:
        currentTotal -= nextVal;
    }
  }
  return currentTotal;
}