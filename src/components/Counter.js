import React, { Component } from 'react';

class Counter extends Component{

    state = {
        counter: 0,
        autoClickLevel: 1
    }

    changeState = (event) => {
        this.setState({
          counter: this.state.counter + 1,
        });
    };

    /* Buy an upgrade that's clicking automaticly */
    autoClicker = (event) => {

        let costAutoClicker = 10 * this.state.autoClickLevel;

        if(this.state.counter >= costAutoClicker){
            this.autoClickInterval();
            this.setState({ counter: this.state.counter - costAutoClicker,
                            autoClickLevel: this.state.autoClickLevel + 1});
        };
        
    };

    autoClickInterval = () => {
        this.interval = setInterval(() => {
            this.changeState(this.state.autoClicks)
          }, 4000);
    };


    render(){
        return(
            <div>
                <p>Total amount of money: {this.state.counter} </p>
                <button onClick={this.changeState}>click me</button>

                <button onClick={this.autoClicker}>Auto</button>
            </div>
        )
    }
}

export default Counter;