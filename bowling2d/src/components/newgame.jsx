import { React, useState, useEffect} from 'react';
import '../styles/newgame.scss';
import Register from './Register'
import Header from './Header';

function NewGame() {

    const [status, setStatus] = useState(true);

    const handleNavigation = () => {
        setStatus(false);
    }

    return(
        <div className="background text">
            <div>
            <Header/>
            </div>
            {status ?
            (<div>
                <h1 className='div-h1-title'>Bowling 2D</h1>
                <p className="h1-p-paragraph">Press <a onClick={handleNavigation} href="#">🎳</a> to start the game.</p>
                <ul className="div-ul-btn">
                    <li className="ul-li-btn"></li>
                </ul>
            </div>) : <Register />}
        </div>
    )
}

export default NewGame