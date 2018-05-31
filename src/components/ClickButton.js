import React from 'react';

function ClickButton(props){
    let increaseValue = props.level;
    return(
        <div className="background">
            <div className="clickDiv">
                <button className="click-button" onClick={() => props.handleCounterState(increaseValue)}>click me</button>
            </div>
        </div>
    );
}

export default ClickButton;