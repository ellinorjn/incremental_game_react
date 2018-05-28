import React, { Component } from 'react';

class DiamondHunter extends Component{

    state={
        costDiamondHunter: 10,
        diamondHunterLevel: 1
    }

    diamondHunter = () => {
        let cost = this.state.costDiamondHunter * (this.state.diamondHunterLevel)
        if(this.props.handleUpgradeCosts(cost) === true){
            this.diamondHunterInterval();
            this.setState({diamondHunterLevel: this.state.diamondHunterLevel +1})
        }
    }

    diamondHunterInterval = () => {
        this.interval = setInterval(()=>{
            let increaseValue = this.state.diamondHunterLevel -1;
            this.props.handleCounterState(increaseValue)
        }, 1000)
    }

    render(){
        return(
            <button onClick={this.diamondHunter}>
            HUNTER costs: {this.state.costDiamondHunter * (this.state.diamondHunterLevel)}
            </button>
        )
    }
}

export default DiamondHunter;