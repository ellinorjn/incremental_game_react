import React, { Component } from 'react'

class DiamondCultivation extends Component{

    state= {
        costFakeDiamondCultivation: 10,
        fakeDiamondCultivationLevel: 1
    }

    fakeDiamondCultivation = () => {
        let cost = this.state.costFakeDiamondCultivation * (this.state.fakeDiamondCultivationLevel)
        if(this.props.handleUpgradeCosts(cost) === true){
            this.fakeDiamondCultivationInterval();
            this.setState({fakeDiamondCultivationLevel: this.state.fakeDiamondCultivationLevel + 1})
        }
    }

    fakeDiamondCultivationInterval = () => {
        this.interval = setInterval(()=>{
            let increaseValue = this.state.fakeDiamondCultivationLevel -1;
            this.props.handleCounterState(increaseValue)
        }, 1000);
    }


    render(){
        let costButton =  this.state.costFakeDiamondCultivation * (this.state.fakeDiamondCultivationLevel);
        return(
            <button id="diamond-cultivation" className={this.props.counter >= costButton ? "toggle-upgrade-true" : "toggle-upgrade-false"}onClick={this.fakeDiamondCultivation}>
                <p>Grow your own diamonds! costs: {this.state.costFakeDiamondCultivation * (this.state.fakeDiamondCultivationLevel)}</p>
                <p>Level {this.state.fakeDiamondCultivationLevel}</p>
            </button>
        )
    }
} 

export default DiamondCultivation;