const initialState = {
  expense: [],
  isValid: false,
}
let nextId = 0
const reducerFunc = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      if (action.title !== '' && action.price !== '') {
        return {
          ...state,
          expense: [
            ...state.expense,
            {
              title: action.title,
              price: action.price,
              date: action.date,
              id: nextId++,
            },
          ],
          isValid: true,
        }
      } else {
        return {
          ...state,
        }
      }

    case 'DELETE':
      return {
        ...state,
        expense: state.expense.filter((exp) => exp.id !== action.id),
      }

    default:
      return state
  }
}
export default reducerFunc
