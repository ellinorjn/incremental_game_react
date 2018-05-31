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
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            let increaseValue = this.state.autoClickLevel - 1;
            this.props.handleCounterState(increaseValue)
            }, 3000);
    };
          
    render(){
        let costButton =  this.state.costAutoClicker * (this.state.autoClickLevel);
        return(
            <div>
                <button id="auto-clicker" disabled={this.props.counter < costButton} onClick={this.autoClicker}>
                    <div className="tool-tip">
                        <h3 className="upgrade">
                        <img src="https://vignette.wikia.nocookie.net/lab-rats/images/f/f3/Cartoon_Robot.png/revision/latest?cb=20151212205742" />
                        Robot {this.state.costAutoClicker * (this.state.autoClickLevel)} </h3>
                        <span className="tool-tip-text">A robot inside the hen house picking upp eggs</span>
                    </div>
                    <h4 className="level">{this.state.autoClickLevel -1}</h4>
                </button>
            </div>
        )
    }
}

export default Autoclicker;