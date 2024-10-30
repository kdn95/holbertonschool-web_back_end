import getBudgetObject from './7-getBudgetObject';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    // remove function, similar to arrows
    getIncomeInDollars(income) {
      return `$${income}`;
    },
    // remove function, similar to arrows
    getIncomeInEuros(income) {
      return `${income} euros`;
    },
  };

  return fullBudget;
}
