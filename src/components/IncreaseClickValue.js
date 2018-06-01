import React, { Component } from 'react';
import ClickButton from './ClickButton';

class IncreaseClickValue extends Component{

    state = {  
        increaseLevel: 1,
        costIncreaseClickValue: 50,
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
            <React.Fragment>
                <ClickButton   
                    level={this.state.increaseLevel}
                    handleCounterState={this.props.handleCounterState}/>
                
                <button className="increase-click-button" id="increase-click-value"disabled={this.props.counter < costButton} onClick={this.increaseClickValue}>
                    <div className="tool-tip">
                        <h3 className="upgrade">
                        
                            <img src="http://www.clker.com/cliparts/Z/6/B/Y/s/N/pointer-finger-hi.png" />
                            Cursor {costButton}
                        
                        </h3>
                        <span className="tool-tip-text">You'll get more eggs on every click on the hen</span>
                    </div>
                    <h4 className="level">{this.state.increaseLevel -1}</h4>
                </button>
            </React.Fragment>
        )
    }
}
export default IncreaseClickValue;
