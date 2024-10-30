export default function getBudgetObject(income, gdp, capita) {
  // remove value from key:value within const
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
