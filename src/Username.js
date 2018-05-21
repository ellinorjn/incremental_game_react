import React, { Component } from 'react';

class Username extends Component{
    state = {
        username: ''
    }

    handleUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.username.length < 5 ){
            this.setState( {error: "Username too short"} )
        }else{
            this.props.handleLogin(this.state.username);
        }
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label forhtml="username">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Username" 
                        onChange={this.handleUsername}
                        value={this.state.username}/>
                </div>
                <button type="submit" className="btn btn-primary">Go!</button>
            </form>
        );
    }
}

export default Username;