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
        return(
            <button onClick={this.fakeDiamondCultivation}>
            Grow your own diamonds! costs: {this.state.costFakeDiamondCultivation * (this.state.fakeDiamondCultivationLevel)}
            </button>
        )
    }
} 

export default DiamondCultivation;