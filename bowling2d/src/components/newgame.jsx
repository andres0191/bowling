import { React, Component } from 'react';

class NewGame extends Component {
    render(){
        return(
            <div>
                <h1>Hi, welcome to game of bowling in 2d</h1>
                <p>Please click in this button for start the game:</p>
                <ul>
                    <li><a href="./home">New Game</a></li>
                </ul>
            </div>
        )
    }
}

export default NewGame