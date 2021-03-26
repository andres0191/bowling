import { React, useState } from 'react';
import Start from './Start';
import '../styles/register.scss';

function Register() {
    const [values, setValues] = useState({playerOne:"", playerTwo:""});
    const [status, setStatus] = useState(true);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setValues({ ...values, [name]:value.toUpperCase()  })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(values)
    }

    const handleNavigation = () => {
        setStatus(false)
    }
        return(
            <div>
            {status ?
            (
            <div className="register">
                <h1 className="div-h1-titleTwo">Welcome</h1><br/>
                <div className="container">
                    <div className="container-inputs">
                        <label className="div-label-firstPlayer">
                            <h4>Player 1</h4>
                            <input
                                className="players-inputs"
                                id="playerOne"
                                type="text"
                                placeholder="What's your name?"
                                onChange={handleChange}
                                value={values.playerOne}
                                name="playerOne"
                                autoComplete="off"/>
                        </label>
                        <label className="div-label-secondPlayer">
                            <h4>Player 2</h4>
                            <input
                                className="players-inputs"
                                id="playerTwo"
                                type="text"
                                placeholder="What's your name?"
                                onChange={handleChange}
                                value={values.playerTwo}
                                name="playerTwo"
                                autoComplete="off"/>
                        </label>
                        <div className='btn'>
                            <button type="submit" value="Submit"  className="btn-start" onClick={handleSubmit}><a className="btn-a-nav" onClick={handleNavigation} href='#'>Start 🎳</a></button>
                        </div>
                    </div>
                </div>
            </div>
            ) : <Start values = {values}/> }
        </div>
        )
}

export default Register
