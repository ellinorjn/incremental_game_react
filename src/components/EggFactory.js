import React, { Component } from 'react';

class EggFactory extends Component{

    state={
        costEggFactory: 10,
        eggFactoryLevel: 1
    }

    eggFactory = () => {
        let cost = this.state.costEggFactory * (this.state.eggFactoryLevel)
        if(this.props.handleUpgradeCosts(cost) === true){
            this.eggFactoryInterval();
            this.setState({eggFactoryLevel: this.state.eggFactoryLevel +1})
        }
    }

    eggFactoryInterval = () => {
        clearInterval(this.interval)
        this.interval = setInterval(()=>{
            let increaseValue = this.state.eggFactoryLevel + 1;
            this.props.handleCounterState(increaseValue)
        }, 1000)
    }

    render(){
        let costButton =  this.state.costEggFactory * (this.state.eggFactoryLevel);
        return(
            <button disabled={this.props.counter < costButton} id="egg-factory" onClick={this.eggFactory}>
                <div className="tool-tip">
                    <h2 className="upgrade">Factory {this.state.costEggFactory * (this.state.eggFactoryLevel)}</h2>
                    <span className="tool-tip-text">A factory that creates lots of eggs every second</span>
                </div>
                <p className="level">{this.state.eggFactoryLevel - 1}</p> 
            </button>
        )
    }
}

export default EggFactory;