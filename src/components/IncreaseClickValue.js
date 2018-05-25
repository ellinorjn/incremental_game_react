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
        return(
            <div>
                <ClickButton   level={this.state.increaseLevel}
                               handleCounterState={this.props.handleCounterState}/><br/>
                <button onClick={this.increaseClickValue}>
                    Increase Click costs: {this.state.costIncreaseClickValue * (this.state.increaseLevel)}
                </button><br/>
            </div>
        )

    }
}
export default IncreaseClickValue;


/*
increaseClickValue = () => {
    if(this.state.counter >= this.state.costIncreaseClickValue){
        this.setState({ 
            counter: this.state.counter - this.state.costIncreaseClickValue,
            increaseLevel: this.state.increaseLevel + 1,
            costIncreaseClickValue: this.state.costIncreaseClickValue * (this.state.increaseLevel + 1 )})
    }
};*/