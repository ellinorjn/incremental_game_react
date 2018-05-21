import React, { Component } from 'react';

class Username extends Component{
    state = {
        username: '',
        error: ''
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
        let errorMessage = null;
        if(this.state.error){
            errorMessage = <small id="emailHelp" className="form-text text-danger">{this.state.error}</small>;
        }
          let errorClass = 'form-group';
          if(this.state.error){
            errorClass = "form-group has-danger";
          }
        return(
            <form onSubmit={this.handleSubmit}>
                <div className={ errorClass }>
                    <label forhtml="username">Username</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="username" 
                        placeholder="Username" 
                        onChange={this.handleUsername}
                        value={this.state.username}
                    />
                    { errorMessage }
                </div>
                <button type="submit" className="btn btn-primary">Go!</button>
            </form>
        );
    }
}

export default Username;