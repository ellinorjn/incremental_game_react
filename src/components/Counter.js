import React, { Component } from 'react';

class Counter extends Component{

    state = {
        counter: 0
    }

    changeState = (event) => {
        this.setState({
          // this.state.counter = this.state.counter + 1
          counter: this.state.counter + 1,
        });
      };

    render(){
        return(
            <div>
                <p>Total amount of money: {this.state.counter} </p>
                <button onClick={this.changeState}>click me</button>
            </div>
        )
    }
}

export default Counter;