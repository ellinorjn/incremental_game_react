import React, { Component } from 'react';
import Autoclicker from './Autoclicker';
import IncreaseClickValue from './IncreaseClickValue';
import HenHouse from './HenHouse';
import Laboratory from './Laboratory';
import EggFactory from './EggFactory';

class GameView extends Component{
    state={
        counter: 100
    }

    handleUpgradeCosts = (cost) => {
        if(this.state.counter >= cost){
          this.setState({counter: this.state.counter - cost})
          return true;
        }
        return false;
    }
    
    handleCounterState =  (increaseValue) => {
        this.setState({counter: this.state.counter + increaseValue})
    }

    render(){
        return(
            <div className="testar"> 
    
              

                
                <h2>You have collected {this.state.counter} eggs </h2>
                    <IncreaseClickValue 
                    handleCounterState={this.handleCounterState}
                    handleUpgradeCosts={this.handleUpgradeCosts}
                    counter={this.state.counter}/>
        
                    <Autoclicker
                    handleCounterState={this.handleCounterState}
                    handleUpgradeCosts={this.handleUpgradeCosts}
                    counter={this.state.counter}/>
        
                    <HenHouse
                    handleCounterState={this.handleCounterState}
                    handleUpgradeCosts={this.handleUpgradeCosts}
                    counter={this.state.counter}/>
        
                    <Laboratory
                    handleCounterState={this.handleCounterState}
                    handleUpgradeCosts={this.handleUpgradeCosts}
                    counter={this.state.counter}/>
        
                    <EggFactory
                    handleCounterState={this.handleCounterState}
                    handleUpgradeCosts={this.handleUpgradeCosts}
                    counter={this.state.counter}/>
                </div>
           
        );
    }    
}

export default GameView;
