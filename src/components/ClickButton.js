import React from 'react';

function ClickButton(props){
    let increaseValue = props.level;
    return(
        <div className="test">
            <button className="click-button" onClick={() => props.handleCounterState(increaseValue)}>click me</button>
        </div>
    );
}

export default ClickButton;