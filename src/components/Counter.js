import React, { Component } from 'react';

class Counter extends Component{

    state = {
        counter: 0,
        autoClickLevel: 1,
        costAutoClicker: 10,
        increaseLevel: 1,
        costIncreaseClickValue: 50
    }

    changeState = (event) => {
        this.setState({
          counter: this.state.counter + this.state.increaseLevel,
        });
    };

    /* Buy an upgrade that's clicking automaticly */
    autoClicker = (event) => {
        if(this.state.counter >= this.state.costAutoClicker){
            this.autoClickInterval();
            this.setState({ counter: this.state.counter - this.state.costAutoClicker,
                            autoClickLevel: this.state.autoClickLevel + 1,
                            costAutoClicker: this.state.costAutoClicker * (this.state.autoClickLevel + 1 )});
        };
        
    };

    autoClickInterval = () => {
        this.interval = setInterval(() => {
            this.setState({counter: this.state.counter + (this.state.autoClickLevel -1)})
          }, 3000);
    };

    /* Buy an upgrade that increases your click */
    increaseClickValue = () => {
        if(this.state.counter >= this.state.costIncreaseClickValue){
            this.setState({ counter: this.state.counter - this.state.costIncreaseClickValue,
                increaseLevel: this.state.increaseLevel + 1,
                costIncreaseClickValue: this.state.costIncreaseClickValue * (this.state.increaseLevel + 1 )})
        }
    }

    render(){
        return(
            <div>
                <p>Total amount of money: {this.state.counter} </p>
                <button onClick={this.changeState}>click me</button>

                <button onClick={this.autoClicker}>Auto clicker costs: {this.state.costAutoClicker}</button>
                <button onClick={this.increaseClickValue}>Increase Click costs: {this.state.costIncreaseClickValue}</button>
            </div>
        )
    }
}

export default Counter;