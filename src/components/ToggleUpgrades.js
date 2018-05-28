import React from 'react'

class ToggleUpgrades extends React.Component {
    state = {
      toggle: true
    };
  
    toggleClass = () => {
      this.setState({ toggle: !this.state.toggle });
    };
  
    render() {
      let hiddenOrNot = this.state.toggle ? "" : "hide";
      return (
        <div>
          <button onClick={this.toggleClass}> Toggle me </button>
          <section className={hiddenOrNot}>Who am i</section>
        </div>
      );
    }
  }


export default ToggleUpgrades;
