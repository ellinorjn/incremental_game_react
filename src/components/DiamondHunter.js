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
            let increaseValue = this.state.diamondHunterLevel + 2;
            this.props.handleCounterState(increaseValue)
        }, 1000)
    }

    render(){
        let costButton =  this.state.costDiamondHunter * (this.state.diamondHunterLevel);
        return(
            <button id="diamond-hunter" className={this.props.counter >= costButton ? "toggle-upgrade-true" : "toggle-upgrade-false" } onClick={this.diamondHunter}>
                <p>Hire a dwarf costs: {this.state.costDiamondHunter * (this.state.diamondHunterLevel)}</p>
                <p>Level {this.state.diamondHunterLevel}</p> 
            </button>
        )
    }
}

export default DiamondHunter;