import React, { Component } from 'react'

class Laboratory extends Component{

    state= {
        costLaboratory: 5000,
        laboratoryLevel: 1
    }

    laboratory = () => {
        let cost = this.state.costLaboratory * (this.state.laboratoryLevel)
        if(this.props.handleUpgradeCosts(cost) === true){
            this.setState({laboratoryLevel: this.state.laboratoryLevel + 1})
            this.laboratoryInterval();
        }
    }

    laboratoryInterval = () => {
        clearInterval(this.interval)
        this.interval = setInterval(()=>{
            let increaseValue = this.state.laboratoryLevel + 5;
            this.props.handleCounterState(increaseValue)
        }, 5000);
    }


    render(){
        let costButton =  this.state.costLaboratory * (this.state.laboratoryLevel);
        return(
            <button id="laboratory" disabled={this.props.counter < costButton} onClick={this.laboratory}>
                <div className="tool-tip">
                    <h3 className="upgrade">
                    <img src={require('../images/lab.png')} alt="" />
                    Laboratory: {this.state.costLaboratory * (this.state.laboratoryLevel)}</h3>
                    <span className="tool-tip-text">A laboratory that creates fake eggs worth more than real ones</span>
                </div>
                <h4 className="level">{this.state.laboratoryLevel -1}</h4>
            </button>
        )
    }
} 

export default Laboratory;