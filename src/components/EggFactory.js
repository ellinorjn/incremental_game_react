import React, { Component } from 'react';

class EggFactory extends Component{

    state={
        costEggFactory: 10000,
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
            let increaseValue = this.state.eggFactoryLevel * 8;
            this.props.handleCounterState(increaseValue)
        }, 500)
    }

    render(){
        let costButton =  this.state.costEggFactory * (this.state.eggFactoryLevel);
        return(
            <button disabled={this.props.counter < costButton} id="egg-factory" onClick={this.eggFactory}>
                <div className="tool-tip">
                    <h3 className="upgrade">
                    <img src={require('../images/factory.png')} alt="" />
                    Factory: {this.state.costEggFactory * (this.state.eggFactoryLevel)}</h3>
                    <span className="tool-tip-text">A factory that creates lots of eggs every second</span>
                </div>
                <h4 className="level">{this.state.eggFactoryLevel - 1}</h4> 
            </button>
        )
    }
}

export default EggFactory;