import React, { Component } from 'react'

class Autoclicker extends Component {
    state={
        autoClickLevel: 1,
        costAutoClicker: 10,
    }

    autoClicker = () => {
           let cost = this.state.costAutoClicker * (this.state.autoClickLevel)
            if(this.props.handleUpgradeCosts(cost) === true){
                this.autoClickInterval();
                this.setState({autoClickLevel: this.state.autoClickLevel + 1})
            }
    };
    autoClickInterval = () => {
        this.interval = setInterval(() => {
            let increaseValue = this.state.autoClickLevel - 1;
            this.props.handleCounterState(increaseValue)
            }, 3000);
    };
        
    
    render(){
        return(
            <div>
                <button onClick={this.autoClicker}>
                    Auto clicker costs: {this.state.costAutoClicker * (this.state.autoClickLevel)}
                </button><br/>
            </div>
        )
    }

}

export default Autoclicker;