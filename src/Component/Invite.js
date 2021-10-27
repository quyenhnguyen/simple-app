import { Component } from 'react'

class Invite extends Component{
    render() {
        console.log(this.props)
        const token = new URLSearchParams(this.props.location.search).get("token")
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

export default Invite;
