import React, { Component } from 'react'

class Laboratory extends Component{

    state= {
        costLaboratory: 10,
        laboratoryLevel: 1
    }

    laboratory = () => {
        let cost = this.state.costLaboratory * (this.state.laboratoryLevel)
        if(this.props.handleUpgradeCosts(cost) === true){
            this.laboratoryInterval();
            this.setState({laboratoryLevel: this.state.laboratoryLevel + 1})
        }
    }

    laboratoryInterval = () => {
        clearInterval(this.interval)
        this.interval = setInterval(()=>{
            let increaseValue = this.state.laboratoryLevel -1;
            this.props.handleCounterState(increaseValue)
        }, 1000);
    }


    render(){
        let costButton =  this.state.costLaboratory * (this.state.laboratoryLevel);
        return(
            <button id="laboratory" disabled={this.props.counter < costButton} onClick={this.laboratory}>
                <div className="tool-tip">
                    <h2 className="upgrade">Laboratory {this.state.costLaboratory * (this.state.laboratoryLevel)}</h2>
                    <span className="tool-tip-text">A laboratory that creates fake eggs worth more than real ones</span>
                </div>
                <p className="level">{this.state.laboratoryLevel}</p>
            </button>
        )
    }
} 

export default Laboratory;