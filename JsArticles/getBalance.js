const transactions = [
  {
    title: "Salário",
    value: 3000,
    type: "income"
  },
  {
    title: "Freela",
    value: 2000,
    type: "income"
  },
  {
    title: "Boleto",
    value: 2000,
    type: "outcome"
  },
  // {
  //   title: "Conta",
  //   value: 500,
  //   type: "outcome"
  // },
]

console.log(transactions);


function getBaleance() {
  const income = transactions
    .filter(transactions => transactions.type === 'income')
    .reduce((sum, current) => {
      return sum + current.value
    }, 0);

  const outcome = transactions
    .filter(transactions => transactions.type === 'outcome').reduce((sum, acc) => {
      return sum + acc.value
    }, 0);

  return {
    income,
    outcome,
    total: income - outcome
  };
}

console.log(getBaleance());

