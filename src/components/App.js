import React, { Component } from 'react';
import '../App.css';
import Login from './Login';
import Counter from './Counter';
import Autoclicker from './Autoclicker';
import IncreaseClickValue from './IncreaseClickValue';
import DiamondCultivation from './DiamondCultivation';


class App extends Component {

  state = {
    loggedIn: false,
    username: '',
    counter: 0
  }

  handleLogin = (username) => {
    this.setState({ loggedIn: true, username: username });
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

  render() {
    let loggedInMessage = null;
    if(this.state.loggedIn){
      loggedInMessage = <p> Welcome {this.state.username}, let's play! </p>
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{ loggedInMessage }</h1>
        </header>
        { !this.state.loggedIn && <Login handleLogin={this.handleLogin} />}
        <p>Total amount of money: {this.state.counter} </p>

        <IncreaseClickValue 
        handleCounterState={this.handleCounterState}
        handleUpgradeCosts={this.handleUpgradeCosts}/>

        <Counter
        handleCounterState={this.handleCounterState} />

        <Autoclicker
        handleCounterState={this.handleCounterState}
        handleUpgradeCosts={this.handleUpgradeCosts}/>

        <DiamondCultivation
        handleCounterState={this.handleCounterState}
        handleUpgradeCosts={this.handleUpgradeCosts}/>
        
      </div>
    );
  }
}

export default App;
