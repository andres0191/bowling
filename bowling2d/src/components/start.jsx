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
            <h1 className="button">Bowling Score Card</h1>
                <div id='scorecard'>
                    <table id='scorecardTable' class='scorecard' cellpadding='1' cellspacing='0'>
                        <tr>
                            <th colspan='6'>Turn 1</th>
                            <th colspan='6'>Turn 2</th>
                            <th colspan='6'>Turn 3</th>
                            <th colspan='6'>Turn 4</th>
                            <th colspan='6'>Turn 5</th>
                            <th colspan='6'>Turn 6</th>
                            <th colspan='6'>Turn 7</th>
                            <th colspan='6'>Turn 8</th>
                            <th colspan='6'>Turn 9</th>
                            <th colspan='6'>Turn 10</th>
                        </tr>
                        <tr>
                            <td colspan='3'></td><td id="frame1"colspan='3'></td>
                            <td colspan='3'></td><td id="frame2" colspan='3'></td>
                            <td colspan='3'></td><td id="frame3" colspan='3'></td>
                            <td colspan='3'></td><td id="frame4" colspan='3'></td>
                            <td colspan='3'></td><td id="frame5" colspan='3'></td>
                            <td colspan='3'></td><td id="frame6" colspan='3'></td>
                            <td colspan='3'></td><td id="frame7" colspan='3'></td>
                            <td colspan='3'></td><td id="frame8" colspan='3'></td>
                            <td colspan='3'></td><td id="frame9" colspan='3'></td>
                            <td colspan='3'></td><td id="frame10" colspan='3'></td>
                        </tr>
                        <tr>
                            <td colspan='6'id="marker0"></td>
                            <td colspan='6'id="marker1"></td>
                            <td colspan='6'id="marker2"></td>
                            <td colspan='6'id="marker3"></td>
                            <td colspan='6'id="marker4"></td>
                            <td colspan='6'id="marker5"></td>
                            <td colspan='6'id="marker6"></td>
                            <td colspan='6'id="marker7"></td>
                            <td colspan='6'id="marker8"></td>
                            <td colspan='6'id="marker9"></td>
                        </tr>
                    </table>
                </div>
                    <h1 id="comments" class="notice"></h1>
                    <h1 id="gameover" class="notice"></h1>
                    <h1 id="yourscore" class="final-score"></h1>
                <div id="playagain">
            </div>
        </div>
    )
}

export default Start