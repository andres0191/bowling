import { React, useState } from 'react';
import '../styles/start.scss';


function Start({values}){
    const [scorePo, setScorePo] = useState({playerOne:"", playerTwo:""})
    const playerOne = values.playerOne;
    const playerTwo = values.playerTwo;
    const Turn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    const handleChange = (event) => {
        for(let i = 0; i <= Turn.length; i++){
            const score = Math.floor(Math.random() * (10 - 1) + 1)
            setScorePo({ ...scorePo, score});
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(scorePo)
    }


    return(
        <div className="container">
            <h1 className='button'>{values.playerOne}</h1>
            <div className="box-bowling">
                <div className="ballOne">
                    <div className="firstLine">
                        <i id="pinTen" className="pin"></i>
                        <i id="pinNine" className="pin"></i>
                        <i id="pinEight" className="pin"></i>
                        <i id="pinSeven" className="pin"></i>
                    </div>
                    <div className="secondLine">
                        <i id="pinSix" className="pin"></i>
                        <i id="pinFive" className="pin"></i>
                        <i id="pinFour" className="pin"></i>
                    </div>
                    <div  className="thirdLine">
                        <i id="pinThree" className="pin"></i>
                        <i id="pinTwo" className="pin"></i>
                    </div>
                    <div className="lastLine">
                        <i id="pinOne" className="pin"></i>
                    </div>
                </div>
            </div>
            <h1 className='button'>{values.playerTwo}</h1>
            <div className='btn'>
                <button  type="submit" value="Submit" className="btn-start"  onClick={handleSubmit}>
                    <a className="btn-a-nav">Start 🎳</a>
                </button>
            </div>
            {/* Table of score */}
            <h1 className="button">Bowling Score Card</h1>
                <div id='scorecard'>
                    <table id='scorecardTable' className='scorecard' cellPadding='1' cellSpacing='0'>
                        <tr>
                            <th colSpan='6'>Turn 1</th>
                            <th colSpan='6'>Turn 2</th>
                            <th colSpan='6'>Turn 3</th>
                            <th colSpan='6'>Turn 4</th>
                            <th colSpan='6'>Turn 5</th>
                            <th colSpan='6'>Turn 6</th>
                            <th colSpan='6'>Turn 7</th>
                            <th colSpan='6'>Turn 8</th>
                            <th colSpan='6'>Turn 9</th>
                            <th colSpan='6'>Turn 10</th>
                        </tr>
                        <tr>
                            <td colSpan='3'></td><td id="frame1"colSpan='3'>`${handleChange}`</td>
                            <td colSpan='3'></td><td id="frame2" colSpan='3'></td>
                            <td colSpan='3'></td><td id="frame3" colSpan='3'></td>
                            <td colSpan='3'></td><td id="frame4" colSpan='3'></td>
                            <td colSpan='3'></td><td id="frame5" colSpan='3'></td>
                            <td colSpan='3'></td><td id="frame6" colSpan='3'></td>
                            <td colSpan='3'></td><td id="frame7" colSpan='3'></td>
                            <td colSpan='3'></td><td id="frame8" colSpan='3'></td>
                            <td colSpan='3'></td><td id="frame9" colSpan='3'></td>
                            <td colSpan='3'></td><td id="frame10" colSpan='3'></td>
                        </tr>
                        <tr>
                            <td colSpan='6'id="marker0"></td>
                            <td colSpan='6'id="marker1"></td>
                            <td colSpan='6'id="marker2"></td>
                            <td colSpan='6'id="marker3"></td>
                            <td colSpan='6'id="marker4"></td>
                            <td colSpan='6'id="marker5"></td>
                            <td colSpan='6'id="marker6"></td>
                            <td colSpan='6'id="marker7"></td>
                            <td colSpan='6'id="marker8"></td>
                            <td colSpan='6'id="marker9"></td>
                        </tr>
                    </table>
                </div>
                    <h1 id="comments" className="notice">a</h1>
                    <h1 id="gameover" className="notice">b</h1>
                    <h1 id="yourscore" className="final-score">c</h1>
                <div id="playagain">
            </div>
        </div>
    )
}

export default Start