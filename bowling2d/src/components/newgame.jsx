import { React, Component } from 'react';
import '../styles/newgame.scss';
import Header from './header';
import Footer from './footer';


class NewGame extends Component {
    render(){
        return(
            <div className="background text">
                <div>
                <Header/>
                </div>
                <h1 className='div-h1-title'>Bowling 2D</h1>
                <p className="h1-p-paragraph">Press <a href="./register">🎳</a> to start the game.  </p>
                <ul className="div-ul-btn">
                    <li className="ul-li-btn"></li>
                </ul>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default NewGame