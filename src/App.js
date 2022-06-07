// import Counter from './components/Counter';
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addExpense } from './action/action'
import { deleteExpense } from './action/action'
import './App.css'

function App() {
  const dispatch = useDispatch()
  const expenses = useSelector((state) => {
    return state.expense
  })
  const isValid=useSelector(state=>state.isValid)
  const [data, setData] = useState({
    title: '',
    price: '',
    date: '',
  })

  const inputHandler = (e) => {
    const value = e.target.value
    setData({
      ...data,
      [e.target.name]: value,
    })
  }
  const submitHandler = (e) => {
    e.preventDefault()
    // setData(expenses)
    dispatch(addExpense(data))
    console.log('did it');
    setData({
      title: '',
      price: '',
      date: '',
    })
  }
  const deleteHandler = (id) => {
    dispatch(deleteExpense(id))
  }
  return (
    // <Counter />
    <section>
      <h1>Practice</h1>
      <form onSubmit={submitHandler}>
        <div className="control">
          <label>Title</label>
          <input
            value={data.title}
            type="text"
            name="title"
            onChange={inputHandler}
          />
        </div>
        <div className="control">
          <label>Price</label>
          <input
            value={data.price}
            type="text"
            name="price"
            onChange={inputHandler}
          />
          
        </div>
        <div className="control">
          <label>Date</label>
          <input
            value={data.date}
            type="text"
            name="date"
            onChange={inputHandler}
          />
        </div>
        <button disabled={isValid}>SUBMIT</button>
      </form>
      <ul>
        {expenses.map((el) => {
          return (
            <li key={el.id}>
              <span>{el.title} </span>
              <span>${el.price} </span>
              <span>{el.date}</span>
              <span className="x" onClick={() => deleteHandler(el.id)}>
                X
              </span>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default App
