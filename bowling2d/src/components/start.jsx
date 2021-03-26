import { React } from 'react';
import '../styles/start.scss';


function Start({values}){
    const playerOne = values.playerOne;
    const playerTwo = values.playerTwo;
    const Turn = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    const handleSubmit = (event) => {
        const box1 = document.getElementById('frame1');
        const box2 = document.getElementById('frame2');
        const box3 = document.getElementById('frame3');
        const box4 = document.getElementById('frame4');
        const box5 = document.getElementById('frame5');
        const box6 = document.getElementById('frame6');
        const box7 = document.getElementById('frame7');
        const box8 = document.getElementById('frame8');
        const box9 = document.getElementById('frame9');
        const box10 = document.getElementById('frame10');
        const scoreOne = document.getElementById('scoreOne');
        const winer = document.getElementById('yourscore');

        let score = [], score2 = [];

        const boxOne = document.getElementById('turn1');
        const boxTwo = document.getElementById('turn2');
        const boxThree = document.getElementById('turn3');
        const boxFour = document.getElementById('turn4');
        const boxFive = document.getElementById('turn5');
        const boxSix = document.getElementById('turn6');
        const boxSeven = document.getElementById('turn7');
        const boxEight = document.getElementById('turn8');
        const boxNine = document.getElementById('turn9');
        const boxTen = document.getElementById('turn10');
        const scoreTwo = document.getElementById('scoreTwo');


    /* Generar array con resultados Player 1*/
        const cantidadNumeros = 10;
        let myArray = [];
        while(myArray.length < cantidadNumeros ){
            let numeroAleatorio = Math.ceil(Math.random()*cantidadNumeros);
            myArray[myArray.length] = numeroAleatorio;
        }

        for(let i = 0; i <= Turn.length; i++){
            score = myArray
            console.log(score)
            box1.innerHTML = score[0];
            box2.innerHTML = score[1];
            box3.innerHTML = score[2];
            box4.innerHTML = score[3];
            box5.innerHTML = score[4];
            box6.innerHTML = score[5];
            box7.innerHTML = score[6];
            box8.innerHTML = score[7];
            box9.innerHTML = score[8];
            box10.innerHTML = score[9];
        }


        /* Generar array con resultados player 2 */
        const cantidadNumerosP2 = 10;
        let myArrayP2 = [];
        while(myArrayP2.length < cantidadNumerosP2 ){
            let numeroAleatorio2 = Math.ceil(Math.random()*cantidadNumerosP2);
            myArrayP2[myArrayP2.length] = numeroAleatorio2;
        }

        for(let i = 0; i <= Turn.length; i++){
            score2 = myArrayP2
            console.log(score)
            boxOne.innerHTML = score2[0];
            boxTwo.innerHTML = score2[1];
            boxThree.innerHTML = score2[2];
            boxFour.innerHTML = score2[3];
            boxFive.innerHTML = score2[4];
            boxSix.innerHTML = score2[5];
            boxSeven.innerHTML = score2[6];
            boxEight.innerHTML = score2[7];
            boxNine.innerHTML = score2[8];
            boxTen.innerHTML = score2[9];
        }

        /* score player 1 */
        let sumaPlayerOne = 0;
        score.forEach (function(numOne){
            sumaPlayerOne += numOne;
        });

        /* Score player 2 */
        let sumaPlayerTwo = 0;
        score2.forEach (function(numTwo){
            sumaPlayerTwo += numTwo;
        });
        scoreOne.innerHTML = `The score of ${playerOne}  is: ${sumaPlayerOne}`;
        scoreTwo.innerHTML = `The score of ${playerTwo}  is: ${sumaPlayerTwo}`;

        if(sumaPlayerOne > sumaPlayerTwo){
            winer.innerHTML = `The Winner is ${playerOne} and your score is: ${sumaPlayerOne}`;
        }else {
            winer.innerHTML = `The Winner is ${playerTwo} and your score is: ${sumaPlayerTwo}`;
        }
        }




    return(
        <div className="container">
            <h1 className='button'>{values.playerOne}</h1>
            {/* table of score player 1 */}
            <h1 className="button">Bowling Score Card Player 1</h1>
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
                            <td colSpan='3'></td><td id="frame1"colSpan='3'></td>
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
                {/* pins of bowling */}
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
            {/* Table of score player 2 */}
            <h1 className="button">Bowling Score Card Player 2</h1>
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
                            <td colSpan='3'></td><td id="turn1"colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn2" colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn3" colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn4" colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn5" colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn6" colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn7" colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn8" colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn9" colSpan='3'></td>
                            <td colSpan='3'></td><td id="turn10" colSpan='3'></td>
                        </tr>
                        <tr>
                            <td colSpan='6'id="mark0"></td>
                            <td colSpan='6'id="mark1"></td>
                            <td colSpan='6'id="mark2"></td>
                            <td colSpan='6'id="mark3"></td>
                            <td colSpan='6'id="mark4"></td>
                            <td colSpan='6'id="mark5"></td>
                            <td colSpan='6'id="mark6"></td>
                            <td colSpan='6'id="mark7"></td>
                            <td colSpan='6'id="mark8"></td>
                            <td colSpan='6'id="mark9"></td>
                        </tr>
                    </table>
                </div>
                {/* score comparation */}
                    <h1 id="scoreOne" className="notice"></h1>
                    <h1 id="scoreTwo" className="notice"></h1>
                    <h1 id="yourscore" className="final-score"></h1>
                <div id="playagain">
            </div>
        </div>
    )
}

export default Start