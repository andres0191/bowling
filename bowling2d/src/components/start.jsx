import { React, useState, useEffect } from 'react';
import '../styles/start.scss';


function Start({values}){

    /* const playOne = [values.playerOne];
    const playTwo = [values.playerTwo];
    const rounds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const pins = 11; */

    return(
        <div className="container">
            <h1 className='button'>{values.playerOne}</h1>
            <div className="box-bowling">
                <div className="ballOne">
                    <div class="firstLine">
                        <i id="pinTen" class="pin"></i>
                        <i id="pinNine" class="pin"></i>
                        <i id="pinEight" class="pin"></i>
                        <i id="pinSeven" class="pin"></i>
                    </div>
                    <div class="secondLine">
                        <i id="pinSix" class="pin"></i>
                        <i id="pinFive" class="pin"></i>
                        <i id="pinFour" class="pin"></i>
                    </div>
                    <div  class="thirdLine">
                        <i id="pinThree" class="pin"></i>
                        <i id="pinTwo" class="pin"></i>
                    </div>
                    <div className="lastLine">
                        <i id="pinOne" class="pin"></i>
                    </div>
                </div>
            </div>
            <h1 className='button'>{values.playerTwo}</h1>
            <div className='btn'>
                <button type="submit" value="Submit"  className="btn-start" ><a className="btn-a-nav" href='#'>Start 🎳</a></button>
            </div>
        </div>
    )
}

export default Start