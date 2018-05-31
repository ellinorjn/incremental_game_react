import React, { Component } from 'react';

class HenHouse extends Component{

    state={
        costHenHouse: 10,
        henHouseLevel: 1
    }

    henHouse = () => {
        let cost = this.state.costHenHouse * (this.state.henHouseLevel)
        if(this.props.handleUpgradeCosts(cost) === true){
            this.henHouseInterval();
            this.setState({henHouseLevel: this.state.henHouseLevel +1})
        }
    }

    henHouseInterval = () => {
        clearInterval(this.interval)
        this.interval = setInterval(()=>{
            let increaseValue = this.state.henHouseLevel + 1;
            this.props.handleCounterState(increaseValue)
        }, 1000)
    }

    render(){
        let costButton =  this.state.costHenHouse * (this.state.henHouseLevel);
        return(
            <button disabled={this.props.counter < costButton} id="hen-house" onClick={this.henHouse}>
                <div className="tool-tip">
                    <h3 className="upgrade">Hen house {this.state.costHenHouse * (this.state.henHouseLevel)}</h3>
                    <span className="tool-tip-text">A factory that creates lots of eggs every second</span>
                </div>
                <h4 className="level">{this.state.henHouseLevel - 1}</h4> 
            </button>
        )
    }
}

export default HenHouse;