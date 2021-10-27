import { Component } from 'react'

class Join extends Component{
    render() {
        const token = this.props.match.params.token
        return (
        <div>
            <p>+) Token       : {token}</p>
            <p>+) Token length: {token.length}</p>
            <a className="App-link"
               href="/"
               rel="noopener noreferrer">
                <b>HOME</b>
            </a>
        </div>
        );
    }
}

export default Join;
