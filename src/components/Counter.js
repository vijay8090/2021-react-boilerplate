import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

Counter.propTypes = {
    
};

function Counter(props) {
    const dispatch = useDispatch()
    const counter = useSelector((state) => state.counter)

    return <div style={{padding:20}}>
        <div style={{padding:20, }}>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
            Increment counter
        </button>
        </div>
        <div style={{padding:20, }}>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
            Decrement counter
        </button>
        </div>
        <div style={{padding:20, fontSize:32, fontStyle:'Bold'}}>
        {counter}
        </div>
        </div>
}

export default Counter;
