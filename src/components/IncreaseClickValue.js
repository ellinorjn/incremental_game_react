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
                    handleCounterState={this.props.handleCounterState}/>
                
                <button className="increase-click-button" id="increase-click-value"disabled={this.props.counter < costButton} onClick={this.increaseClickValue}>
                    <div className="tool-tip">
                        <h2 className="upgrade">New gloves {costButton}</h2>
                        <span className="tool-tip-text">You'll get more eggs on every click on the hen</span>
                    </div>
                    <p className="level">{this.state.increaseLevel}</p>
                </button>
            </div>
        )
    }
}
export default IncreaseClickValue;
