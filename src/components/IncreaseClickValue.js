import React, { Component } from 'react';
import ClickButton from './ClickButton';

class IncreaseClickValue extends Component{

    state = {  
        increaseLevel: 1,
        costIncreaseClickValue: 10,
    }

    increaseClickValue = () => {
        let cost = this.state.costIncreaseClickValue * (this.state.increaseLevel)
            if(this.props.handleUpgradeCosts(cost) === true){
                this.setState({increaseLevel: this.state.increaseLevel + 1})
            }
    };

    render(){
        let costButton = this.state.costIncreaseClickValue * (this.state.increaseLevel);
        return(
            <div>
                <ClickButton   
                level={this.state.increaseLevel}
                handleCounterState={this.props.handleCounterState}/><br/>
                
                <button id="increase-click-value"className={this.props.counter >= costButton ? "toggle-upgrade-true" : "toggle-upgrade-false"} onClick={this.increaseClickValue}>
                    <p>Increase Click costs: {costButton}</p>
                    <p>Level {this.state.increaseLevel}</p>
                </button>
            </div>
        )

    }
}
export default IncreaseClickValue;

//className="increase-click-value"
/*
increaseClickValue = () => {
    if(this.state.counter >= this.state.costIncreaseClickValue){
        this.setState({ 
            counter: this.state.counter - this.state.costIncreaseClickValue,
            increaseLevel: this.state.increaseLevel + 1,
            costIncreaseClickValue: this.state.costIncreaseClickValue * (this.state.increaseLevel + 1 )})
    }
};*/