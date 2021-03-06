import React from 'react';

function ClickButton(props){
    let increaseValue = props.level;
    return(
        <div className="background">
            <div className="click-div">
                <button className="click-button" onClick={() => props.handleCounterState(increaseValue)}>
                </button>
            </div>
        </div>
    );
}

export default ClickButton;