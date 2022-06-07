import { useDispatch, useSelector } from 'react-redux';
import classes from './Counter.module.css';

const Counter = () => {
  const dispatch=useDispatch()
  const {counter,isLoggedIn}=useSelector(state=>state)
  console.log(counter,isLoggedIn);
  const toggleCounterHandler = () => {};
  const incrementHandler=()=>dispatch({type:'INCREMENT'})

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>-- COUNTER VALUE --</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      <button onClick={incrementHandler}>Add</button>
    </main>
  );
};

export default Counter;
