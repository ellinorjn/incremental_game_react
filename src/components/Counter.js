import React, { Component } from 'react';

class Counter extends Component{

    state = {
       
        increaseLevel: 1,
        costIncreaseClickValue: 50,
        costFakeDiamondCultivation: 10,
        fakeDiamondCultivationLevel: 1
    }

    changeState = (event) => {
        this.setState({
          counter: this.state.counter + this.state.increaseLevel,
        });
    };

    /* Buy an upgrade that increases your click */
    increaseClickValue = () => {
        if(this.state.counter >= this.state.costIncreaseClickValue){
            this.setState({ 
                counter: this.state.counter - this.state.costIncreaseClickValue,
                increaseLevel: this.state.increaseLevel + 1,
                costIncreaseClickValue: this.state.costIncreaseClickValue * (this.state.increaseLevel + 1 )})
        }
    };

    /* Buy an upgrade to get a fake diamond cultivation */
    fakeDiamondCultivation = () => {
        if(this.state.counter >= this.state.costFakeDiamondCultivation){
            this.fakeDiamondCultivationInterval();
            this.setState({ 
                counter: this.state.counter - this.state.costFakeDiamondCultivation,
                fakeDiamondCultivationLevel: this.state.fakeDiamondCultivationLevel + 1,
                costFakeDiamondCultivation: this.state.costFakeDiamondCultivation * (this.state.fakeDiamondCultivationLevel + 1)})
        }
    }

    fakeDiamondCultivationInterval = () => {
        this.interval = setInterval(() => {
            this.setState({counter: (this.state.counter) + ((this.state.fakeDiamondCultivationLevel -1)* 5) })
          }, 1000);
    };

    /* Buy upgrade 4 */

    render(){
        return(
            <div>
                
                
                
                <button onClick={this.fakeDiamondCultivation}>Grow your own diamonds! costs: {this.state.costFakeDiamondCultivation}</button>
            </div>
        )
    }
}

export default Counter;
