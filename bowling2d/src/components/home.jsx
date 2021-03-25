import { React, Component } from 'react';
import '../styles/home.scss';

class Home extends Component {
    handleClick(){
        console.log('click')
    }
    render(){
        return(
            <div className="prueba">
                <h1>Welcome</h1><br/>
                <p>Please insert your names for start a game</p>
                <label>
                    <h4>Player 1</h4>
                    <input id="playerOne" type="text" placeholder="What's your name?"></input>
                </label>
                <label>
                    <h4>Player 2</h4>
                    <input id="playerTwo" type="text" placeholder="What's your name?"></input>
                </label>
                <ul>
                    <li><a href='./start'>Start</a></li>
                    <li><a href="./newgame">Back</a></li>
                </ul>

            </div>
        )
    }
}

export default Home