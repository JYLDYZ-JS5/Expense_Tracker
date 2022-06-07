export const addExpense = ({ title, price, date,  }) => ({
  type: 'ADD',
  title: title,
  price: price,
  date: date,
})
export const deleteExpense = (id) => ({
  type: 'DELETE',
  id: id,
})
