import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './counter.css';

Counter.propTypes = {
    
};

function Counter(props) {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)

    return <div className={'counter__container'}>
        <div className={'counter__button_container'}>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
            Increment counter
        </button>
            <span style={{marginLeft:16}}></span>
         <button onClick={() => dispatch({ type: 'DECREMENT' })}>
            Decrement counter
        </button>
        </div>
        <div className={'counter__display'}>
        {counter}
        </div>
        </div>
}

export default Counter;
