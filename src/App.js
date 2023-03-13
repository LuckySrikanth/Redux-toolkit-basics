import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storeActions } from './store'

const App = () => {
  const Dispatch = useDispatch()

  const counter = useSelector(state => state.counter.timer)
  const ShowOrHide = useSelector(state => state.counter.hide)

  const incrementHandler = () => {
    Dispatch(storeActions.increment())
  }

  const decrementHandler = () => {
    Dispatch(storeActions.decrement())
  }

  const makeToZero = () => {
    Dispatch(storeActions.zero())
  }

  const toggleBtn = () => {
    Dispatch(storeActions.toggle())
  }

  return (
    <div>
      <center>
        <h1>
          counter With Redux Tool
        </h1>
        <h3>{counter}</h3>
        {
          ShowOrHide && (
            <>
              <button onClick={incrementHandler}>Increase</button> &nbsp;
              <button onClick={decrementHandler}>Decrease</button> &nbsp;
              <button onClick={makeToZero}>Make To 0</button> &nbsp;
            </>
          )
        }
        <div>
        <button onClick={toggleBtn}>Toggle Button</button>
        </div>
      </center>
    </div>
  )
}

export default App