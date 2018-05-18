import React, { Component } from 'react';

class Username extends Component{
    render(){
        return(
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username"/>
                <button type="submit" className="btn btn-primary">Go!</button>
            </form>
        );
    }
}

export default Username;