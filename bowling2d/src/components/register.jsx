import { React, Component } from 'react';
import '../styles/register.scss';
import Header from './header';
import Footer from './footer';

class Register extends Component {
    handleClick(){
        console.log('click')
    }
    render(){
        return(
            <div className="register">
                <div>
                    <Header/>
                </div>
                <h1 className="div-h1-titleTwo">Welcome</h1><br/>
                <div className="container">
                    <div className="container-inputs">
                        <label className="div-label-firstPlayer">
                            <h4>Player 1</h4>
                            <input className="players-inputs" id="playerOne" type="text" placeholder="What's your name?"></input>
                        </label>
                        <label className="div-label-secondPlayer">
                            <h4>Player 2</h4>
                            <input className="players-inputs" id="playerTwo" type="text" placeholder="What's your name?"></input>
                        </label>
                        <div className='btn'>
                    <button type="button" className="btn-start"><a className="btn-a-nav" href='./start'>Start 🎳</a></button>
                    <button  type="button" className="btn-start"><a className="btn-a-nav" href="./newgame">Back 👈</a></button>
                </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register