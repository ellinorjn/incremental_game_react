import React from 'react';

function ClickButton(props){
    let increaseValue = props.level;
    return(
        <button onClick={() => props.handleCounterState(increaseValue)}>click me kesj</button>
    );
}

export default ClickButton;