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
        let costButton =  this.state.costAutoClicker * (this.state.autoClickLevel);
        return(
            <div>
                <button id="auto-clicker" className={this.props.counter >= costButton ? "toggle-upgrade-true" : "toggle-upgrade-false"} onClick={this.autoClicker}>
                    <p>Auto clicker costs: {this.state.costAutoClicker * (this.state.autoClickLevel)} </p>
                    <p>Level {this.state.autoClickLevel}</p>
                </button>
            </div>
        )
    }
}

export default Autoclicker;